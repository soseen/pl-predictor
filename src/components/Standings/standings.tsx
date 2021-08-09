/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { axios } from '../../axios/axios'
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { format } from "date-fns"
import { User, UserContext } from '../../context/userContext';
import useStyles from './standings.styles';
import { Table, TableContainer, Typography, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core'
// import { matchResults as mockResults} from '../../data/matchResults.js';
import { Actions as FetchAction } from '../../context/fetchingContext';
import { FixturesData, UserPrediction } from '../AppContent/app-content';
import UserPredictionsModal from '../UserPredictionsModal/user-predictions-modal';
import StandingsModal from '../StandingsModal/standings-modal';
import { isFetchingContext, setIsFetchingContext } from '../../context/fetchingContext';
import { PlayerActions, PlayersContext, PlayersDispatchContext } from '../../context/playersContext';

export interface UsersResponse extends AxiosResponse {
    data: {
        users: User[]
    }
}

export type Gameweek = {
    id: number,
    UserId: number,
    seasonId: number
    gameweek: number,
    matchPredictions: UserPrediction[]
    
}

type Props = {
    matchdayNumber: number;
    seasonId: number | null;
}

const Standings: React.FC<Props> = ({ matchdayNumber }) => {

    const classes = useStyles();
    const user = useContext(UserContext);
    const isFetching = useContext(isFetchingContext);
    const setFetching = useContext(setIsFetchingContext);
    const players = useContext(PlayersContext);
    const dispatchPlayers = useContext(PlayersDispatchContext);
    // const [players, setPlayers] = useState<User[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isStandingsOpen, setIsStandingsOpen] = useState<boolean>(false);
    const [player, setPlayer] = useState<User | null>(null);

    const standings = useMemo(() => {
        const playersToDisplay = players.sort((a,b) => b.points - a.points);
        return playersToDisplay;
    }, [players])

    const getPlayers = async () => {
        const usersResponse: UsersResponse = await axios.get('/users');
        dispatchPlayers({type: PlayerActions.setUser, payload: usersResponse.data.users});
    } 

    useEffect(() => {
        getPlayers()
    }, []);

    const updateStandings = async () => {
        if (!isFetching) {
            try {
                setFetching({type: FetchAction.setIsFetching, payload: true})

                const currentDate = format(new Date(), 'yyyy-MM-dd');
                const matchResultsResponse = await fetch(`https://api.football-data.org/v2/competitions/2021/matches?dateFrom=2021-08-01&dateTo=${currentDate}&status=FINISHED`, {
                    headers: {
                      'X-Auth-Token': 'd4a9110b90c6415bb3d252836a4bf034'
                    },
                    mode: 'cors'
                });

                const matchResults: FixturesData = await matchResultsResponse.json()
        
                const promises: Promise<any>[] = [];
        
                const gameweekPredictionsResponse = await axios.get('gameweekPredictions');
                const gameweekPredictions: Gameweek[] = gameweekPredictionsResponse.data.gameweekPredictions;
        
                gameweekPredictions?.forEach((userGameweek: Gameweek) => {
        
                    let points = 0;
        
                    const predictionsToResolve = userGameweek.matchPredictions.filter(prediction => !prediction.isResolved);
        
                    if(predictionsToResolve?.length > 0) {
                        predictionsToResolve.forEach((prediction) => {
                            const matchResult = matchResults.matches?.find(match => match.id === prediction.matchId);
                            const amplifierValue = prediction.isBoosted ? 1 : 0;
                            let predictionToUpdate = {...prediction, isResolved: true};
            
                            if(matchResult && (matchResult?.score.fullTime.homeTeam !== null && matchResult?.score.fullTime.homeTeam !== undefined) && (matchResult?.score.fullTime.awayTeam !== null && matchResult?.score.fullTime.awayTeam !== undefined)) {
                                if (prediction.homeTeamScore === matchResult.score.fullTime.homeTeam && prediction.awayTeamScore === matchResult.score.fullTime.awayTeam) {
                                    points += 3 + 3 * amplifierValue;
                                    predictionToUpdate = {...predictionToUpdate, isExactScore: true, isCorrectScore: true, points: 3 + 3 * amplifierValue}
                                } else 
                                if ((prediction.homeTeamScore > prediction.awayTeamScore) && (matchResult.score.fullTime.homeTeam > matchResult.score.fullTime.awayTeam)) {
                                    points += 1 + 1 * amplifierValue;
                                    predictionToUpdate = {...predictionToUpdate, isExactScore: false, isCorrectScore: true, points: 1 + 1 * amplifierValue}
                                } else 
                                if ((prediction.homeTeamScore === prediction.awayTeamScore) && (matchResult.score.fullTime.homeTeam === matchResult.score.fullTime.awayTeam)) {
                                    points += 1 + 1 * amplifierValue;
                                    predictionToUpdate = {...predictionToUpdate, isExactScore: false, isCorrectScore: true, points: 1 + 1 * amplifierValue}
                                } else 
                                if ((prediction.homeTeamScore < prediction.awayTeamScore) && (matchResult.score.fullTime.homeTeam < matchResult.score.fullTime.awayTeam)) {
                                    points += 1 + 1 * amplifierValue;
                                    predictionToUpdate = {...predictionToUpdate, isExactScore: false, isCorrectScore: true, points: 1 + 1 * amplifierValue}
                                } else {
                                    predictionToUpdate = {...predictionToUpdate, isExactScore: false, isCorrectScore: false, points: 0}
                                }
                                promises.push(axios.put('/prediction', predictionToUpdate).catch(err => console.log(err)));
                                
                            }
                        })
                        promises.push(axios.put('/user', {UserId: userGameweek.UserId, points}).catch(err => console.log(err)));
                    }   
        
                })
    
                await Promise.all(promises);
                setFetching({type: FetchAction.setIsFetching, payload: false})
            } catch (error) {
                console.log(error)
                setFetching({type: FetchAction.setIsFetching, payload: false})
            }
    
            getPlayers();
        } 
    }

    const handleUserPredictions = (player: User) => {
        if (user?.user) {
            setPlayer(player);
            setIsOpen(true);
        }
    }


    return (
        <div className={classes.container}>
            <div className={classes.tableContainer}>
                <Typography className={classes.tableName} variant='body1'>Standings</Typography>
                <TableContainer>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow className={classes.tableHeadRow}>
                                <TableCell size="small" style={{width: '50px'}}>
                                    <Typography variant={'body1'}>P</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant={'body1'}>Name</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant={'body1'}>Points</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {standings.length <= 10 ?
                            <TableBody>
                                {standings.map((player, index) => (
                                <TableRow key={player.id} className={classes.tableRow} onClick={() => handleUserPredictions(player)} tabIndex={0} role="button">
                                    <TableCell>
                                        <Typography noWrap variant={'body1'}>
                                            {index + 1}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography noWrap variant={'body1'}>
                                            {player.username}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant={'body1'}>
                                            {player.points}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                            :
                            <TableBody>
                            {standings.slice(0,10).map((player, index) => (
                            <TableRow key={player.id} className={classes.tableRow} onClick={() => handleUserPredictions(player)} tabIndex={0} role="button">
                                <TableCell>
                                    <Typography noWrap variant={'body1'}>
                                        {index + 1}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography noWrap variant={'body1'}>
                                        {player.username}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant={'body1'}>
                                        {player.points}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                            <TableRow className={classes.tableRow}>
                                <TableCell variant="footer" colSpan={3}>
                                    <Typography variant={'body1'}>. . .</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        }
                    </Table>
                </TableContainer>
            </div>
            {standings.length > 10 &&
                <Button className={classes.button} onClick={() => setIsStandingsOpen(true)}>
                    Display all
                </Button>
            }
            {user?.user?.role === "User" &&
                <Button className={classes.button} onClick={updateStandings}>Update Standings</Button>
            }
            <UserPredictionsModal isOpen={isOpen} setIsOpen={setIsOpen} player={player} matchdayNumber={matchdayNumber} />
            <StandingsModal isOpen={isStandingsOpen} setIsOpen={setIsStandingsOpen} standings={standings} />
        </div>
    );
};

export default Standings;
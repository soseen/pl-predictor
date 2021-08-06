import { AxiosResponse } from 'axios';
import { axios } from '../../axios/axios'
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { format } from "date-fns"
import { User, UserContext } from '../../context/userContext';
import useStyles from './standings.styles';
import { Table, TableContainer, Typography, TableHead, TableBody, TableRow, TableCell, Button, Link } from '@material-ui/core'
import { matchResults } from '../../data/matchResults.js';
import { Actions as FetchAction } from '../../context/fetchingContext';
import { Fixture, FixturesData, UserPrediction } from '../AppContent/app-content';
import UserPredictionsModal from '../UserPredictionsModal/user-predictions-modal';
import { isFetchingContext, setIsFetchingContext } from '../../context/fetchingContext';

interface UsersResponse extends AxiosResponse {
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

const Standings: React.FC<Props> = ({ matchdayNumber, seasonId }) => {

    const classes = useStyles();
    const user = useContext(UserContext);
    const isFetching = useContext(isFetchingContext);
    const setFetching = useContext(setIsFetchingContext);
    const [players, setPlayers] = useState<User[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [player, setPlayer] = useState<User | null>(null);

    const standings = useMemo(() => {
        const playersToDisplay = players.sort((a,b) => b.points - a.points);
        return playersToDisplay;
    }, [players])

    const getPlayers = async () => {
        const usersResponse: UsersResponse = await axios.get('/users');
        setPlayers(usersResponse.data.users)
    } 

    useEffect(() => {
        getPlayers()
    }, []);

    const updateStandings = async () => {
        if (!isFetching) {
            try {
                setFetching({type: FetchAction.setIsFetching, payload: true})

                const currentDate = format(new Date(), 'yyyy-MM-dd');
                const currentYear = format(new Date(), "yyyy");
                const matchResultsResponse = await fetch(`https://api.football-data.org/v2/competitions/${currentYear}/matches?dateFrom=2021-08-01&dateTo=${currentDate}&status=FINISHED`, {
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
                            console.log(matchResult);
                            const amplifierValue = prediction.isBoosted ? 1 : 0;
                            let predictionToUpdate = {...prediction, isResolved: true};
            
                            if(matchResult && matchResult.score.fullTime.homeTeam && matchResult.score.fullTime.awayTeam) {
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
                                <TableCell>
                                    <Typography variant={'body1'}>Name</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant={'body1'}>Points</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {standings.map((player) => (
                                <TableRow key={player.id} className={classes.tableRow} onClick={() => handleUserPredictions(player)} tabIndex={0} role="button">
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
                    </Table>
                </TableContainer>
            </div>
            <Button className={classes.button} onClick={updateStandings}>Update</Button>
            <UserPredictionsModal isOpen={isOpen} setIsOpen={setIsOpen} player={player} matchdayNumber={matchdayNumber} />
        </div>
    );
};

export default Standings;
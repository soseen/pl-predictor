import { AxiosResponse } from 'axios';
import { axios } from '../../axios/axios'
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { User, UserContext } from '../../context/userContext';
import useStyles from './standings.styles';
import { Table, TableContainer, Typography, TableHead, TableBody, TableRow, TableCell, Button, Link } from '@material-ui/core'
import { matchResults } from '../../data/matchResults.js';
import { Actions, CurrentFixturesContext, CurrentFixturesDispatchContext } from '../../context/currentFixturesContext';
import { Fixture, UserPrediction } from '../AppContent/app-content';
import UserPredictionsModal from '../UserPredictionsModal/user-predictions-modal';

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
    const currentFixtures = useContext(CurrentFixturesContext);
    const dispatchFixtures = useContext(CurrentFixturesDispatchContext);
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

        let promises: Promise<any>[] = [];

        const gameweekPredictionsResponse = await axios.post('gameweekPredictions', { gameweek: matchdayNumber });

        const gameweekPredictions: Gameweek[] = gameweekPredictionsResponse.data.gameweekPredictions;

        gameweekPredictions.forEach((userGameweek: Gameweek) => {

            let points = 0;

            const predictionsToResolve = userGameweek.matchPredictions.filter(prediction => !prediction.isResolved);
            
            predictionsToResolve.forEach((prediction) => {
                const matchResult = matchResults.matches.find(match => match.id === prediction.matchId);
                let predictionToUpdate = {...prediction, isResolved: true};

                if(matchResult) {
                    if (prediction.homeTeamScore === matchResult.score.fullTime.homeTeam && prediction.awayTeamScore === matchResult.score.fullTime.awayTeam) {
                        points += 3;
                        predictionToUpdate = {...predictionToUpdate, isExactScore: true, isCorrectScore: true}
                    } else 
                    if ((prediction.homeTeamScore > prediction.awayTeamScore) && (matchResult.score.fullTime.homeTeam > matchResult.score.fullTime.awayTeam)) {
                        points += 1;
                        predictionToUpdate = {...predictionToUpdate, isExactScore: false, isCorrectScore: true}
                    } else 
                    if ((prediction.homeTeamScore === prediction.awayTeamScore) && (matchResult.score.fullTime.homeTeam === matchResult.score.fullTime.awayTeam)) {
                        points += 1;
                        predictionToUpdate = {...predictionToUpdate, isExactScore: false, isCorrectScore: true}
                    } else 
                    if ((prediction.homeTeamScore < prediction.awayTeamScore) && (matchResult.score.fullTime.homeTeam < matchResult.score.fullTime.awayTeam)) {
                        points += 1;
                        predictionToUpdate = {...predictionToUpdate, isExactScore: false, isCorrectScore: true}
                    } else {
                        predictionToUpdate = {...predictionToUpdate, isExactScore: false, isCorrectScore: false}
                    }

                    console.log(predictionToUpdate);
                    promises.push(axios.put('/prediction', predictionToUpdate).catch(err => console.log(err)));
                    
                }
            })

            promises.push(axios.put('/user', {UserId: userGameweek.UserId, points}).catch(err => console.log(err)));

        })

        try {
            await Promise.all(promises);
        } catch(error) {
            console.log(error);
        }

        const userGameweekPredictionsResponse = await axios.post('/gameweek', {
            UserId: user?.user?.id,
            gameweek: matchdayNumber,
            seasonId: seasonId
          });

        if (userGameweekPredictionsResponse.data.gameweek[0]) {
            const userPredictions: UserPrediction[] = userGameweekPredictionsResponse.data?.gameweek[0].matchPredictions;

            const fixturesToDispatch: Fixture[] | undefined = currentFixtures?.fixtures?.map((fixture) => {
                const prediction = userPredictions.find(prediction => prediction.matchId === fixture.id );
                if(prediction) {
                  return {...fixture,
                    isResolved: prediction.isResolved,
                    isExactScore: prediction.isExactScore,
                    isCorrectScore: prediction.isCorrectScore,
                  }
                } else {
                  return fixture
                }
            })
            if (fixturesToDispatch) { dispatchFixtures({type: Actions.setFixtures, payload: fixturesToDispatch}) }
        }

        getPlayers();
    }

    const handleUserPredictions = (player: User) => {
        setPlayer(player);
        setIsOpen(true);
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
                                <TableRow key={player.id} className={classes.tableRow}>
                                    <TableCell>
                                        <Typography noWrap variant={'body1'}>
                                            <Link className={classes.userLink} onClick={() => handleUserPredictions(player)}>{player.username}</Link>
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
            <UserPredictionsModal isOpen={isOpen} setIsOpen={setIsOpen} player={player} />
        </div>
    );
};

export default Standings;
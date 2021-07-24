import { AxiosResponse } from 'axios';
import { axios } from '../../axios/axios'
import React, { useContext, useEffect, useState } from 'react';
import { User } from '../../context/userContext';
import useStyles from './standings.styles';
import { Table, TableContainer, Typography, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core'
import { matchResults } from '../../data/matchResults.js';
import { CurrentFixturesContext } from '../../context/currentFixturesContext';
import { Fixture, UserPrediction } from '../AppContent/app-content';

interface UsersResponse extends AxiosResponse {
    data: {
        users: User[]
    }
}

type Gameweek = {
    id: number,
    UserId: number,
    seasonId: number
    gameweek: number,
    matchPredictions: UserPrediction[]
    
}

type Props = {
    matchdayNumber: number;
}

const Standings: React.FC<Props> = ({ matchdayNumber }) => {

    const classes = useStyles();
    const currentFixtures = useContext(CurrentFixturesContext);
    const [players, setPlayers] = useState<User[]>([]);

    const getPlayers = async () => {
        const usersResponse: UsersResponse = await axios.get('/users');
        setPlayers(usersResponse.data.users)
    } 

    useEffect(() => {
        getPlayers()
    }, []);

    const updateStandings = async () => {
        console.log(currentFixtures);
        console.log(matchResults);

        let promises: Promise<any>[] = [];

        const fixturesToUpdate = currentFixtures.fixtures?.filter(fixture => (fixture.prediction.homeTeamScore && fixture.prediction.awayTeamScore) && !fixture.isResolved).map((fixture) => {
            const match = (matchResults.matches.find(match => match.id === fixture.id));
                if (match) {
                    return {
                        ...fixture,
                        score: {
                            fullTime: {
                                homeTeam: match.score.fullTime.homeTeam,
                                awayTeam: match.score.fullTime.awayTeam
                            },
                            winner:  match.score.winner
                        }
                    }
                } else {
                    return fixture
                }
        })
        const gameweekPredictionsResponse = await axios.post('gameweekPredictions', { gameweek: matchdayNumber });

        const gameweekPredictions: Gameweek[] = gameweekPredictionsResponse.data.gameweekPredictions;

        gameweekPredictions.forEach((userGameweek: Gameweek) => {
            console.log(userGameweek);

            let points = 0;

            const predictionsToResolve = userGameweek.matchPredictions.filter(prediction => !prediction.isResolved);
            
            predictionsToResolve.forEach((prediction) => {
                const matchResult = matchResults.matches.find(match => match.id === prediction.matchId);
                console.log(matchResult);

                if(matchResult) {
                    if (prediction.homeTeamScore === matchResult.score.fullTime.homeTeam && prediction.awayTeamScore === matchResult.score.fullTime.awayTeam) {
                        points += 3;
                    } else 
                    if ((prediction.homeTeamScore > prediction.awayTeamScore) && (matchResult.score.fullTime.homeTeam > matchResult.score.fullTime.awayTeam)) {
                        points += 1;
                    } else 
                    if ((prediction.homeTeamScore === prediction.awayTeamScore) && (matchResult.score.fullTime.homeTeam === matchResult.score.fullTime.awayTeam)) {
                        points += 1;
                    } else 
                    if ((prediction.homeTeamScore < prediction.awayTeamScore) && (matchResult.score.fullTime.homeTeam < matchResult.score.fullTime.awayTeam)) {
                        points += 1;
                    }

                    console.log(points);
                    console.log(prediction);
                    console.log(matchResult.score.fullTime);
                }
            })

        })

        // console.log(fixturesToUpdate);
        // fixturesToUpdate?.forEach((fixture) => {
        //     promises.push(axios.put('/prediction', fixture).catch(err => console.log(err)))
        // })

        // try {
        //     await Promise.all(promises)
        // } catch (error) {
        //     console.log(error)
        // }

        // try {
        //     const users = await axios.get('/users');
        //     console.log(users.data.users);
        // } catch (error) {
        //     console.log(error);
        // }
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
                            {players.map((player) => (
                                <TableRow key={player.id} className={classes.tableRow}>
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
        </div>
    );
};

export default Standings;
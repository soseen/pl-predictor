/* eslint-disable react/prop-types */
import { Dialog, Typography, Box, Button } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { axios } from '../../axios/axios';
import { Actions as FetchAction, setIsFetchingContext } from '../../context/fetchingContext';
import { User, UserContext } from '../../context/userContext';
import useStyles from './user-predictions-modal.styles';
import { Gameweek } from '../Standings/standings';
import { TeamsContext } from '../../context/teamsContext';
import classNames from 'classnames';
import { UserPrediction } from '../AppContent/app-content';

type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    player: User | null;
    matchdayNumber?: number;
}

interface GameweekWithPoints extends Gameweek {
    points: number
}

const UserPredictionsModal: React.FC<Props> = ({ isOpen, setIsOpen, player, matchdayNumber }) => {

    const classes = useStyles();
    const teams = useContext(TeamsContext);
    const user = useContext(UserContext);
    const [userPredictions, setUserPredictions] = useState<GameweekWithPoints[]>([]);
    const setFetching = useContext(setIsFetchingContext);
        
    const getUserPredictions = async () => {
        setFetching({type: FetchAction.setIsFetching, payload: true});
        try {
            const userPredictionsResponse = await axios.post('/userPredictions', {id: player?.id} )
            const predictions: Gameweek[] = userPredictionsResponse.data.userPredictions;
            if (predictions) { 
                const gameweekData: GameweekWithPoints[] = [];

                predictions.forEach((gameweek) => {
                    const pointsAcquired: number = gameweek.matchPredictions.reduce((points: number, prediction) => {
                        points += prediction.points
                        return points
                    }, 0
                    )
                    gameweekData.push({...gameweek, points: pointsAcquired})
                });
                gameweekData.sort((a,b) => b.gameweek - a.gameweek);
                setUserPredictions(gameweekData);
            }
        } catch (error) {
            console.log(error)
        }
        setFetching({type: FetchAction.setIsFetching, payload: false});
    }

    const deletePrediction = async (prediction: UserPrediction) => {
        const deletePredictionResponse = await axios.delete('/prediction', {data: {id: prediction.id }})
        if(deletePredictionResponse.status === 200){
            getUserPredictions();
        }
    }

    useEffect(() => {
        if(isOpen) {
            getUserPredictions();
        }
    },[isOpen])

    const handleClose = () => {
        setUserPredictions([]);
        setIsOpen(false);
    }

    return(
        <Dialog classes={{ paper: classes.dialogMain}} open={isOpen} onClose={handleClose}>
            <Typography variant="h5" component="h2" className={classes.username}>{player?.username}</Typography>
            <Box className={classes.userPredictions}>
                {userPredictions.length > 0 ? 
                    <div className={classes.tableContainer}>
                        {userPredictions.map((gameweek) => (
                            <div className={classes.table} key={gameweek.id}>
                                <div className={classes.title}>
                                    <Typography>{"Gameweek " + gameweek.gameweek}</Typography>
                                    <Typography className={classes.points}>{gameweek.points === 1 ? gameweek.points + " point" : gameweek.points + " points"}</Typography>
                                </div>

                                <div>
                                    {gameweek.matchPredictions.map((prediction) => (
                                        <div className={prediction.isBoosted ? classNames(classes.rowBoosted, classes.row) : classes.row} key={prediction.id}>
                                            
                                            {user?.user?.role === "Admin" &&
                                                <Button variant="contained" className={classes.deletePredictionButton} onClick={() => deletePrediction(prediction)}>Delete</Button>
                                            } 
                                            <img className={classes.crest} src={teams.find(team => team.name === prediction.homeTeamName)?.crestUrl} alt={prediction.homeTeamName}></img>
                                            <div className={classes.teamName}>
                                                <Typography className={classes.name} variant="body2">{prediction.homeTeamName.substring(0, prediction.homeTeamName.length-3)}</Typography>
                                            </div>
                                            <div className={classes.scoreWrapper}>
                                                <Typography className={prediction.isExactScore ? classNames(classes.exactScore, classes.score) : prediction.isCorrectScore ? classNames(classes.correctScore, classes.score) :  prediction.isResolved ? classNames(classes.incorrectScore, classes.score) : classes.score} variant="body2">{prediction.homeTeamScore}</Typography>
                                                <span className={classes.span}> : </span>
                                                <Typography className={prediction.isExactScore ? classNames(classes.exactScore, classes.score) : prediction.isCorrectScore ? classNames(classes.correctScore, classes.score) :  prediction.isResolved ? classNames(classes.incorrectScore, classes.score) : classes.score} variant="body2">{prediction.awayTeamScore}</Typography>
                                            </div>
                                            <div className={classes.teamName}>
                                                <Typography className={classes.name} variant="body2" style={{textAlign: "right"}}>{prediction.awayTeamName.substring(0, prediction.awayTeamName.length-3)}</Typography>
                                            </div>
                                            <img className={classes.crest} src={teams.find(team => team.name === prediction.awayTeamName)?.crestUrl} alt={prediction.homeTeamName}></img>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                :
                    <Typography>No predictions yet...</Typography>
                }
            </Box>
        </Dialog>
    )
}

export default UserPredictionsModal
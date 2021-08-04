/* eslint-disable react/prop-types */
import { Dialog, Typography, Box } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { axios } from '../../axios/axios';
import { User } from '../../context/userContext';
import useStyles from './user-predictions-modal.styles';
import { Gameweek } from '../Standings/standings';
import { TeamsContext } from '../../context/teamsContext';
import classNames from 'classnames';

type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    player: User | null;
}

const UserPredictionsModal: React.FC<Props> = ({ isOpen, setIsOpen, player }) => {

    const classes = useStyles();
    const teams = useContext(TeamsContext);
    const [userPredictions, setUserPredictions] = useState<Gameweek[]>([]);

    const getUserPredictions = async () => {

        try {
            const userPredictionsResponse = await axios.post('/userPredictions', {id: player?.id} )
            const predictions: Gameweek[] = userPredictionsResponse.data.userPredictions;
            const team = teams.find(team => team.name === predictions[0].matchPredictions[0].homeTeamName);
            console.log(teams);
            console.log(predictions[0].matchPredictions[0].homeTeamName);
            console.log(team);
            if (predictions) { setUserPredictions(userPredictionsResponse.data.userPredictions) }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        if (player) { getUserPredictions(); }
    },[player])

    const handleClose = () => {
        setUserPredictions([]);
        setIsOpen(false);
    }

    return(
        <Dialog classes={{ paper: classes.dialogMain}} open={isOpen} onClose={handleClose}>
            <Typography variant="h4" component="h2">{player?.username}</Typography>
            <Box className={classes.userPredictions}>
                {userPredictions.length > 0 ? 
                    <div className={classes.tableContainer}>
                        {userPredictions.map((gameweek) => (
                            <div className={classes.table} key={gameweek.id}>
                                <Typography className={classes.title}>{"Gameweek " + gameweek.gameweek}</Typography>
                                <div>
                                    {gameweek.matchPredictions.map((prediction) => (
                                        <div className={classes.row} key={prediction.id}>
                                            <img className={classes.crest} src={teams.find(team => team.name === prediction.homeTeamName)?.crestUrl} alt={prediction.homeTeamName}></img>
                                            <div className={classes.teamName}>
                                                <Typography variant="body2">{prediction.homeTeamName}</Typography>
                                            </div>
                                            <div className={classes.scoreWrapper}>
                                                <Typography className={prediction.isExactScore ? classNames(classes.exactScore, classes.score) : prediction.isCorrectScore ? classNames(classes.correctScore, classes.score) :  classNames(classes.incorrectScore, classes.score)} variant="body2">{prediction.homeTeamScore}</Typography>
                                                <span className={classes.span}> : </span>
                                                <Typography className={prediction.isExactScore ? classNames(classes.exactScore, classes.score) : prediction.isCorrectScore ? classNames(classes.correctScore, classes.score) :  classNames(classes.incorrectScore, classes.score)} variant="body2">{prediction.awayTeamScore}</Typography>
                                            </div>
                                            <div className={classes.teamName}>
                                                <Typography variant="body2" style={{textAlign: "right"}}>{prediction.awayTeamName}</Typography>
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
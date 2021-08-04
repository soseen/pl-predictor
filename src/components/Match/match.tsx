import { Box, Typography, Button } from '@material-ui/core';
import React, { useContext, useMemo } from 'react';
import { Fixture } from '../AppContent/app-content'
import useStyles from './match.styles';
import { TeamsContext } from '../../context/teamsContext';
import { Actions, CurrentFixturesContext, CurrentFixturesDispatchContext } from '../../context/currentFixturesContext';
import classNames from 'classnames';
import FlashOnIcon from '@material-ui/icons/FlashOn';

type Props = {
    fixture: Fixture,
    boostedPredictionId: number | null,
    setBoostedPredictionId: (boostedPredictionId: number) => void
}


const Match: React.FC<Props> = ({fixture, boostedPredictionId, setBoostedPredictionId}) => {

    const classes = useStyles();
    const teams = useContext(TeamsContext);
    const dispatchFixture = useContext(CurrentFixturesDispatchContext);

    const isBoostedPrediction = useMemo(() => 
        boostedPredictionId === fixture.id ? true : false , [boostedPredictionId])
    
    const fixtureToDisplay: Fixture = {
        ...fixture, 
        homeTeam: {...fixture.homeTeam, crestUrl: teams.find(t => t.id === fixture.homeTeam.id)?.crestUrl},
        awayTeam: {...fixture.awayTeam, crestUrl: teams.find(t => t.id === fixture.awayTeam.id)?.crestUrl}
    }

    return (
        <Box 
            className={ 
                fixture.isExactScore ? classNames(classes.rowExactScore, classes.row) : 
                fixture.isCorrectScore ? classNames(classes.rowCorrectScore, classes.row) : 
                fixture.isResolved ? classNames(classes.rowIncorrectScore, classes.row) : 
                fixture.isSubmited ? classNames(classes.rowSubmitted, classes.row) :
                classes.row
            }
        >
            <Button className={isBoostedPrediction ? classNames(classes.bonusButtonPressed, classes.bonusButton) : classes.bonusButton} onClick={() => setBoostedPredictionId(fixture.id)} title="double points boost"><FlashOnIcon /></Button>
            <img className={classes.crest} src={fixtureToDisplay.homeTeam.crestUrl} alt={fixtureToDisplay.homeTeam.name}></img>
            <div className={classes.teamName}>
                <Typography variant={'body2'}>{fixture.homeTeam.name}</Typography>
            </div>
            <div className={classes.scoreInputs}>
                <input 
                    disabled={fixtureToDisplay.isSubmited}
                    className={classes.scoreInput}
                    type="text"
                    value={
                        (fixtureToDisplay.prediction?.homeTeamScore || fixtureToDisplay.prediction?.homeTeamScore === 0) ? 
                            fixtureToDisplay.prediction?.homeTeamScore
                            : 
                            ''
                        } 
                    onChange={
                        (e) => dispatchFixture(
                            {
                                type: Actions.setPrediction,
                                payload: {
                                    ...fixture,
                                    prediction: {
                                        ...fixture.prediction,
                                        homeTeamScore: e.target.value
                                    }
                                }
                            }
                        )
                    }
                    maxLength={2}>
                </input>
                <span className={classes.span}> : </span>
                <input 
                    disabled={fixtureToDisplay.isSubmited}
                    className={classes.scoreInput}
                    type="text"
                    value={
                        (fixtureToDisplay.prediction?.awayTeamScore ||
                        fixtureToDisplay.prediction?.awayTeamScore === 0)
                        ?
                        fixtureToDisplay.prediction?.awayTeamScore
                        : ''
                    }
                    onChange={
                        (e) => dispatchFixture(
                            {
                                type: Actions.setPrediction,
                                payload: {
                                    ...fixture,
                                    prediction: {
                                        ...fixture.prediction,
                                        awayTeamScore: e.target.value
                                    }
                                }
                            }
                        )
                    }
                    maxLength={2}>
                </input>
            </div>
            <div className={classes.teamName}>
                <Typography variant={'body2'} style={{textAlign: "right"}}>{fixture.awayTeam.name}</Typography>
            </div>
            <img className={classes.crest} src={fixtureToDisplay.awayTeam.crestUrl} alt={fixtureToDisplay.awayTeam.name}></img>
        </Box>
    );
};

export default Match;
import { Box, Typography  } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import { Fixture } from '../AppContent/app-content'
import useStyles from './match.styles';
import { TeamsContext } from '../../context/teamsContext';
import { Actions, CurrentFixturesContext, CurrentFixturesDispatchContext } from '../../context/currentFixturesContext';
import classNames from 'classnames';

type Props = {
    fixture: Fixture
}


const Match: React.FC<Props> = ({fixture}) => {

    const classes = useStyles();
    const teams = useContext(TeamsContext);
    const dispatchFixture = useContext(CurrentFixturesDispatchContext);
    
    const fixtureToDisplay: Fixture = {
        ...fixture, 
        homeTeam: {...fixture.homeTeam, crestUrl: teams.find(t => t.id === fixture.homeTeam.id)?.crestUrl},
        awayTeam: {...fixture.awayTeam, crestUrl: teams.find(t => t.id === fixture.awayTeam.id)?.crestUrl}
    }

    return (
        <Box
            className={
                fixtureToDisplay.isResolved ? (
                    fixtureToDisplay.isExactScore ? classNames(classes.row, classes.rowExactScore) : 
                    fixtureToDisplay.isCorrectScore ? classNames(classes.row, classes.rowCorrectScore) : 
                    classNames(classes.row, classes.rowIncorrectScore)) : 
                fixtureToDisplay.isSubmited ? 
                    classNames(classes.row, classes.rowSubmitted) : 
                    classes.row}
        >
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
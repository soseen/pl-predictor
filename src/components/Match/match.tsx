import { Box, Typography, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Fixture } from '../AppContent/app-content'
import useStyles from './match.styles';
import { TeamsContext } from '../../context/teamsContext';
import { Actions, CurrentFixturesContext, CurrentFixturesDispatchContext } from '../../context/currentFixturesContext';
import classNames from 'classnames';
import FlashOnIcon from '@material-ui/icons/FlashOn';

type Props = {
    fixture: Fixture
}


const Match: React.FC<Props> = ({ fixture }) => {

    const classes = useStyles();
    const teams = useContext(TeamsContext);
    const dispatchFixture = useContext(CurrentFixturesDispatchContext);
    const fixtures = useContext(CurrentFixturesContext);
    
    const fixtureToDisplay: Fixture = {
        ...fixture, 
        homeTeam: {...fixture.homeTeam, crestUrl: teams.find(t => t.id === fixture.homeTeam.id)?.crestUrl},
        awayTeam: {...fixture.awayTeam, crestUrl: teams.find(t => t.id === fixture.awayTeam.id)?.crestUrl}
    }

    const handleBoostScoreClick = () => {
        const isBoostUsedAlready = !!fixtures?.fixtures?.find(fixture => (fixture.isBoosted && fixture.isSubmited));
        if(!isBoostUsedAlready && !fixture.isSubmited) {
            dispatchFixture(
                {
                    type: Actions.setBoostedPrediction,
                    payload: {
                        id: fixture.id
                    }
                }
            )
        }
    }

    return (
        <Box className={fixture.isSubmited ? classNames(classes.rowSubmitted, classes.row) :classes.row}>
            <Button 
                className={fixture.isBoosted? classNames(classes.bonusButtonPressed, classes.bonusButton) : classes.bonusButton} 
                onClick={handleBoostScoreClick} 
                title="double points boost">
                    <FlashOnIcon className={classes.boostIcon}/>
            </Button>
            <img className={classes.crest} src={fixtureToDisplay.homeTeam.crestUrl} alt={fixtureToDisplay.homeTeam.name}></img>
            <div className={classes.teamName}>
                <Typography variant="body2" className={classes.nameText}>{fixture.homeTeam.name.substring(0, fixture.homeTeam.name.length-3)}</Typography>
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
                <Typography variant="body2" className={classes.nameText} style={{textAlign: "right"}}>{fixture.awayTeam.name.substring(0, fixture.awayTeam.name.length-3)}</Typography>
            </div>
            <img className={classes.crest} src={fixtureToDisplay.awayTeam.crestUrl} alt={fixtureToDisplay.awayTeam.name}></img>
        </Box>
    );
};

export default Match;
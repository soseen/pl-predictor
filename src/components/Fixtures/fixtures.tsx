import React, { useContext, useState } from 'react';
import { CurrentFixturesContext, CurrentFixturesDispatchContext, Actions } from '../../context/currentFixturesContext';
import useStyles from './fixtures.styles'
import { Button, Typography } from '@material-ui/core';
import Match from '../Match/match';
import { UserContext } from '../../context/userContext';
import { axios } from '../../axios/axios';
import { Fixture } from '../AppContent/app-content';

type Props = {
    setIsModalOpen: (isModalOpen: {isOpen: boolean, target: string}) => void,
    matchdayNumber: number,
    seasonId?: number | null,
}

const Fixtures: React.FC<Props> = ({setIsModalOpen, matchdayNumber, seasonId}) => {

    const classes = useStyles()
    const currentFixtures = useContext(CurrentFixturesContext);
    const currentFixturesDispatch = useContext(CurrentFixturesDispatchContext);
    const userState = useContext(UserContext);
    const [boostedPredictionId, setBoostedPredictionId] = useState<number | null>(null);

    const submitPredictions = async () => {

        const newGameweekResponse = await axios.post('/gameweek', {
            gameweek: matchdayNumber,
            seasonId: seasonId,
            UserId: userState?.user?.id
        });

        const promises: Promise<any>[] = [];

        const predictionsToPublish = currentFixtures.fixtures?.filter(fixture => (fixture.prediction.homeTeamScore && fixture.prediction.awayTeamScore) && !fixture.isResolved);

        predictionsToPublish?.forEach(fixture => {
            promises.push(axios.post('/prediction', {...fixture, GameweekPredictionId: newGameweekResponse.data.gameweek[0].id}).catch(err => console.log(err)))
        })

        const fixturesToDispatch = currentFixtures.fixtures?.map((fixture) => {
            const prediction = predictionsToPublish?.find(prediction => prediction.id === fixture.id );
            if(prediction) {
              return {...fixture, 
                prediction: {
                  homeTeamScore: prediction.prediction.homeTeamScore, 
                  awayTeamScore: prediction.prediction.awayTeamScore
                },
                isSubmited: true,
                isResolved: false
              }
            } else {
              return fixture
            }
        })
          currentFixturesDispatch({type: Actions.setFixtures, payload: fixturesToDispatch});

        try {
            await Promise.all(promises)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={classes.container}>
            {userState?.user ? 
            <div className={classes.table}>
                <Typography className={classes.tableName} variant='body1'>Upcoming Fixtures</Typography>
                {currentFixtures.fixtures?.map((fixture) =>
                (
                    <Match key={fixture.id} fixture={fixture} boostedPredictionId={boostedPredictionId} setBoostedPredictionId={setBoostedPredictionId}/>
                )
                )}
                <Button variant="contained" className={classes.submitButton} onClick={submitPredictions}>Submit</Button>
            </div>
            :
            <div className={classes.messageContainer}>
                <Typography variant='body1'>Log in to place your predictions...</Typography>
                <Button variant="contained" onClick={() => setIsModalOpen({isOpen: true, target: "log-in"})} className={classes.button}>Log In</Button>
            </div>
            }
            
        </div>
    );
};

export default Fixtures;
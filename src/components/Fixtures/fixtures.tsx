/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, ChangeEvent, useMemo } from 'react';
import { CurrentFixturesContext, CurrentFixturesDispatchContext, Actions } from '../../context/currentFixturesContext';
import { Actions as FetchAction } from '../../context/fetchingContext';
import useStyles from './fixtures.styles'
import { Button, Typography, NativeSelect } from '@material-ui/core';
import Match from '../Match/match';
import { UserContext } from '../../context/userContext';
import { axios } from '../../axios/axios';
import { setIsFetchingContext } from '../../context/fetchingContext';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

type Props = {
    setIsModalOpen: (isModalOpen: {isOpen: boolean, target: string}) => void,
    currentMatchday: number,
    matchdayNumber: number,
    seasonId?: number | null,
    fetchData: (matchdayNumber: number | null) => void;
}

const Fixtures: React.FC<Props> = ({setIsModalOpen, currentMatchday, matchdayNumber, seasonId, fetchData}) => {

    const classes = useStyles();
    const currentFixtures = useContext(CurrentFixturesContext);
    const dispatchFixtures = useContext(CurrentFixturesDispatchContext);
    const userState = useContext(UserContext);
    const setFetching = useContext(setIsFetchingContext);
    const isBoostUsedAlready = !!currentFixtures?.fixtures?.find(fixture => (fixture.isBoosted && fixture.isSubmited));

    const matchdayValues = useMemo(() => {
        let values: number[] = []
        if(currentMatchday > 0){
            for(let i = 1; i<= 38; i++){
                values = [...values, i];
            }
        }
        return values;
    }, [currentMatchday])

    const submitPredictions = async () => {
        setFetching({type: FetchAction.setIsFetching, payload: true});
        try {
            const newGameweekResponse = await axios.post('/gameweek', {
                gameweek: matchdayNumber,
                seasonId: seasonId,
                UserId: userState?.user?.id
            });

            const promises: Promise<any>[] = [];

            const predictionsToPublish = currentFixtures.fixtures?.
            filter(fixture => (fixture.prediction.homeTeamScore && fixture.prediction.awayTeamScore) && !fixture.isResolved).
            map(fixture => fixture.isBoosted ? {...fixture, isBoosted: true} : {...fixture, isBoosted: false});

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
                    isResolved: false,
                    isBoosted: prediction.isBoosted
                    }
                } else {
                    return fixture
                }
            })
            dispatchFixtures({type: Actions.setFixtures, payload: fixturesToDispatch});
            await Promise.all(promises)
        }
        catch (error) {
            console.log(error)
        }
        setFetching({type: FetchAction.setIsFetching, payload: false});
    }

    const handleGameweekSelectChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
        fetchData(parseInt(target.value));
    }

    const handleSelectChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
        const fixture = currentFixtures.fixtures?.find(fixture => fixture.id === parseInt(target.value));
        if(!isBoostUsedAlready && !fixture?.isSubmited) {
            dispatchFixtures(
                {
                    type: Actions.setBoostedPrediction,
                    payload: {
                        id: fixture?.id
                    }
                }
            )
        }
    }

    const selectValue = useMemo(() => {
        const fixture = currentFixtures?.fixtures?.find(fixture => fixture.isBoosted)?.id;
        return fixture ?? "";
    },[currentFixtures.fixtures])

    if (!userState?.user) return (
        <div className={classes.container}>
            <div className={classes.messageContainer}>
                <Typography variant='body1'>Log in to place your predictions...</Typography>
                <Button variant="contained" onClick={() => setIsModalOpen({isOpen: true, target: "log-in"})} className={classes.button}>Log In</Button>
            </div>
        </div>
    )

    return (
        <div className={classes.container}>
            {(currentFixtures.fixtures?.length || 0) > 0 ? 
            <div className={classes.table}>
                <Typography className={classes.tableName} variant='body1'>Gameweek {matchdayNumber}</Typography>
                <div className={classes.titleContainer}>
                <NativeSelect
                    className={classes.select}
                    value={matchdayNumber}
                    onChange={handleGameweekSelectChange}
                    classes={{ selectMenu : classes.customSelectMenu }}
                    inputProps={{ className: classes.customSelectMenu}}
                >   
                    {matchdayValues.map(matchday => (
                        <option className={classes.customSelectMenu} key={matchday} value={matchday}>
                                {`Gameweek ${matchday}`}
                        </option>
                    ))}
                </NativeSelect>
                <div className={classes.tableButtons}>
                <Button variant="contained" className={classes.changeGameweekButton} onClick={() => fetchData(matchdayNumber - 1)}>
                    <ArrowBackIosIcon />
                </Button>
                <Button variant="contained" className={classes.changeGameweekButton} onClick={() => fetchData(matchdayNumber + 1)}>
                    <ArrowForwardIosIcon />
                </Button>
                </div>
                </div>
                {currentFixtures.fixtures?.map((fixture) =>
                (
                    <Match key={fixture.id} fixture={fixture}/>
                )
                )}
                <div className={classes.formControl}>
                    <div className={classes.label}><span className={classes.accent}><FlashOnIcon/></span> Boost</div>
                    <NativeSelect
                        className={classes.select}
                        value={selectValue}
                        onChange={handleSelectChange}
                        classes={{ selectMenu : classes.customSelectMenu }}
                        inputProps={{ className: classes.customSelectMenu}}
                        disabled={isBoostUsedAlready}
                    >   
                        <option value=""></option>
                        {currentFixtures.fixtures?.map(fixture => (
                            <option className={classes.customSelectMenu} key={fixture.id} value={fixture.id} disabled={fixture.isSubmited}>
                                    {`${fixture.homeTeam.name.substring(0, fixture.homeTeam.name.length-3)} - ${fixture.awayTeam.name.substring(0, fixture.awayTeam.name.length-3)}`}
                            </option>
                        ))}
                    </NativeSelect>
                </div>    
                <Button variant="contained" className={classes.submitButton} onClick={submitPredictions}>Submit</Button>
            </div>
            :
            <div className={classes.messageContainer}>
                <Typography variant='body1' className={classes.error}>No games to display</Typography>
            </div>
            }
            
        </div>
    );
};

export default Fixtures;
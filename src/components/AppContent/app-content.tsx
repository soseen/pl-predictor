import { Box, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useMemo, useState, useCallback } from 'react';
import useStyles from './app-content.styles'
import { CurrentFixturesDispatchContext } from '../../context/currentFixturesContext';
import { Actions } from '../../context/currentFixturesContext';
import { Actions as FetchAction } from '../../context/fetchingContext';
import { TeamsContext } from '../../context/teamsContext';
import Fixtures from '../Fixtures/fixtures';
import Standings from '../Standings/standings';
import { UserContext } from '../../context/userContext';
import { axios } from '../../axios/axios';
import { setIsFetchingContext } from '../../context/fetchingContext';
import FlashOnIcon from '@material-ui/icons/FlashOn';

type CompetitionData = {
  id: number,
  area: {
    id: number,
    name: string
  },
  code: string,
  currentSeason: {
    id: number
    currentMatchday: number,
    startDate: string,
    endDate: string
  },
  name: string
}

export type Fixture = {
  id: number,
  matchday?: number,
  awayTeam: {
    id: number,
    name: string,
    crestUrl?: string
  },
  homeTeam: {
    id: number,
    name: string,
    crestUrl?: string
  },
  score: {
    duration: string,
    fullTime: {
      homeTeam?: number | null,
      awayTeam?: number | null
    },
    halfTime: {
      homeTeam?: number | null,
      awayTeam?: number | null
    },
    winner: number
  },
  season: {
    currentMatchday: number,
    id: number
  },
  prediction: {
    homeTeamScore?: number | null,
    awayTeamScore?: number | null
  },
  isSubmited: boolean
  isResolved: boolean
  isCorrectScore: boolean,
  isExactScore: boolean,
  isBoosted: boolean,
  GameweekPredictionId: number
}

export type UserPrediction = {
  id: number,
  matchId: number,
  GameweekPredictionId: number,
  homeTeamName: string,
  awayTeamName: string,
  homeTeamScore: number,
  awayTeamScore: number,
  points: number,
  isCorrectScore: boolean,
  isExactScore: boolean,
  isResolved: boolean,
  isBoosted: boolean
}

export type FixturesData = {
  competition: {
    id: number,
    area: {
      id: number,
      name: string
    },
    code: string,
  },
  count: number,
  matches: Fixture[]
}

type TeamsData = {
  teams: Team[]
}

export type Team = {
  address: string,
  clubColors: string,
  crestUrl: string,
  email: string,
  founded: number,
  id: number,
  name: string,
  venue: string,
  website: string
}

type Props = {
  setIsModalOpen: (isModalOpen: {isOpen: boolean, target: string}) => void
}




const AppContent: React.FC<Props> = ({setIsModalOpen}) => {
    const classes = useStyles();
    const currentFixturesDispatch = useContext(CurrentFixturesDispatchContext);
    const userState = useContext(UserContext);
    const setFetching = useContext(setIsFetchingContext);
    const [matchdayNumber, setMatchdayNumber] = useState<number>(0);
    const [seasonId, setSeasonId] = useState<number | null>(null);
    const [teams, setTeams] = useState<Team[]>([]);
    const [error, setError] = useState<string | null>(null);

    const teamsProvider = useMemo(() => teams, [teams])
  
    const fetchData = useCallback(async () => {
      try {
        setError(null);

        const competitionResponse = await fetch(`https://api.football-data.org/v2/competitions/2021/`, {
          headers: {
            'X-Auth-Token': 'd4a9110b90c6415bb3d252836a4bf034'
          },
          mode: 'cors'
        });

        const matchday: CompetitionData = await competitionResponse.json()
        setMatchdayNumber(matchday.currentSeason.currentMatchday)
  
        const currentMatchesResponse = await fetch(`https://api.football-data.org/v2/competitions/2021/matches?matchday=${matchday.currentSeason.currentMatchday}&status=SCHEDULED`, {
            headers: {
              'X-Auth-Token': 'd4a9110b90c6415bb3d252836a4bf034'
            },
            mode: 'cors'
        });
        const currentMatchesData: FixturesData = await currentMatchesResponse.json()

          if (currentMatchesData.matches) {
            const fixtures = currentMatchesData.matches.map((fixture)  => ({...fixture, prediction: {homeTeamScore: null, awayTeamScore: null}, isSubmited: false, isResolved: false, isBoosted: false}))

            if(userState?.user?.id) {
              const userGameweekPredictionsResponse = await axios.post('/userGameweek', {
                UserId: userState?.user?.id,
                gameweek: matchday.currentSeason.currentMatchday,
                seasonId: fixtures[0].season.id
            });
            
            if (userGameweekPredictionsResponse.data?.gameweek?.matchPredictions.length > 0){
              const userPredictions: UserPrediction[] = userGameweekPredictionsResponse.data?.gameweek.matchPredictions
  
              const fixturesToDispatch: Fixture[] = fixtures.map((fixture) => {
                const prediction = userPredictions.find(prediction => prediction.matchId === fixture.id );
                if(prediction) {
                  return {...fixture, 
                    prediction: {
                      homeTeamScore: prediction.homeTeamScore, 
                      awayTeamScore: prediction.awayTeamScore
                    },
                    isSubmited: true,
                    isResolved: prediction.isResolved,
                    isExactScore: prediction.isExactScore,
                    isCorrectScore: prediction.isCorrectScore,
                    isBoosted: prediction.isBoosted,
                    points: prediction.points,
                    GameweekPredictionId: prediction.GameweekPredictionId,
                  }
                } else {
                  return fixture
                }
              })
                currentFixturesDispatch({type: Actions.setFixtures, payload: fixturesToDispatch});
              } else {
                currentFixturesDispatch({type: Actions.setFixtures, payload: fixtures});
              }
            }
           
            setSeasonId(fixtures[0].season.id)
  
            if (teams.length < 1) {
              const teamsResponse = await fetch(`https://api.football-data.org/v2/competitions/2021/teams`, {
                headers: {
                  'X-Auth-Token': 'd4a9110b90c6415bb3d252836a4bf034'
                },
                mode: 'cors'
              });
              const teamsData: TeamsData = await teamsResponse.json()
              const { teams } = teamsData;
              setTeams(teams);
              console.log(teams);
            }     
          }
      } catch (error) {
        console.log(error)
        setError("Error. Try again in a minute...");
      }
      setFetching({type: FetchAction.setIsFetching, payload: false});
    },[userState, currentFixturesDispatch])
  
    useEffect(() => {
      if (userState?.user) {
        fetchData()
      }

    }, [userState?.user, fetchData])

    return (
        <Box className={classes.container}>
              {error ?
                <Typography variant="h5" className={classes.error}>{error}</Typography>
                :
                <TeamsContext.Provider value={teamsProvider}>
                <Box className={classes.mainContent}>
                  <Fixtures setIsModalOpen={setIsModalOpen} matchdayNumber={matchdayNumber} seasonId={seasonId}/>
                  <Standings matchdayNumber={matchdayNumber} seasonId={seasonId}/>
                </Box>
                <Box className={classes.rulesContainer}>
                  <Typography className={classes.rulesTitle} variant="h6">Zasady</Typography>
                    <ul className={classes.rulesList}>
                      <li className={classes.rule}>
                        <Typography >Wytypowanie dokładnego wyniku meczu - <span className={classes.accentGreen}>3 pkt</span></Typography>
                      </li>
                      <li className={classes.rule}>
                        <Typography >Wytypowanie zwycięzcy (remisu) - <span className={classes.accentBlue}>1 pkt</span></Typography>
                      </li>
                      <li className={classes.rule}>
                        <Typography className={classes.ruleText}>Boost <span className={classes.accent}><FlashOnIcon /></span> jest do wykorzystania w każdej kolejce i podwaja zdobyte punkty za dany typ</Typography>
                      </li>
                      <li className={classes.rule}>
                        <Typography className={classes.ruleText}>Nie trzeba przesyłać wszystkich typów jednocześnie</Typography>
                      </li>
                      <li className={classes.rule}>
                        <Typography className={classes.ruleText}>By sprawdzić typy innego zawodnika, kliknij jego nazwę w tabeli</Typography>
                      </li>
                    </ul>
                </Box>
              </TeamsContext.Provider>
              }           
        </Box>
    );
};

export default AppContent;
import { Box } from '@material-ui/core';
import React, { useContext, useEffect, useMemo, useState, useCallback } from 'react';
import useStyles from './app-content.styles'
import CurrentFixturesProvider, { CurrentFixturesDispatchContext } from '../../context/currentFixturesContext';
import { Actions } from '../../context/currentFixturesContext';
import { TeamsContext } from '../../context/teamsContext';
import Fixtures from '../Fixtures/fixtures';
import Standings from '../Standings/standings';
import { UserContext } from '../../context/userContext';
import { axios } from '../../axios/axios';

type TeamDetails = {
    id: number,
    name: string,
    score?: number | null
  }
  
type MatchdayDetails = {
  homeTeam: TeamDetails,
  awayTeam: TeamDetails
}

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
  isCorrectScore: boolean,
  isExactScore: boolean,
  isResolved: boolean
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
    const [matchdayNumber, setMatchdayNumber] = useState<number>(0);
    const [seasonId, setSeasonId] = useState<number | null>(null);
    const [teams, setTeams] = useState<Team[]>([]);

    const teamsProvider = useMemo(() => teams, [teams])
  
    const fetchData = useCallback(async () => {
      try {
        
        const competitionResponse = await fetch('https://api.football-data.org/v2/competitions/2021/', {
          headers: {
            'X-Auth-Token': 'd4a9110b90c6415bb3d252836a4bf034'
          },
          mode: 'cors'
        });
        const matchday: CompetitionData = await competitionResponse.json()
        setMatchdayNumber(matchday.currentSeason.currentMatchday)
  
        const currentMatchesResponse = await fetch(`https://api.football-data.org/v2/competitions/2021/matches?matchday=${matchday.currentSeason.currentMatchday}`, {
            headers: {
              'X-Auth-Token': 'd4a9110b90c6415bb3d252836a4bf034'
            },
            mode: 'cors'
          });
          const currentMatchesData: FixturesData = await currentMatchesResponse.json()
  
          const fixtures = currentMatchesData.matches.map((fixture)  => ({...fixture, prediction: {homeTeamScore: null, awayTeamScore: null}, isSubmited: false, isResolved: false}))

          if(userState?.user?.id) {
            const userGameweekPredictionsResponse = await axios.post('/gameweek', {
              UserId: userState?.user?.id,
              gameweek: matchday.currentSeason.currentMatchday,
              seasonId: fixtures[0].season.id
            });

            console.log(userGameweekPredictionsResponse);
            
            if (userGameweekPredictionsResponse.data?.gameweek[0].matchPredictions){
              const userPredictions: UserPrediction[] = userGameweekPredictionsResponse.data?.gameweek[0].matchPredictions
  
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


          const teamsResponse = await fetch(`https://api.football-data.org/v2/competitions/2021/teams`, {
            headers: {
              'X-Auth-Token': 'd4a9110b90c6415bb3d252836a4bf034'
            },
            mode: 'cors'
          });
          const teamsData: TeamsData = await teamsResponse.json()
          const { teams } = teamsData;
          setTeams(teams);

      } catch (error) {
        console.log(error)
      }
    },[userState, currentFixturesDispatch])
  
    useEffect(() => {
      if (userState?.user) {
        fetchData()
      }

    }, [userState?.user, fetchData])

    return (
        <Box className={classes.container}>
              <TeamsContext.Provider value={teamsProvider}>
                <Fixtures setIsModalOpen={setIsModalOpen} matchdayNumber={matchdayNumber} seasonId={seasonId}/>
                <Standings matchdayNumber={matchdayNumber} seasonId={seasonId}/>
              </TeamsContext.Provider>
        </Box>
    );
};

export default AppContent;
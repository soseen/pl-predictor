/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useReducer, Dispatch } from "react";

import { Fixture } from '../components/AppContent/app-content'

type State = {
    fixtures?: Fixture[]
}

type Action = {
    type: Actions,
    payload: any
}

export enum Actions {
    setFixtures = "SetFixtures",
    setPrediction = "setPrediction",
    setBoostedPrediction = "setBoostedPrediction"
}

function fixturesReducer(state: State, action: Action): State {
    switch(action.type) {
        case Actions.setFixtures: {
            return {...state, fixtures: action.payload}
        }
        case Actions.setPrediction: {
            return {...state, fixtures: state.fixtures?.map((fixture) => (
                fixture.id === action.payload.id ? action.payload : fixture
            ))}
        }
        case Actions.setBoostedPrediction: {
            return {...state, fixtures: state.fixtures?.map((fixture) => (
                fixture.id === action.payload.id ? {...fixture, isBoosted: true} : {...fixture, isBoosted: false}
            ))}
        }
        default: {
            return state
        }
    }
}

export const CurrentFixturesContext = createContext<State>({} as State);
export const CurrentFixturesDispatchContext = createContext<Dispatch<Action>>(() => {})

const CurrentFixturesProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(fixturesReducer, {});

    return (
        <CurrentFixturesContext.Provider value={state}>
            <CurrentFixturesDispatchContext.Provider value={dispatch}>
                {children}
            </CurrentFixturesDispatchContext.Provider>
        </CurrentFixturesContext.Provider>
    )
}

export default CurrentFixturesProvider;



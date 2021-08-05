import React, { createContext, useReducer, Dispatch } from "react";


type Action = {
    type: Actions,
    payload: boolean
}

export enum Actions {
    setIsFetching = "SetIsFetching",
}

function fetchingReducer(state: boolean, action: Action): boolean {
    switch(action.type) {
        case Actions.setIsFetching: {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export const isFetchingContext = createContext<boolean>(false);
export const setIsFetchingContext = createContext<Dispatch<Action>>(() => null);

const FetchingProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(fetchingReducer, false);
    console.log(state);

    return(
        <isFetchingContext.Provider value={state}>
            <setIsFetchingContext.Provider value={dispatch}>
                { children }
            </setIsFetchingContext.Provider>
        </isFetchingContext.Provider>
    )
}

export default FetchingProvider;



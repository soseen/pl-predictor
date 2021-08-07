import React, { createContext, useReducer, Dispatch } from "react";
import { User } from "./userContext";

export type Action = {
    type: PlayerActions,
    payload: User[]
}

export enum PlayerActions {
    setUser = "SetPlayers"
}

function playersReducer(state: User[], action: Action): User[] {
    switch(action.type) {
        case PlayerActions.setUser: {
            return action.payload
        }
    }
}

export const PlayersContext = createContext<User[]>([]);
export const PlayersDispatchContext = createContext<Dispatch<Action>>(() => null)

const PlayersProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(playersReducer, []);

    return(
        <PlayersContext.Provider value={state}>
            <PlayersDispatchContext.Provider value={dispatch}>
                {children}
            </PlayersDispatchContext.Provider>
        </PlayersContext.Provider>
    )
}

export default PlayersProvider;
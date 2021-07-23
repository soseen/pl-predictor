import { createContext, useReducer, Dispatch } from "react";

export type User = {
    id: number,
    username: string,
    role: string,
    points: number,
    isActive: boolean
}

type State = {
    user?: User
}

type Action = {
    type: Actions,
    payload: User | undefined
}

export enum Actions {
    setUser = "SetUser"
}

function userReducer(state: State, action: Action): State {
    switch(action.type) {
        case Actions.setUser: {
            return {...state, user: action.payload}
        }
        default: {
            return state
        }
    }
}

export const UserContext = createContext<State | null>(null);
export const UserDispatchContext = createContext<Dispatch<Action>>(() => {})

const UserProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {});

    return (
        <UserContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )
}


export default UserProvider;
import React, {createContext, useState, useReducer} from 'react';
import { initialState, reducer } from './Reducer/UsersReducer';

export const UsersContext = createContext();



export const UserProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        users: state.users,
        addUser: (newUser)=>{
            dispatch({type:"ADD", payload: newUser})
        },
        deleteUser: (id)=>{
            dispatch({type:"DELETE", payload: id})
        }
    }

    return <UsersContext.Provider value={value}>
        {children}
    </UsersContext.Provider>
}


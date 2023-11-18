import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const value = {};
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
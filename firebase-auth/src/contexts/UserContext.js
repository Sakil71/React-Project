import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();


const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [mood, setMood] = useState(false);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const signInGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }
    const signInTwitter = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider);
    }

    const updateUserProfile = name => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName: name });
    }

    const emailVerify = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    }

    const resetUserEmail = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])


    const value = { mood, user, loading, setMood, createUser, logIn, logOut, updateUserProfile, signInGoogle, signInGithub, signInTwitter, emailVerify, resetUserEmail };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
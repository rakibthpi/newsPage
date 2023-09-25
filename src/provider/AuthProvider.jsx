/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const UserProvider = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Corrected the initialization
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    // Register 
    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Login
    const handleSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const LogOut = () => {
        signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current user ", currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    // Define the authinfo object
    const authinfo = { user, handleSignUp, handleSignIn, LogOut, loading };

    return (
        <UserProvider.Provider value={authinfo}>
            {children}
        </UserProvider.Provider>
    );
};

export default AuthProvider;

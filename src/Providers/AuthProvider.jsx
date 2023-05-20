import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null);
const googlePorvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const emailSignup = async (email, password, name, photo) => {
        try {
            setLoader(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: name,
                photoURL: photo
            });
            return userCredential;
        }
        catch (error) {
            throw error;
        }
    }

    const emailLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googlePorvider);
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unsubscribe();
        };
    }, [])

    const authInfo = {
        user,
        loader,
        setLoader,
        emailSignup,
        emailLogin,
        googleLogin,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
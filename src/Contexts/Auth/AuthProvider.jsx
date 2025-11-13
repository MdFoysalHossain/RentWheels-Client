import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    let [userInfo, setUserInfo] = useState(null)
    let [dataLoading, setDataLoading] = useState(true)

    const createEmailUser = (email, password) => {
        setDataLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userEmailLogin = (email, password) => {
        setDataLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () => {
        return signOut(auth)
    }


    const updateUserInfo = (jsonData) => {
        return updateProfile(auth.currentUser, jsonData)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const checkAuth = 
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // console.log("Auth Changed:", user)
                    setUserInfo(user)
                    setDataLoading(false)
                }else{
                    setDataLoading(false)
                    setUserInfo(null)
                }
            })
        

        return (() => checkAuth())
    }, [])


    const dataObj = {
        createEmailUser,
        userEmailLogin,
        userLogOut,
        updateUserInfo,
        googleSignIn,
        userInfo,
        dataLoading
    }

    return (
        <AuthContext value={dataObj}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

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

    useEffect(() => {
        const checkAuth = () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log("Auth Changed:", user)
                    setDataLoading(false)
                }else{
                    setDataLoading(false)
                    setUserInfo(null)
                }
            })
        }

        return (() => checkAuth())
    }, [])


    const dataObj = {
        createEmailUser,
        userEmailLogin,
        userLogOut,
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
import React, { use } from 'react';
import { AuthContext } from '../Contexts/Auth/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { userInfo, dataLoading } = use(AuthContext)

    if (dataLoading) {
        return <div className='w-full h-[50vh] flex justify-center items-center'><span className="loading loading-infinity loading-xl"></span></div>
    }


    if (userInfo) {
        return (
            <div>
                {children}
            </div>
        );
    } else {
        return <Navigate to="/Login" replace />;
    }


};

export default PrivateRoute;
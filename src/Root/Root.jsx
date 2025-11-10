import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import Navbar from '../Components/Public/Navbar';
import Footer from '../Components/Public/Footer';

const Root = () => {
    const carsData = useLoaderData()
    return (
        <div>
            <Navbar carsData={carsData}/>
            <Outlet></Outlet>
            <Footer/>
            
        </div>
    );
};

export default Root;
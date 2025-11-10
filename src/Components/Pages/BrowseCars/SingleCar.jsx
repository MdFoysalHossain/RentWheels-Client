import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../../../Contexts/Auth/AuthContext';
import SingleCarDetails from './SingleCarDetails';
import NotFoundListing from '../EditMyListing/NotFoundListing';

const SingleCar = () => {
    const allCars = useLoaderData()
    const { id } = useParams();


    if (allCars) {
        console.log("All Data Entered", allCars)
        const check = allCars.filter(item => item._id === id)
        console.log("Check", check)

        if (check.length !== 0) {
            console.log("Found a Match", check)
            return (
                <SingleCarDetails/>
            )

        } else {
            return (<NotFoundListing />)
        }
    } else {
        console.log("All Data exit")
    }

};

export default SingleCar;
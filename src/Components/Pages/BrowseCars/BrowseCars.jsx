import React from 'react';
import SingleCarCard from './SingleCarCard';
import { useLoaderData } from 'react-router';
import { Car } from 'lucide-react';

const BrowseCars = () => {
    const allCars = useLoaderData()

    return (
        <div className='mt-10'>
            <title>Browse Cars - RentWheels</title>
            <h1 className='text-2xl font-bold text-left mb-10 flex justify-center items-center gap-2 '>All Listed Cars <Car className='text-primary ' size={30}/></h1>
            <div className="grid grid-cols-2 gap-10">
                {
                    allCars.map((car, index) => <SingleCarCard car={car} key={index}/>)
                }
            </div>
        </div>
    );
};

export default BrowseCars;
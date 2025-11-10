import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleCarCard from '../BrowseCars/SingleCarCard';
import { Car } from 'lucide-react';


const CarFeature = () => {
    const [carData, setCarData] = useState(null)

    useEffect(() => {
        const allCars = () => {
            fetch(`http://localhost:3000/NewestCars/`)
                .then(res => res.json())
                .then(data => setCarData(data))
        }
        return (() => allCars())
    }, [])

    if (!carData) {
        return <div className='w-full h-[50vh] flex justify-center items-center'><span className="loading loading-infinity loading-xl"></span></div>
    }

    return (
        <div>

            <h2 className='text-2xl font-bold text-left mb-10 flex justify-center items-center gap-2 mt-20'>All Listed Cars <Car className='text-primary ' size={30} /></h2>
            <div className='grid grid-cols-2 gap-10 mt-10'>
                {
                    carData.map((car, index) => {
                        if (index <= 6) {
                            return <SingleCarCard car={car} key={index} />
                        }
                    })
                }
            </div>
        </div>
    );
};

export default CarFeature;
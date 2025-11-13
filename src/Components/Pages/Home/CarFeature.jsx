import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleCarCard from '../BrowseCars/SingleCarCard';
import { Car } from 'lucide-react';


const CarFeature = ({latestData}) => {
    const [carData, setCarData] = useState(null)

    // useEffect(() => {
    //     const allCars = () => {
    //         fetch(`https://rent-wheels-server-lqfd.vercel.app/NewestCars/`)
    //             .then(res => res.json())
    //             .then(data => setCarData(data))
    //     }
    //     return (() => allCars())
    // }, [])

    if (!latestData) {
        console.log("Retured No Car Data")
        return <div className='w-full h-[50vh] max-w-[1280px] mx-auto flex justify-center items-center'><span className="loading loading-infinity loading-xl"></span></div>
    }

    return (
        <div className='max-w-[1280px] mx-auto'>

            <h2 className='text-2xl font-bold text-left mb-10 flex justify-center items-center gap-2 mt-20'>Latest Listed Cars <Car className='text-primary ' size={30} /></h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-2  gap-10 mt-10'>
                {
                    console.log(carData)
                }
                {
                    latestData.map((car, index) => {
                        if (index < 6) {
                            return <SingleCarCard car={car} key={index} />
                        }
                    })
                }
            </div>
        </div>
    );
};

export default CarFeature;
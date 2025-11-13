import React from 'react';
import Banner from './Banner';
import CarFeature from './CarFeature';
import WhyUs from './WhyUs';
import Steps from './Steps';
import Testimonial from './Testimonial';
import { use } from 'react';

const promisedLatest = fetch("https://rent-wheels-server-lqfd.vercel.app/NewestCars/").then(res => res.json())

const Home = () => {
    const latestData = use(promisedLatest)
    return (
        <div className='max-w-[1280px] mx-auto'>
            <Banner/>
            <CarFeature latestData={latestData}/>
            <WhyUs/>
            <Steps/>
            <Testimonial/>
        </div>
    );
};

export default Home;
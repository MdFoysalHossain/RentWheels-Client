import React from 'react';
import Banner from './Banner';
import CarFeature from './CarFeature';
import WhyUs from './WhyUs';
import Steps from './Steps';

const Home = () => {
    return (
        <div>
            <Banner/>
            <CarFeature/>
            <WhyUs/>
            <Steps/>
        </div>
    );
};

export default Home;
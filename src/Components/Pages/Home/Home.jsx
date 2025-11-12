import React from 'react';
import Banner from './Banner';
import CarFeature from './CarFeature';
import WhyUs from './WhyUs';
import Steps from './Steps';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <Banner/>
            <CarFeature/>
            <WhyUs/>
            <Steps/>
            <Testimonial/>
        </div>
    );
};

export default Home;
import React from 'react';
import { motion } from "motion/react"

const WhyUs = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-2xl font-bold text-left mb-10 flex justify-center items-center gap-2 '>Why Rent With <span className='text-primary'>Us?</span></h2>

            <motion.div
                initial={{ opacity: 1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }} 
                // viewport={{ once: true, amount: 0.3 }}
                
                className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-10">
                <div className="card card-dash bg-base-100 w-full min-h-[150px] shadow-md">
                    <div className="card-body text-left">
                        <h2 className="card-title text-primary">Wide Selection of Cars</h2>
                        <p>Access hundreds of cars from economy to luxury models. Choose from a diverse fleet of vehicles to match your needs and style.</p>
                    </div>
                </div>

                <div className="card card-dash bg-base-100 w-full min-h-[150px] shadow-md">
                    <div className="card-body text-left">
                        <h2 className="card-title text-primary">Wide Selection of Cars</h2>
                        <p>No hidden fees, clear pricing per day/hour. Know exactly what you pay with transparent pricing and flexible options. Access hundreds of cars from economy to luxury models. Choose from a diverse fleet of vehicles to match your needs and style.</p>
                    </div>
                </div>

                <div className="card card-dash bg-base-100 w-full min-h-[150px] shadow-md">
                    <div className="card-body text-left">
                        <h2 className="card-title text-primary">Easy & Fast Booking</h2>
                        <p>Simple search, instant booking, mobile-friendly.Reserve your car in minutes and hit the road without hassle.</p>
                    </div>
                </div>

                <div className="card card-dash bg-base-100 w-full min-h-[150px] shadow-md">
                    <div className="card-body text-left">
                        <h2 className="card-title text-primary">Verified & Trusted Providers</h2>
                        <p>All cars and owners are verified for safety. Drive with confidence, every vehicle is checked and verified.</p>
                    </div>
                </div>

                <div className="card card-dash bg-base-100 w-full min-h-[150px] shadow-md">
                    <div className="card-body text-left">
                        <h2 className="card-title text-primary">24/7 Customer Support</h2>
                        <p>Help anytime you need it. Our support team is always ready to assist you, anytime, anywhere.</p>
                    </div>
                </div>

                <div className="card card-dash bg-base-100 w-full min-h-[150px] shadow-md">
                    <div className="card-body text-left">
                        <h2 className="card-title text-primary">Flexible Pick-up & Drop-off</h2>
                        <p>Convenient locations and times. Pick up and return cars at your convenience with multiple locations.</p>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default WhyUs;
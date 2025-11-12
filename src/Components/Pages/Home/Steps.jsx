import React from 'react';
import { motion } from "motion/react"

const Steps = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className='text-left mt-20'>
            <h2 className='text-2xl font-bold text-left mb-10 flex justify-center items-center gap-2 '>How It <span className='text-primary'>Works</span></h2>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col gap-2 w-[600px]">
                    <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1" open>
                        <summary className="collapse-title font-semibold">Step 1: Log in to your account.</summary>
                        <div className="collapse-content text-sm">Click the "Login" button in the top right corner and follow the registration process.</div>
                    </details>
                    <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
                        <summary className="collapse-title font-semibold">Step 2: Find your preferred car</summary>
                        <div className="collapse-content text-sm">Search the car you want via "Browse Cars" page in the top Navbar</div>
                    </details>
                    <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
                        <summary className="collapse-title font-semibold">Step 3: Book your car.</summary>
                        <div className="collapse-content text-sm">From "Browse Cars" page find the car you want and press on "View Details" then click on "Book Now" to book your car.</div>
                    </details>
                    <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
                        <summary className="collapse-title font-semibold">Step 4: Check all your booked cars.</summary>
                        <div className="collapse-content text-sm">Click on "My Booking" in the top Navbar. Then all your booked cars will be listed. You can also remove your booking from there.</div>
                    </details>
                </div>
            </div>

        </motion.div>
    );
};

export default Steps;
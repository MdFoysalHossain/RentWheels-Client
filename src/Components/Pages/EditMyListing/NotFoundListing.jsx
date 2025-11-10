import React from 'react';
import Error404Img from "../../../../public/404.png"

const NotFoundListing = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center'>
            <title>Page Not Found - RentWheels</title>
            <div className="">
                <h2 className='text-[150px] font-bold leading-[150px] relative'>
                    <span className='text-8xl left-[50px] -top-2.5 absolute -rotate-3'>PAGE</span>
                    <span className='text-8xl left-80 -top-20 -rotate-10 absolute'>NOT</span>
                    <span className='text-8xl left-[550px] top-[-55px] rotate-14 text-primary absolute'>FOUND</span>
                    <img src={Error404Img} alt="" className=' w-[900px]' />
                </h2>
            </div>
        </div>
    );
};

export default NotFoundListing;
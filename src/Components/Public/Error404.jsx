import React from 'react';
import Error404Img from "../../../public/404.png"
import { CircleChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

const Error404 = () => {
    return (
        <div className='h-screen max-w-[1280px] mx-auto flex flex-col justify-center items-center'>
            <title>404 Not Found - RentWheels</title>
            <h1 className='lg:text-[400px] text-[150px]  relative font-bold text-primary'><span className='leading-none'>404</span> <img src={Error404Img} alt=""  className='absolute bottom-[50px] lg:bottom-[100px] left-1/2 -translate-x-1/2'/></h1>
            <span className='text-xl flex justify-center items-center gap-1'><CircleChevronLeft className='text-primary' /> Back to <Link to={"/"} className='underline text-primary'>Home</Link></span>
        </div>
    );
};

export default Error404;
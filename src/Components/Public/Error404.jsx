import React from 'react';
import Error404Img from "../../../public/404.png"

const Error404 = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <h1 className='text-[400px] relative font-bold text-primary'><span className='leading-none'>404</span> <img src={Error404Img} alt=""  className='absolute bottom-[100px] left-1/2 -translate-x-1/2'/></h1>
        </div>
    );
};

export default Error404;
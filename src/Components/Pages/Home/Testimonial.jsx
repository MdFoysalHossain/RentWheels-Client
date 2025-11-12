
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Star } from 'lucide-react';
import "./Testimonial.css"
import { motion } from "motion/react"
import { useEffect } from 'react';

const NextArrow = ({ onClick }) => (
    <button
        className="absolute z-10 right-5 bottom-12 -translate-y-1/2  p-2 rounded bg-primary text-white hover:bg-white hover:border-primary hover:border hover:text-primary cursor-pointer transition"
        onClick={onClick}
    >
        <ChevronRight size={24} />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button
        className="absolute z-10 left-5 bottom-12 -translate-y-1/2  bg-primary text-white p-2 rounded hover:bg-white hover:border hover:text-primary cursor-pointer transition"
        onClick={onClick}
    >
        <ChevronLeft size={24} />
    </button>
);

const Testimonial = () => {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };



    return (
        <motion.div
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-20 px-2 overflow-hidden"
        >
            <h2 className='text-2xl  font-bold text-left mb-10 flex justify-center items-center gap-2 '>Customer <span className='text-primary'>Testimonials</span></h2>
            <div className="relative w-full max-w-6xl mx-auto">
                <Slider {...settings}>
                    <div className=" flex justify-center rounded-xl bg-white shadow-md items-center h-[400px] w-[500px] overflow-hidden">
                        <div className="">
                            <div className="p-4 flex text-left  items-start gap-3">
                                <img className='w-[80px] h-[80px] md:h-[100px] md:w-[100px] mt-2.5 md:mt-0 rounded-2xl' src="https://static-cse.canva.com/blob/2196696/1600w-B-cRyoh7b98.jpg" alt="" />
                                <div className="">
                                    <span className='text-sm'>Name</span>
                                    <p className='text-lg font-semibold'>Faria Akter</p>
                                    <span className='text-sm'>Email</span>
                                    <p className='text-lg font-semibold'>faria.akter@gmail.com</p>
                                </div>
                                <div className="text-right w-full h-full">
                                    <span className='text-primary hidden  lg:flex justify-end gap-1'><Star /> <Star /> <Star /> <Star /> </span>
                                </div>
                            </div>
                            <div className="text-left p-4 -mt-[20px]">
                                <div className="text-right w-full h-full">
                                    <span className='text-primary flex lg:hidden justify-start gap-1 mb-2'><Star /> <Star /> <Star /> <Star /> </span>
                                </div>
                                <h2 className='text-lg underline underline-offset-6 decoration-primary font-semibold mb-2'>Testimony</h2>
                                <p className='italic'>"RentWheels made renting a car so easy and convenient! The booking process was quick, and the car was in great condition. I just wish there were a few more pickup locations near my area, but overall a very smooth experience. Definitely recommend!"</p>
                            </div>
                        </div>
                    </div>


                    <div className=" flex justify-center rounded-xl bg-white shadow-md items-center h-[400px] w-[500px] overflow-hidden">
                        <div className="">
                            <div className="p-4 flex text-left  items-start gap-3">
                                <img className='w-[80px] h-[80px] md:h-[100px] md:w-[100px] mt-2.5 md:mt-0 rounded-2xl' src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=" alt="" />
                                <div className="">
                                    <span className='text-sm'>Name</span>
                                    <p className='text-lg font-semibold'>Rafiq Ahmed</p>
                                    <span className='text-sm'>Email</span>
                                    <p className='text-lg font-semibold'>rafiq.ahmed@gmail.com</p>
                                </div>
                                <div className="text-right w-full h-full">
                                    <span className='text-primary hidden  lg:flex justify-end gap-1'><Star /> <Star /> <Star /> <Star /> <Star /> </span>
                                </div>
                            </div>
                            <div className="text-left p-4 -mt-[20px]">
                                <div className="text-left w-full h-full">
                                    <span className='text-primary flex lg:hidden justify-start gap-1 mb-2'><Star /> <Star /> <Star /> <Star /> <Star /> </span>
                                </div>
                                <h2 className='text-lg underline underline-offset-6 decoration-primary font-semibold mb-2'>Testimony</h2>
                                <p className='italic'>"Great platform for renting cars. I loved the variety of cars available. Only minor issue was a slight delay in pickup, but overall a very good experience."</p>
                            </div>
                        </div>
                    </div>

                    <div className=" flex justify-center rounded-xl bg-white shadow-md items-center h-[400px] w-[500px] overflow-hidden">
                        <div className="">
                            <div className="p-4 flex text-left  items-start gap-3">
                                <img className='w-[80px] h-[80px] mt-2.5 md:mt-0 md:h-[100px] md:w-[100px] rounded-2xl' src="https://media.istockphoto.com/id/1852295642/photo/close-up-portrait-of-pretty-smiling-happy-woman-with-short-hair-in-casual-wear-looking-calmly.jpg?s=612x612&w=0&k=20&c=mlg72Ja7AgoxzPe0M8LCAVwtACLjHKOdG5JjkUq1yXU=" alt="" />
                                <div className="">
                                    <span className='text-sm'>Name</span>
                                    <p className='text-lg font-semibold'>Nusrat Jaman</p>
                                    <span className='text-sm'>Email</span>
                                    <p className='text-lg font-semibold'>nusratjaman@gmail.com</p>
                                </div>
                                <div className="text-right w-full h-full">
                                    <span className='text-primary hidden  lg:flex justify-end gap-1'><Star /> <Star /> <Star /> <Star /> </span>
                                </div>
                            </div>
                            <div className="text-left p-4 -mt-[20px]">

                                <div className="text-right w-full h-full">
                                    <span className='text-primary flex lg:hidden justify-start mb-2 gap-1'><Star /> <Star /> <Star /> <Star /> </span>
                                </div>

                                <h2 className='text-lg underline underline-offset-6 decoration-primary font-semibold mb-2'>Testimony</h2>
                                <p className='italic'>"RAmazing service! The booking was instant, customer support was very helpful, and the car exceeded my expectations. Highly recommend RentWheels!"</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </motion.div>
    );
};

export default Testimonial;









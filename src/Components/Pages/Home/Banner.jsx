import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BannerImg1 from "/Banner1.jpg";
import BannerImg2 from "/Banner2.jpg";
import BannerImg3 from "/Banner3.jpg";
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter'

const NextArrow = ({ onClick }) => (
    <button
        className="absolute z-10 right-5 top-1/2 -translate-y-1/2  p-2 rounded bg-white text-primary hover:bg-primary hover:text-white cursor-pointer transition"
        onClick={onClick}
    >
        <ChevronRight size={24} />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button
        className="absolute z-10 left-5 top-1/2 -translate-y-1/2  bg-white text-primary p-2 rounded hover:bg-primary hover:text-white cursor-pointer transition"
        onClick={onClick}
    >
        <ChevronLeft size={24} />
    </button>
);

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };


    const type1 = "Browse Cars";

    return (
        <div className="relative max-w-[1280px] mx-5 xl:mx-auto h-[500px] rounded-xl overflow-hidden mt-10">
            <Slider  {...settings}>
                <div className="relative flex justify-center items-center h-[500px]  overflow-hidden">
                    <img src={BannerImg1} alt="" className="object-cover w-full h-full" />

                    <div className="bg-black/30 absolute inset-0"></div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 lg:px-50">
                            Find the perfect car for your next trip, from luxury sedans to budget rides, available anytime, anywhere.
                        </h2>

                        <Link to={"/BrowseCars"} className="btn border-0 shadow-none button-one">
                            <Typewriter
                                words={["Browse Cars"]}
                                loop={true}
                                cursor
                                cursorStyle=""
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </Link>
                    </div>
                </div>

                <div className="relative flex justify-center items-center h-[500px]  overflow-hidden">
                    <img src={BannerImg2} alt="" className="object-cover w-full h-full" />

                    <div className="bg-black/30 absolute inset-0"></div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 lg:px-50">
                            Have a car sitting idle? List it on RentWheels and start earning from local renters!
                        </h2>

                        <Link to={"/AddCar"} className="btn border-0 shadow-none button-one">
                            <Typewriter
                                words={["Become a Host"]}
                                loop={true}
                                cursor
                                cursorStyle=""
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000} />
                        </Link>
                    </div>
                </div>

                <div className="relative flex justify-center items-center h-[500px]  overflow-hidden">
                    <img src={BannerImg3} alt="" className="object-cover w-full h-full" />

                    <div className="bg-black/30 absolute inset-0"></div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 lg:px-50">
                            Book your car in minutes with transparent pricing, verified hosts, and 24/7 support.
                        </h2>

                        <Link to={"/BrowseCars"} className="btn border-0 shadow-none button-one">

                            <Typewriter
                                words={["Book Now"]}
                                loop={true}
                                cursor
                                cursorStyle=""
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000} />

                        </Link>

                    </div>
                </div>


            </Slider>
        </div>
    );
};

export default Banner;

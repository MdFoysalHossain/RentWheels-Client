import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "motion/react";
import "./Testimonial.css";

const Testimonial = () => {
    const swiperRef = useRef(null);

    const handleNext = () => swiperRef.current?.slideNext();
    const handlePrev = () => swiperRef.current?.slidePrev();

    return (
        <motion.div
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-20 px-2 overflow-hidden"
        >
            <h2 className="text-2xl font-bold text-left mb-10 flex justify-center items-center gap-2">
                Customer <span className="text-primary">Testimonials</span>
            </h2>

            <div className="relative w-full max-w-6xl mx-auto">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)} 
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={2}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 2, spaceBetween: 40 },
                    }}
                >

                    <SwiperSlide>
                        <div className="flex justify-center rounded-xl bg-white shadow-md items-center h-[400px] overflow-hidden">
                            <div>
                                <div className="p-4 flex text-left items-start gap-3">
                                    <img
                                        className="w-[80px] h-[80px] md:h-[100px] md:w-[100px] mt-2.5 md:mt-0 rounded-2xl"
                                        src="https://static-cse.canva.com/blob/2196696/1600w-B-cRyoh7b98.jpg"
                                        alt=""
                                    />
                                    <div>
                                        <span className="text-sm">Name</span>
                                        <p className="text-lg font-semibold">Faria Akter</p>
                                        <span className="text-sm">Email</span>
                                        <p className="text-lg font-semibold">faria.akter@gmail.com</p>
                                    </div>
                                    <div className="text-right w-full h-full">
                                        <span className="text-primary hidden lg:flex justify-end gap-1">
                                            <Star /> <Star /> <Star /> <Star />
                                        </span>
                                    </div>
                                </div>
                                <div className="text-left p-4 -mt-[20px]">
                                    <div className="text-right w-full h-full">
                                        <span className="text-primary flex lg:hidden justify-start gap-1 mb-2">
                                            <Star /> <Star /> <Star /> <Star />
                                        </span>
                                    </div>
                                    <h2 className="text-lg underline underline-offset-6 decoration-primary font-semibold mb-2">Testimony</h2>
                                    <p className="italic">"RentWheels made renting a car so easy and convenient! The booking process was quick, and the car was in great condition. Definitely recommend!"</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* --- Slide 2 --- */}
                    <SwiperSlide>
                        <div className="flex justify-center rounded-xl bg-white shadow-md items-center h-[400px] overflow-hidden">
                            <div>
                                <div className="p-4 flex text-left items-start gap-3">
                                    <img
                                        className="w-[80px] h-[80px] md:h-[100px] md:w-[100px] mt-2.5 md:mt-0 rounded-2xl"
                                        src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                                        alt=""
                                    />
                                    <div>
                                        <span className="text-sm">Name</span>
                                        <p className="text-lg font-semibold">Rafiq Ahmed</p>
                                        <span className="text-sm">Email</span>
                                        <p className="text-lg font-semibold">rafiq.ahmed@gmail.com</p>
                                    </div>
                                    <div className="text-right w-full h-full">
                                        <span className="text-primary hidden lg:flex justify-end gap-1">
                                            <Star /> <Star /> <Star /> <Star /> <Star />
                                        </span>
                                    </div>
                                </div>
                                <div className="text-left p-4 -mt-[20px]">
                                    <div className="text-left w-full h-full">
                                        <span className="text-primary flex lg:hidden justify-start gap-1 mb-2">
                                            <Star /> <Star /> <Star /> <Star /> <Star />
                                        </span>
                                    </div>
                                    <h2 className="text-lg underline underline-offset-6 decoration-primary font-semibold mb-2">Testimony</h2>
                                    <p className="italic">"Great platform for renting cars. Loved the variety of cars. Only minor issue was a slight delay in pickup, but overall a very good experience."</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* --- Slide 3 --- */}
                    <SwiperSlide>
                        <div className="flex justify-center rounded-xl bg-white shadow-md items-center h-[400px] overflow-hidden">
                            <div>
                                <div className="p-4 flex text-left items-start gap-3">
                                    <img
                                        className="w-[80px] h-[80px] md:h-[100px] md:w-[100px] mt-2.5 md:mt-0 rounded-2xl"
                                        src="https://media.istockphoto.com/id/1852295642/photo/close-up-portrait-of-pretty-smiling-happy-woman-with-short-hair-in-casual-wear-looking-calmly.jpg?s=612x612&w=0&k=20&c=mlg72Ja7AgoxzPe0M8LCAVwtACLjHKOdG5JjkUq1yXU="
                                        alt=""
                                    />
                                    <div>
                                        <span className="text-sm">Name</span>
                                        <p className="text-lg font-semibold">Nusrat Jaman</p>
                                        <span className="text-sm">Email</span>
                                        <p className="text-lg font-semibold">nusratjaman@gmail.com</p>
                                    </div>
                                    <div className="text-right w-full h-full">
                                        <span className="text-primary hidden lg:flex justify-end gap-1">
                                            <Star /> <Star /> <Star /> <Star />
                                        </span>
                                    </div>
                                </div>
                                <div className="text-left p-4 -mt-[20px]">
                                    <div className="text-right w-full h-full">
                                        <span className="text-primary flex lg:hidden justify-start mb-2 gap-1">
                                            <Star /> <Star /> <Star /> <Star />
                                        </span>
                                    </div>
                                    <h2 className="text-lg underline underline-offset-6 decoration-primary font-semibold mb-2">Testimony</h2>
                                    <p className="italic">"Amazing service! Booking was instant, support was helpful, and the car exceeded expectations. Highly recommend  RentWheels!"</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <button
                    className="absolute z-10 left-5 bottom-12 -translate-y-1/2 bg-primary text-white p-2 rounded hover:bg-white hover:border hover:text-primary cursor-pointer transition"
                    onClick={handlePrev}
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    className="absolute z-10 right-5 bottom-12 -translate-y-1/2 p-2 rounded bg-primary text-white hover:bg-white hover:border-primary hover:border hover:text-primary cursor-pointer transition"
                    onClick={handleNext}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </motion.div>
    );
};

export default Testimonial;

import React from 'react';
import { MapPin, CarFront, Wallet } from 'lucide-react';
import { Link } from 'react-router';

const SingleCarCard = ({ car }) => {
    return (

        <div className="relative w-full max-w-3xl mx-auto backdrop-blur-lg border bg-white border-white/20 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer">
            <div className="grid md:grid-cols-2 items-center ">
                <div className="relative overflow-hidden h-[340px]">
                    <img
                        src={car.imageUrl}
                        alt={car.carName}
                        className="w-auto h-[360px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 from-black/40 via-transparent to-transparent"></div>

                    <div className="absolute top-3 left-3">
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold border ${car.status === "Available"
                                ? "bg-green-100/90 text-green-700 border-green-300"
                                : "bg-red-100/90 text-red-700 border-red-300"
                                }`}
                        >
                            {car.status}
                        </span>
                    </div>
                </div>


                <div className="p-6 md:p-8">
                    <div className="flex flex-col text-left h-full justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">
                                {car.carName}
                            </h2>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {car.description}
                            </p>

                            <div className="space-y-2">
                                <p className="flex items-center gap-2 text-gray-700">
                                    <MapPin size={18} className="text-primary" />
                                    <span>{car.location}</span>
                                </p>
                                <p className="flex items-center gap-2 text-gray-700">
                                    <CarFront size={18} className="text-primary" />
                                    <span>{car.category}</span>
                                </p>
                                <p className="flex items-center gap-2 text-gray-700">
                                    <Wallet size={18} className="text-primary" />
                                    <span className="font-semibold text-lg">
                                        {car.rentPrice}৳ / day
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-5">
                            <Link to={`/BrowseCars/${car._id}`} className="w-full py-2 btn button-two hover:bg-primary rounded-2xl text-white font-semibold tracking-wide transition-all duration-300 hover:opacity-90">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleCarCard;
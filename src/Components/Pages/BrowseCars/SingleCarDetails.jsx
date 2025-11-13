import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/Auth/AuthContext';
import { useLocation, useParams } from 'react-router';
import { motion } from "motion/react"
import { MapPin, CarFront, Wallet, BookmarkCheck, BookmarkX, IdCardLanyard, AtSign } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

const SingleCarDetails = () => {

    let [data, setData] = useState()
    const { id } = useParams();
    const { userInfo } = use(AuthContext)


    useEffect(() => {
        const getData = () => {
            fetch(`https://rent-wheels-server-lqfd.vercel.app/BrowseCars/${id}`)
                .then(res => res.json())
                .then(info => setData(info))
        }

        return (() => getData())
    }, [id])


    const updateData = () => {


        fetch(`https://rent-wheels-server-lqfd.vercel.app/BrowseCars/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status: "Unavaliable", bookedBy: userInfo.email })
        })
            .then(res => res.json())
            .then(resData => {
                // console.log("After Update", resData)
                setData(prev => ({ ...prev, status: "Unavaliable" }))
                toast.success('Successfully Added To Your Booking', {
                    position: "top-center",
                    autoClose: 3000,
                    style: {
                        background: "#fff",
                        color: "#10b981",
                        fontWeight: "600",
                        borderRadius: "10px",
                        padding: "12px 18px",
                    },
                });
            })
    }

    if (data) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.35,
                    ease: "easeOut",
                }}
            // viewport={{ once: true, amount: 0.3 }}
            >
                <ToastContainer />
                <div className="mt-10 p-5 xl:p-0  max-w-[340px]   lg:max-w-[1280px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 justify-center">
                        <div className="w-[340px] sm:w-[600px] md:w-[800px] text-left">
                            <div className="w-[340px] sm:w-[600px] md:w-full rounded-xl text-center bg-green-300 overflow-hidden">
                                <img className='h-full ' src={data.imageUrl} alt="" />
                            </div>

                            <div className="lg:hidden mt-5">
                                <h1 className='text-3xl font-bold'>{data.carName}</h1>
                                <title>{`${data.carName} - RentWheels`}</title>
                                <div className="divider"></div>
                            </div>

                            <div className="bg-white shadow-sm p-4 mt-5 rounded-xl w-[340px] sm:w-[600px] md:w-full">
                                <h2 className='text-lg underline underline-offset-6 decoration-primary font-semibold mb-2'>Description</h2>
                                <p className='text-md'>{data.description}</p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="lg:w-[500px]">
                                <div className="hidden lg:visible">
                                    <h1 className='text-3xl font-bold'>{data.carName}</h1>
                                    <title>{`${data.carName} - RentWheels`}</title>
                                    <div className="divider"></div>
                                </div>

                                <div className="">
                                    <h2 className='text-lg underline underline-offset-6 decoration-primary font-semibold mb-2'>Details</h2>
                                    <div className="flex flex-col sm:flex-row lg:flex-col gap-15 sm:gap-5 md:gap-13 items-start">
                                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                                        
                                            <table className="table">
                                                <tbody className=''>
                                                    <tr className="h-full w-[500px] md:w-[400px] lg:w-[500px]">
                                                        <td className="border-r w-[250px] border-gray-200">
                                                            <div className="flex lg:ml-5 justify-start items-center gap-2">
                                                                <Wallet strokeWidth={1.5} size={40} className="text-primary" />
                                                                <div>
                                                                    <span className="text-sm text-gray-700">Rent Price</span>
                                                                    <p className="text-lg font-semibold">{data.rentPrice}৳ / day</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='w-[250px]'>
                                                            <div className="flex justify-start md:lg:ml-5 items-center gap-2">
                                                                <CarFront strokeWidth={1.5} size={40} className="text-primary" />
                                                                <div>
                                                                    <span className="text-sm text-gray-700">Car Type</span>
                                                                    <p className="text-lg font-semibold">{data.category}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="h-full">
                                                        <td className="border-r border-gray-200 w-[50%]">
                                                            <div className="flex  lg:ml-5 justify-start  items-center gap-2">
                                                                <MapPin strokeWidth={1.5} size={40} className="text-primary" />
                                                                <div className="">
                                                                    <span className='text-sm text-gray-700'>Location</span>
                                                                    <p className='text-lg font-semibold'>{data.location}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='w-[50%]'>
                                                            <div className="flex justify-start lg:ml-5 items-center gap-2">

                                                                {
                                                                    data.status === "Available" ?
                                                                        <BookmarkCheck strokeWidth={1.5} size={40} className="text-primary" /> :
                                                                        <BookmarkX strokeWidth={1.5} size={40} className="text-primary" />
                                                                }
                                                                <div className="">
                                                                    <span className='text-sm text-gray-700'>Status</span>
                                                                    <p className='text-lg font-semibold'>{data.status}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                        </div>

                                        <div className="-mt-9 w-[340px] md:w-[400px]">
                                            <h2 className='text-lg underline underline-offset-6 decoration-primary font-semibold mb-2'>Provider Details</h2>
                                            <div className="">
                                                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                                                    <table className="table">
                                                        <tbody className=''>
                                                            <tr className="h-full ">
                                                                <td className="border-r border-gray-200">
                                                                    <div className="flex lg:ml-5 justify-start items-center gap-2">
                                                                        <IdCardLanyard strokeWidth={1.5} size={40} className="text-primary" />
                                                                        <div>
                                                                            <span className="text-sm text-gray-700">Name</span>
                                                                            <p className="text-lg font-semibold">{data.name}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="h-full ">
                                                                <td className=''>
                                                                    <div className="flex lg:ml-5 justify-start items-center gap-2">
                                                                        <AtSign strokeWidth={1.5} size={33} className="text-primary mx-1   " />
                                                                        <div>
                                                                            <span className="text-sm block text-gray-700">Email</span>
                                                                            <a href={`mailto:${data.email}`} className="text-lg block font-semibold">{data.email}</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <button className='btn button-one w-full mt-3' onClick={updateData} disabled={data.status === "Available" ? false : true}>{data.status === "Available" ? "Book Now" : "Already Booked"}</button>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
};

export default SingleCarDetails;
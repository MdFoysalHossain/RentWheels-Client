import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/Auth/AuthContext';
import SingleListing from './SingleListing';
import { Car, CircleChevronLeft } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

import Swal from 'sweetalert2'

const MyListings = () => {
    const { userInfo } = use(AuthContext)
    let [listings, setListings] = useState(null)

    useEffect(() => {
        const getData = () => {
            fetch(`https://rent-wheels-server-lqfd.vercel.app/MyListings?email=${userInfo.email}`)
                .then(res => res.json())
                .then(info => setListings(info))
        }

        getData()
    }, [userInfo.email])

    if (!listings) {
        return <div className='w-full h-[50vh] flex justify-center items-center'><span className="loading loading-infinity loading-xl"></span></div>
    }

    if (listings.length === 0) {
        return (
            <div className="h-[80vh] flex justify-center items-center flex-col gap-5">
                <title>My Listings - RentWheels</title>
                <h2 className='text-4xl font-semibold capitalize text-left'>It seems you dont Have <br /> any listed Cars</h2>
                <span className='text-xl flex justify-center items-center gap-1'><CircleChevronLeft className='text-primary' /> Go to <Link to={"/BrowseCars"} className='underline text-primary'>Browse Cars</Link></span>
            </div>
        )
    }

    return (
        <div className=" mt-10 max-w-[1280px] mx-auto">
            <h1 className='text-2xl font-bold text-left mb-10 flex justify-center items-center gap-2 '>My Listings <Car className='text-primary ' size={30} /></h1>
            <div className='bg-white mt-10'>
                <title>My Listings - RentWheels</title>

                <div className="overflow-x-auto">
                    <table className="table overflow-hidden ">
                        <thead>
                            <tr>
                                <th>SL No</th>
                                <th>Car Name</th>
                                <th>Category</th>
                                <th>Rent Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listings.map((listing, index) => <SingleListing setListings={setListings} listings={listings} index={index} listing={listing} key={index} />)
                            }
                        </tbody>
                    </table>
                </div> 




            </div>
        </div>
    );
};

export default MyListings;
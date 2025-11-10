import React, { use, useEffect, useState } from 'react';

import { Car,CircleChevronLeft } from 'lucide-react';
import SingleBookings from './SingleBookings';
import { Link, } from 'react-router';
import { AuthContext } from '../../../Contexts/Auth/AuthContext';


const MyBookings = () => {

    const { userInfo } = use(AuthContext)
    const [bookings, setBookings] = useState(null)

    useEffect(() => {
        const getData = () => {
            fetch(`http://localhost:3000/MyBookings?email=${userInfo.email}`)
                .then(res => res.json())
                .then(data => setBookings(data))
        }

        return (() => getData());
    }, [userInfo.email])

    if (!bookings) {
        return <div className='w-full h-[50vh] flex justify-center items-center'><span className="loading loading-infinity loading-xl"></span></div>
    }

    if (bookings.length === 0) {
        return (
            <div className="h-[80vh] flex justify-center items-center flex-col gap-5">
                <title>My Bookings - RentWheels</title>
                <h2 className='text-4xl font-semibold capitalize text-left'>It seems you dont Have <br /> any Booked Any Cars</h2>
                <span className='text-xl flex justify-center items-center gap-1'><CircleChevronLeft className='text-primary' /> Go to <Link to={"/BrowseCars"} className='underline text-primary'>Browse Cars</Link></span>
            </div>
        )
    }

    return (
        <div className=" mt-10">
            <title>My Bookings - RentWheels</title>
            <h1 className='text-2xl font-bold text-left mb-10 flex justify-center items-center gap-2 '>My Bookings <Car className='text-primary ' size={30} /></h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Car Name</th>
                            <th>Car Type</th>
                            <th>Rent Price</th>
                            <th>location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((book, index) => <SingleBookings bookings={bookings} setBookings={setBookings} book={book} index={index} key={index} />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
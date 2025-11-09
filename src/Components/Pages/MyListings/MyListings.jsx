import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/Auth/AuthContext';
import SingleListing from './SingleListing';

const MyListings = () => {
    const {userInfo} = use(AuthContext)
    let [listings, setListings] = useState(null)

    useEffect(() => {
        const getData = () => {
            fetch(`http://localhost:3000/MyListings?email=${userInfo.email}`)
                .then(res => res.json())
                .then(info => setListings(info))
        }

        return (() => getData())
    }, [])

    if(!listings){
        return <div className='w-full h-[50vh] flex justify-center items-center'><span className="loading loading-infinity loading-xl"></span></div>
    }

    return (
        <div className='bg-white mt-10'>
            <div className="overflow-x-auto">
                <table className="table ">
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
                            listings.map((listing,  index) => <SingleListing setListings={setListings} listings={listings} index={index} listing={listing} key={index}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListings;
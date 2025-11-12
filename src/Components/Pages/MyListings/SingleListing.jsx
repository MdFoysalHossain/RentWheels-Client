import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2'
import { motion } from "motion/react"

import { ToastContainer, toast } from 'react-toastify';

const SingleListing = ({ listing, index, listings, setListings }) => {
    // console.log(listing)

    const deleteHandle = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/MyListings/${listing._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("After deleteData", data)
                        const newData = listings.filter(item => item._id !== listing._id);

                        console.log(newData)
                        setListings(newData)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your post has been deleted.",
                            icon: "success"
                        });
                    })

            }
        });
    }

    return (
        <motion.tr
            initial={{ opacity: 1, y: 7 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.35,
                ease: "easeOut",
            }}
            // viewport={{ once: true, amount: 0.3 }}
        >


            <th>{index + 1}</th>
            <th>{listing.carName}</th>
            <td>{listing.category}</td>
            <td>{listing.rentPrice}</td>
            <td>{listing.status}</td>
            <td>
                <Link className='btn button-two mr-2' to={`/EditMyListing/${listing._id}`}>Edit</Link>
                <button onClick={deleteHandle} className='btn button-one'>Delete</button>
            </td>
        </motion.tr>
    );
};

export default SingleListing;
import React from 'react';
import Swal from 'sweetalert2'

import { motion } from "motion/react"

const SingleBookings = ({ book, index, bookings, setBookings }) => {
    const id = book._id;

    const handleDelete = () => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove It!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/MyBookings/${id}`, {
                    method: "PATCH",
                    headers: { "content-type": "application/json" }
                })

                    .then(res => res.json())
                    .then(data => {
                        const newData = bookings.filter(item => item._id !== id)
                        setBookings(newData)
                        Swal.fire({
                            title: "Removed!",
                            text: "Your Booking Has Been Removed.",
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
            viewport={{ once: true, amount: 0.3 }} 
            >
            <th>{index + 1}</th>
            <td>{book.carName}</td>
            <td>{book.category}</td>
            <td>{book.rentPrice}</td>
            <td>{book.location}</td>
            <td><button onClick={handleDelete} className='btn button-one'>Delete</button></td>
        </motion.tr>
    );
};

export default SingleBookings;
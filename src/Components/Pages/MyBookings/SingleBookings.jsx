import React from 'react';
import Swal from 'sweetalert2'

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
            confirmButtonText: "Yes, delete it!"
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
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })



            }
        });


    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{book.carName}</td>
            <td>{book.category}</td>
            <td>{book.rentPrice}</td>
            <td>{book.location}</td>
            <td><button onClick={handleDelete} className='btn button-one'>Delete</button></td>
        </tr>
    );
};

export default SingleBookings;
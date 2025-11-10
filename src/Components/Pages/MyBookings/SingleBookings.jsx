import React from 'react';

const SingleBookings = ({book, index, bookings, setBookings}) => {
    const id = book._id;

    const handleDelete = () => {
        fetch(`http://localhost:3000/MyBookings/${id}`, {
            method: "PATCH",
            headers: {"content-type": "application/json"}
        })

        .then(res => res.json())
        .then(data => {
            const newData = bookings.filter(item => item._id !== id )
            setBookings(newData)
        })

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
import React from 'react';
import Swal from 'sweetalert2'

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
        <tr>
            <th>{index + 1}</th>
            <th>{listing.carName}</th>
            <td>{listing.category}</td>
            <td>{listing.rentPrice}</td>
            <td>{listing.status}</td>
            <td>
                <button className='btn button-two mr-2'>Edit</button>
                <button onClick={deleteHandle} className='btn button-one'>Delete</button>
            </td>
        </tr>
    );
};

export default SingleListing;
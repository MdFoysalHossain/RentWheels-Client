import React from 'react';

const SingleListing = ({listing, index}) => {
    console.log(listing)

    return (
        <tr>
            <th>{index +1}</th>
            <th>{listing.carName}</th>
            <td>{listing.category}</td>
            <td>{listing.rentPrice}</td>
            <td>{listing.status}</td>
            <td>
                <button className='btn button-two mr-2'>Edit</button>
                <button className='btn button-one'>Delete</button>
            </td>
        </tr>
    );
};

export default SingleListing;
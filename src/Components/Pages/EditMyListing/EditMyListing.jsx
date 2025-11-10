import React from 'react';
import { AuthContext } from '../../../Contexts/Auth/AuthContext';
import { useLoaderData, useParams } from 'react-router';
import EditItem from './EditItem';
import NotFoundListing from './NotFoundListing';

const EditMyListing = () => {
    const { id } = useParams()
    const loaderData = useLoaderData()

    // useEffect(() => {
    //     const getData = () => {
    //         fetch(`http://localhost:3000/BrowseCars/}`)
    //             .then(res => res.json())
    //             .then(info => {
    //                 setAllData(info)
    //             })
    //     }
    //     return (() => getData())
    // }, [id])


    if (loaderData) {
        console.log("All Data Entered", loaderData)
        const check = loaderData.filter(item => item._id === id)
        console.log("Check", check)

        if (check.length !== 0) {
            console.log("Found a Match", check)
            return ( 
                <EditItem></EditItem>
            )
            
        } else {
            return (<NotFoundListing/>)
        }
    } else {
        console.log("All Data exit")
    }

};

export default EditMyListing;
import React, { use, } from 'react';
import { AuthContext } from '../../../Contexts/Auth/AuthContext';
import { useLoaderData, useParams } from 'react-router';
import EditItem from './EditItem';

const EditMyListing = () => {
    const { userInfo } = use(AuthContext)
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
            return <h1>404 Not FOund</h1>
        }
    } else {
        console.log("All Data exit")
    }

};

export default EditMyListing;
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/Auth/AuthContext';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const EditItem = () => {

    const { userInfo } = use(AuthContext)
    const { id } = useParams()
    let [details, setDetails] = useState(null)

    useEffect(() => {
        const getData = () => {
            fetch(`https://rent-wheels-server-lqfd.vercel.app/BrowseCars/${id}`)
                .then(res => res.json())
                .then(info => setDetails(info))
        }

        getData()
    }, [id])


    const handleForm = (e) => {
        e.preventDefault();
        const carName = e.target.carName.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const rentPrice = e.target.rentPrice.value;
        const location = e.target.location.value;
        const imageUrl = e.target.imageUrl.value;
        const email = userInfo.email;
        const name = userInfo.displayName;

        const data = {
            carName: carName,
            description: description,
            category: category,
            rentPrice: rentPrice,
            location: location,
            imageUrl: imageUrl,
            email: email,
            name: name,
        }

        fetch(`https://rent-wheels-server-lqfd.vercel.app/MyListingsUpdate/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully Updated Your Listed Car', {
                    position: "top-center",
                    autoClose: 3000,
                    style: {
                        background: "#fff",
                        color: "#10b981",
                        fontWeight: "600",
                        borderRadius: "10px",
                        padding: "12px 18px",
                    },
                });
            })

        console.log(data)
    }

    if (!details) {
        console.log("All Data Entered")
        return
    }



    if (details.length === 0) {
        return <div>Not Found</div>
    }

    if (userInfo.email === details.email) {

        return (
            <div>
                <ToastContainer />
                <title>Edit Your Listing - RentWheels</title>
                <div className="min-h-screen text-left flex items-center justify-center p-6">
                    <div className="card w-full max-w-2xl shadow-xl bg-base-100">
                        <div className="card-body">
                            <h2 className="text-3xl font-bold text-center mb-4">
                                Edit <span className='text-primary'>Your</span> Listing
                            </h2>
                            <form onSubmit={handleForm} className="space-y-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Car Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="carName"
                                        placeholder="Enter car name"
                                        className="input input-bordered w-full"
                                        required
                                        defaultValue={details.carName}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Description</span>
                                    </label>
                                    <textarea
                                        name="description"
                                        placeholder="Write short details about the car"
                                        className="textarea textarea-bordered w-full"
                                        rows={3}
                                        required

                                        defaultValue={details.description}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Category</span>
                                        </label>
                                        <select
                                            name="category"
                                            className="select select-bordered w-full"
                                            defaultValue={details.category}
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            <option value="Sedan">Sedan</option>
                                            <option value="SUV">SUV</option>
                                            <option value="Hatchback">Hatchback</option>
                                            <option value="Luxury">Luxury</option>
                                            <option value="Electric">Electric</option>
                                        </select>

                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">
                                                Rent Price by ৳ (Per Day)
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            name="rentPrice"
                                            placeholder="৳ Price per day"
                                            className="input input-bordered w-full"
                                            defaultValue={details.rentPrice}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Location</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Enter location"
                                        className="input input-bordered w-full"
                                        required
                                        defaultValue={details.location}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">
                                            Hosted Image URL
                                        </span>
                                    </label>
                                    <input
                                        type="url"
                                        name="imageUrl"
                                        placeholder="https://images.unsplash.com/..."
                                        className="input input-bordered w-full"
                                        required
                                        defaultValue={details.imageUrl}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">
                                                Provider Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            readOnly
                                            value={userInfo.displayName}
                                            className="input input-bordered w-full bg-base-200"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">
                                                Provider Email
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            readOnly
                                            value={userInfo.email}
                                            className="input input-bordered w-full bg-base-200"
                                        />
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="button-one text-white w-full">Update Details</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default EditItem;
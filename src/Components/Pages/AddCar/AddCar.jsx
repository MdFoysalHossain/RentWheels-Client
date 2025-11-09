import React, { use } from 'react';
import { AuthContext } from '../../../Contexts/Auth/AuthContext';

const AddCar = () => {


    const { userInfo } = use(AuthContext)



    const handleSubmit = (e) => {
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
            status: "Available",
            name: name
        }

        fetch("http://localhost:3000/AddCar", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log("Post Was Created", data))

        console.log(data)

    };


    return (
        <div>
            <div className="min-h-screen text-left flex items-center justify-center p-6">
                <div className="card w-full max-w-2xl shadow-xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center mb-4">
                            Add <span className='text-primary'>Your</span> Car
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
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
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option key={"Sedan"} value={"Sedan"}>Sedan</option>
                                        <option key={"SUV"} value={"SUV"}>SUV</option>
                                        <option key={"Hatchback"} value={"Hatchback"}>Hatchback</option>
                                        <option key={"Luxury"} value={"Luxury"}>Luxury</option>
                                        <option key={"Electric"} value={"Electric"}>Electric</option>
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
                                <button className="button-one text-white w-full">Add Car</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCar;
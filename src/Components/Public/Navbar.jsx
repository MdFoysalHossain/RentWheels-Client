import React, { use } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { AuthContext } from '../../Contexts/Auth/AuthContext';
import { useState } from 'react';
import Logo from "../../../public/Alloy-Wheel.png";

const Navbar = ({ carsData }) => {
    const { userInfo, userLogOut } = use(AuthContext)
    const location = useLocation();

    const isHome = location.pathname === "/";






    const [searchValue, setSearchValue] = useState("");
    const [filteredList, setFilteredList] = useState([]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);

        if (value.trim() === "") {
            setFilteredList([]);
            return;
        }

        const list = carsData.filter((car) =>
            car.carName.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredList(list);
    };


    const searchHandle = (e) => {
        e.preventDefault();
    };

    const handleLogOut = () => {
        userLogOut()
            .then(console.log("User Logged Out"))
    }

    const navBar = <>
        <li><NavLink to={"/"} className={"active:bg-primary active:text-white"}>Home</NavLink></li>
        <li><NavLink to={"/AddCar"} className={"active:bg-primary active:text-white"}>Add Car</NavLink></li>
        {
            userInfo && <>
                <li><NavLink to={"/MyListings"} className={"active:bg-primary active:text-white"}>My Listings</NavLink></li>
                <li><NavLink to={"/MyBookings"} className={"active:bg-primary  active:text-white"}>My Bookings</NavLink></li>
            </>
        }


        <li><NavLink to={"/BrowseCars"} className={"active:bg-primary active:text-white"}>Browse Cars</NavLink></li>
    </>

    return (
        <div className="navbar max-w-[1280px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navBar}
                    </ul>
                </div>
                <NavLink className="btn bg-transparent shadow-none border-0 text-2xl font-bold gap-0">
                    <img src={Logo} className='w-[30px] mr-1' alt="" />
                    Rent<span className='text-primary'>Wheels</span>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1 *:hover:bg-gray-50 ">
                    {navBar}
                </ul>
            </div>
            <div className="navbar-end gap-2">


                {
                    isHome && (
                        <div className="relative w-full max-w-sm mx-auto">

                            <form onSubmit={searchHandle}>
                                <label className="input flex items-center">
                                    <svg
                                        className="h-[1em] opacity-50"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </g>
                                    </svg>
                                    <input name="search" type="search" placeholder="Search car name..." value={searchValue} onChange={handleSearchChange} className="w-full" autoComplete="off" />
                                </label>
                            </form>

                            {
                                filteredList.length > 0 && (
                                    <ul className="absolute z-10 w-full bg-white border rounded-md shadow-md mt-1 max-h-48 overflow-y-auto">
                                        {filteredList.map((car, index) => (
                                            <li key={index} onClick={() => setSearchValue(car.carName)} className="px-3 py-2 text-left hover:bg-gray-100 cursor-pointer">

                                                <Link to={`/BrowseCars/${car._id}`}>{car.carName}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                        </div>
                    )
                }









                {
                    userInfo ?
                        // 
                        <div className="dropdown dropdown-end">

                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt={userInfo.displayName}
                                        src={userInfo.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1  min-w-70 p-2 ">
                                <li className=''>
                                    <p className='cursor-pointer bg-transparent hover:bg-transparent -mb-2 active:text-black'>Name</p>
                                    <p className='cursor-pointer text-[16px] bg-transparent hover:bg-transparent active:text-black'>{userInfo.displayName}</p>
                                </li>
                                <li className=''>
                                    <p className='cursor-pointer bg-transparent hover:bg-transparent -mb-2 active:text-black'>Email</p>
                                    <p className='cursor-pointer text-[16px] bg-transparent hover:bg-transparent active:text-black mb-3'>{userInfo.email}</p>
                                </li>
                                <li><button onClick={handleLogOut} className='button-two flex justify-center items-center'>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <Link className="btn button-one" to={"/Login"}>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
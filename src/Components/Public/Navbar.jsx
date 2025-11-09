import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/Auth/AuthContext';

const Navbar = () => {
    const { userInfo, userLogOut } = use(AuthContext)

    const handleLogOut = () => {
        userLogOut()
            .then(console.log("User Logged Out"))
    }

    const navBar = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/AddCar"}>Add Car</NavLink></li>
        <li><NavLink to={"/MyListings"}>My Listings</NavLink></li>
        <li><NavLink to={"/MyBookings"}>My Bookings</NavLink></li>
        <li><NavLink to={"/BrowseCars"}>Browse Cars</NavLink></li>
    </>

    return (
        <div className="navbar">
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
                    Rent<span className='text-primary'>Wheels</span>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1 *:hover:bg-gray-50">
                    {navBar}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    userInfo ? <button onClick={handleLogOut} className='button-two'>Logout</button> :
                        <Link className="btn button-one" to={"/Login"}>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
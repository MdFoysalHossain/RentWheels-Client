import React from 'react';
import { NavLink } from 'react-router';
import { MapPinned, PhoneCall, Mail, ReceiptText, Facebook, Instagram, X } from 'lucide-react';
import Logo from "../../../public/Alloy-Wheel.png";

const Footer = () => {
    return (

        <div className='bg-black mt-20 w-full'>
            <div className="grid grid-cols-1 md:grid-cols-3 px-10 justify-start lg:justify-items-center *:max-w-[350px] max-w-[1220px] mx-auto gap-10 py-10 text-white">
                <div className="text-white text-left">
                    <NavLink className="btn -ml-5 bg-transparent shadow-none border-0 text-2xl font-bold gap-0 text-white">
                        <img src={Logo} className='w-[30px] mr-1' alt="" />
                        Rent<span className='text-primary'>Wheels</span>
                    </NavLink>
                    <p>RentWheels is a car rental provider. Users can browse available cars, view details, and book rentals for specific dates. Car providers can list vehicles, manage bookings, and update availability.</p>
                </div>

                <div className="text-left">
                    <h2 className='text-xl font-semibold'>Contact</h2>
                    <div className="mt-5 flex flex-col gap-4">
                        <p className='flex gap-2'><MapPinned className='text-primary' /> Bangladesh, Dhaka - 1212, Banani.</p>
                        <p className='flex gap-2'><PhoneCall className='text-primary' /> (+880) 191 234 1234</p>
                        <p className='flex gap-2'><Mail className='text-primary' /> rentwheels@info.com</p>
                        <p className='flex gap-2 hover:text-primary underline underline-offset-4 decoration-primary cursor-pointer'>
                            <ReceiptText className='text-primary' /> Read Our Terms & Conditions
                        </p>
                    </div>
                </div>

                <div className="text-left">
                    <h2 className='text-xl font-semibold'>Social Media</h2>
                    <div className="mt-5 flex flex-col gap-4">
                        <a href='https://www.facebook.com/' target='_blank' className='flex gap-2 hover:text-primary'>
                            <Facebook className='text-primary' /> Facebook
                        </a>
                        <a href='https://www.instagram.com/' target='_blank' className='flex gap-2 hover:text-primary'>
                            <Instagram className='text-primary' /> Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;
import React, { useState } from 'react';
import { Link } from 'react-router';
import { EyeOff, Eye } from 'lucide-react';

const Register = () => {

    let [eye, setEye] = useState(true)
    let [eye2, setEye2] = useState(true)
    let [progress, setProgress] = useState(true)

    const checkEye = () => {
        setEye(!eye)
    }
    const checkEye2 = () => {
        setEye2(!eye2)
    }

    const checkProgress = () => {
        setProgress(!progress)
    }

    return (
        <div className='w-full flex justify-center items-center mt-10 h-[80vh]'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <p className='font-semibold text-3xl mt-3'>Hello <span className='text-primary'>There!</span></p>
                <span className='text-lg mt-2'>Create An New Account</span>
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset">


                            {
                                progress ?
                                    <div className='text-left flex flex-col gap-2'>
                                        <div className='flex gap-5 text-left'>
                                            <div>
                                                <label className="label">First Name<span className='text-primary'>*</span></label>
                                                <input type="text" className="input" placeholder="Josh" required />
                                            </div>
                                            <div>
                                                <label className="label">Second Name<span className='text-primary'>*</span></label>
                                                <input type="text" className="input" placeholder="Sthephen" required />
                                            </div>
                                        </div>
                                        <label className="label">Photo Url<span className='text-primary'>*</span></label>
                                        <input type="text" className="input  w-full" placeholder="https://www.example-image.com/imageurl" required />
                                        <label className="label">Email<span className='text-primary'>*</span></label>
                                        <input type="email" className="input  w-full" placeholder="joshstephen@email.com" required />
                                    </div> :

                                    <div className='text-left flex flex-col gap-2'>
                                        <label className="label">Password<span className='text-primary'>*</span></label>
                                        <input type={eye ? "password" : "text"} className="input  w-full" placeholder="Password" required />

                                        {
                                            eye ? <EyeOff onClick={checkEye} className='absolute z-10 cursor-pointer bottom-[374px] right-[30px] bg-gray-100 p-1 rounded' size={30} /> :
                                                <Eye onClick={checkEye} className='absolute z-10 cursor-pointer bottom-[374px] right-[30px] bg-gray-100 p-1 rounded' size={30} />
                                        }

                                        <label className="label">Confirm Password<span className='text-primary'>*</span></label>
                                        <input type={eye2 ? "password" : "text"} className="input  w-full" placeholder="Confirm Password" required />
                                        {
                                            eye2 ? <EyeOff onClick={checkEye2} className='absolute z-10 cursor-pointer bottom-[300px] right-[30px] bg-gray-100 p-1 rounded' size={30} /> :
                                                <Eye onClick={checkEye2} className='absolute z-10 cursor-pointer bottom-[300px] right-[30px] bg-gray-100 p-1 rounded' size={30} />
                                        }

                                        <div>

                                            <ul className='list-decimal ml-4 mt-5'>
                                                <li className='text-left'>Password and Confirm Password Must Match</li>
                                                <li className='text-left'>Must contain at least one uppercase letter</li>
                                                <li className='text-left'>Must contain at least one lowercase letter</li>
                                                <li className='text-left'>Must be at least 6 characters long</li>
                                            </ul>
                                        </div>

                                    </div>
                            }

                            {
                                !progress ?
                                    <div className="flex justify-center items-center gap-2 mt-4">
                                        <p onClick={checkProgress} className='button-two flex justify-center items-center'>Back</p>
                                        <button className="btn button-one flex-4">Register</button>
                                    </div> :
                                    <p onClick={checkProgress} className='button-two mt-2 flex justify-center items-center'>Next</p>
                            }

                            <div><p className="mt-1">Already Have An Account? <Link className='text-primary underline link link-hover' to={"/Login"}>Log In</Link></p></div>
                        </fieldset>
                    </form>

                    <p className='flex flex-row justify-center items-center gap-2'><span className='w-[50px] h-[2px] bg-gray-200'></span> or <span className='w-[50px] h-[2px] bg-gray-200'></span></p>

                    <button className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Register;
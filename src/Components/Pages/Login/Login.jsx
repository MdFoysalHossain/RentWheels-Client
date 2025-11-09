import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { EyeOff, Eye } from 'lucide-react';
import { AuthContext } from '../../../Contexts/Auth/AuthContext';

const Login = () => {

    const { userInfo, userEmailLogin, googleSignIn } = use(AuthContext)

    
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => console.log("Google Login Successfully", res))
            .catch(error => console.log("Google Login Error", error))
    }


    let [eye, setEye] = useState(true)

    const checkEye = () => {
        setEye(!eye)
    }

    const emailLoginHangle = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        userEmailLogin(email, password)
            .then(res => console.log("User Logged In:", res))
            .catch(error => console.log("Login Error", error))
    }

    return (
        <div className='w-full flex justify-center items-center h-[80vh]'>
            <title>Login to Account - RentWheels</title>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <p className='font-semibold text-3xl mt-3'>Welcome <span className='text-primary'>Back!</span></p>
                <span className='text-lg mt-2'>Login to your Account</span>
                <div className="card-body">
                    <form onSubmit={emailLoginHangle}>
                        <fieldset className="fieldset">
                            <label className="label">Email<span className='text-primary'>*</span></label>
                            <input name='email' type="email" className="input" placeholder="Email" required />
                            <label className="label">Password<span className='text-primary'>*</span></label>
                            <input name='password' type={eye? "password": "text"} className="input" placeholder="Password" required />
                            {
                                eye ? <EyeOff onClick={checkEye} className='absolute cursor-pointer bottom-[200px] right-[45px] bg-gray-100 p-1 rounded' size={30} /> :
                                    <Eye onClick={checkEye} className='absolute cursor-pointer bottom-[200px] right-[45px] bg-gray-100 p-1 rounded' size={30} />
                            }


                            <button className="btn mt-4 button-one">Login</button>
                            <div><p className="mt-1">Dont Have An Account? <Link className='text-primary underline link link-hover' to={"/Register"}>Create One</Link></p></div>
                        </fieldset>
                    </form>

                    <p className='flex flex-row justify-center items-center gap-2'><span className='w-[50px] h-[2px] bg-gray-200'></span> or <span className='w-[50px] h-[2px] bg-gray-200'></span></p>

                    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Login;
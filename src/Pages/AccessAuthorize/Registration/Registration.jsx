import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Registration = () => {

    const { emailSignup, googleLogin, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const delayNavigate = () => {
        navigate('/login')
    }

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        emailSignup(data.email, data.password)
            .then(result => {
                const user = result.user;
                if (user) {
                    toast("Registration Success !");
                    setTimeout(delayNavigate, 2000);
                    reset();
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    const googleSignup = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                if (user) {
                    toast("Registration Success !");
                    setTimeout(delayNavigate, 2000);
                    logOut();
                    reset();
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>
            <div className="bg-slate-200 p-2 lg:p-12 mt-10 ">
                <div className='bg-slate-100 lg:w-2/4 mx-auto rounded-lg shadow-md drop-shadow-md p-4 lg:px-10 lg:py-24 tracking-wider'>
                    <h1 className='text-2xl lg:text-5xl text-slate-600 text-center font-semibold mb-4 underline'>Sign Up</h1>
                    <div className='grid justify-center mt-8'>
                        <button onClick={googleSignup} className='btn glass text-slate-500 flex justify-center items-center border-2 rounded-full w-12 h-12 mx-auto my-1'>
                            <span className='text-3xl'><FaGoogle></FaGoogle></span>
                        </button>
                        <p>You can also signup with your Email</p>
                        <div className="divider mt-0"></div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-5">
                            <div className="space-y-1">
                                <label htmlFor="name" className='block font-medium ml-1'>Enter your name</label>
                                <input {...register("name")} required id="" placeholder='Enter the name here' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="email" className='block font-medium ml-1'>Enter your email</label>
                                <input {...register("email")} required id="" placeholder='Enter your email address' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="password" className='block font-medium ml-1'>Enter your password</label>
                                <input {...register("password")} required id="" placeholder='Enter password' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="img" className='block font-medium ml-1'>Enter a valid image URL</label>
                                <input {...register("img")} required placeholder='Enter URL here @example: https://img.com' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>

                        </div>

                        <div className="divider my-8 font-semibold text-yellow-600">
                            Already have an account?<Link to={'/'} className='text-blue-500'>Login here</Link>
                        </div>

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" value="Add Product" className='btn btn-error w-full text-white font-semibold tracking-widest drop-shadow-xl' />
                    </form>
                </div>
            </div>


            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
};

export default Registration;
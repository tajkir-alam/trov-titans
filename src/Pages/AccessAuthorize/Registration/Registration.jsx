import React from 'react';
import { useForm } from "react-hook-form";

const Registration = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className="bg-slate-200 p-2 lg:p-12 mt-10 ">
            <div className='bg-slate-100 lg:w-2/4 mx-auto rounded-lg shadow-md drop-shadow-md p-4 lg:px-10 lg:py-24 tracking-wider'>
                <h1 className='text-2xl lg:text-5xl text-slate-600 text-center font-semibold mb-4 underline'>Register Now</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>
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

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" value="Add Product" className='btn btn-error w-full text-white font-semibold tracking-widest mt-8 drop-shadow-xl' />
                </form>
            </div>
        </div>
    );
};

export default Registration;
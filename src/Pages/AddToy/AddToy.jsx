import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToy = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/alltoys', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast("Wow so easy !");
                    reset();
                }
            })
    };

    return (
        <>
            <div className="bg-slate-200 p-2 lg:p-12 mt-10">
                <div className='custom-container bg-slate-100 rounded-lg shadow-md drop-shadow-md p-4 lg:p-10 tracking-wider'>
                    <h1 className='text-2xl lg:text-5xl text-slate-600 text-center font-semibold mb-4'>Add A New Product</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-5">
                            <div className="grid lg:grid-cols-2 items-center gap-3">
                                <div className="space-y-1">
                                    <label htmlFor="picture" className='block font-medium ml-1'>Enter a valid image URL</label>
                                    <input {...register("picture")} required placeholder='Enter URL here @example: https://img.com' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="name" className='block font-medium ml-1'>Enter the product name</label>
                                    <input {...register("name")} required id="" placeholder='Enter the name here' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-3 items-center">
                                <div className='space-y-1'>
                                    <label htmlFor="sellerName" className='block font-medium ml-1'>Your name</label>
                                    <input type="text" required {...register("sellerName")} id="" placeholder='Enter your name' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                                </div>
                                <div className='space-y-1'>
                                    <label htmlFor="sellerEmail" className='block font-medium ml-1'>Your email</label>
                                    <input type="text" required {...register("sellerEmail")} id="" placeholder='Enter your email' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                                </div>
                            </div>
                            <div className='grid lg:grid-cols-2 gap-3 items-center'>
                                <div className="space-y-1">
                                    <label htmlFor="price" className='block font-medium ml-1'>Enter the product price</label>
                                    <input type="text" required {...register("price")} id="" placeholder='Enter the price' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="ratings" className='block font-medium ml-1'>Enter the product ratings</label>
                                    <input type="text" required {...register("ratings")} id="" placeholder='Enter the ratings' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                                </div>
                            </div>
                            <div className='grid lg:grid-cols-2 gap-3 items-center'>
                                <div className="space-y-1">
                                    <label htmlFor="subCategory" className='block font-medium ml-1'>Enter the product category</label>
                                    <select required {...register("subCategory")} className="select shadow-lg border-2 outline-none rounded-md w-full">
                                        <option >Select Category</option>
                                        <option value={'Marvel'}>Marvel</option>
                                        <option value={'Transformers'}>Transformers</option>
                                        <option value={'StarWars'}>StarWars</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="quantity" className='block font-medium ml-1'>Enter the product quantity</label>
                                    <input type="text" required {...register("quantity")} id="" placeholder='Enter the quantity' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="details" className='block font-medium ml-1'>Enter product details</label>
                                <textarea {...register("details")} required id="" cols="30" rows="8" placeholder='Product details...' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full resize-none'></textarea>
                            </div>
                        </div>

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" value="Add Product" className='btn btn-error w-full text-white font-semibold tracking-widest mt-8 drop-shadow-xl' />
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

export default AddToy;
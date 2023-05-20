import React from 'react';

const AddToy = () => {
    const addProducts = event => {
        event.preventDefault();

    }

    return (
        <div className="bg-slate-200 p-2 lg:p-12 mt-10">
            <div className='custom-container bg-slate-100 rounded-md shadow-md drop-shadow-md p-4 lg:p-10 tracking-wider'>
                <h1 className='text-2xl lg:text-5xl text-center font-semibold mb-4'>Add A New Product</h1>
                <form on onSubmit={addProducts}>
                    <div className="space-y-5">
                        <div className="grid lg:grid-cols-2 items-center gap-3">
                            <div className="space-y-1">
                                <label htmlFor="photoUrl" className='block font-medium ml-1'>Enter a valid image URL</label>
                                <input type="text" name="photoUrl" id="" placeholder='Enter URL here @example: https://img.com' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="productName" className='block font-medium ml-1'>Enter the product name</label>
                                <input type="text" name="productName" id="" placeholder='Enter the name here' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-3 items-center">
                            <div className='space-y-1'>
                                <label htmlFor="sellerName" className='block font-medium ml-1'>Enter your name</label>
                                <input type="text" name="sellerName" id="" placeholder='Enter your name' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                            <div className='space-y-1'>
                                <label htmlFor="SellerEmail" className='block font-medium ml-1'>Enter your email</label>
                                <input type="text" name="SellerEmail" id="" placeholder='Enter your email' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-3 items-center'>
                            <div className="space-y-1">
                                <label htmlFor="price" className='block font-medium ml-1'>Enter the product price</label>
                                <input type="text" name="price" id="" placeholder='Enter the price' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="ratings" className='block font-medium ml-1'>Enter the product ratings</label>
                                <input type="text" name="ratings" id="" placeholder='Enter the ratings' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-3 items-center'>
                            <div className="space-y-1">
                                <label htmlFor="subCategory" className='block font-medium ml-1'>Enter the product category</label>
                                <input type="text" name="subCategory" id="" placeholder='Enter the price' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="quantity" className='block font-medium ml-1'>Enter the product quantity</label>
                                <input type="text" name="quantity" id="" placeholder='Enter the quantity' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full' />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="details" className='block font-medium ml-1'>Enter product details</label>
                            <textarea name="details" id="" cols="30" rows="8" placeholder='Product details...' className='py-2 px-3 shadow-lg border-2 outline-none rounded-md w-full resize-none'></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className='btn btn-error w-full text-white font-semibold tracking-widest mt-8 drop-shadow-xl' />
                </form>
            </div>
        </div>
    );
};

export default AddToy;
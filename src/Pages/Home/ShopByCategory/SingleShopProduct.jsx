import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Rating } from '@smastrom/react-rating';

const SingleShopProduct = ({ eachProduct }) => {

    const { picture, name, price, ratings, _id } = eachProduct;

    return (

        <div className="grid grid-cols-3 items-center bg-base-100 shadow-xl h-full rounded-lg">
            <LazyLoad>
                <figure className='p-2 md:p-4'><img src={picture} alt="Movie" className='w-full h-52' /></figure>
            </LazyLoad>
            <div className="card-body col-span-2 p-3">
                <h2 className="card-title text-2xl text-[#e4132bd2]">{name}</h2>
                <p className="font-medium"><span className='text-[#e4132bd2]'>Price</span>: ${price}</p>
                <div className="font-medium flex items-center gap-2"><span className='text-[#e4132bd2]'>
                    Ratings</span>: {ratings}
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={ratings}
                        readOnly
                    />
                </div>
                <div>
                    <button className="btn btn-error w-full text-white tracking-widest">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleShopProduct;
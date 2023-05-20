import React from 'react';
import img1 from '../../../assets/gallery3.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Rating } from '@smastrom/react-rating';

const SingleShopProduct = ({ eachProduct }) => {

    const { picture, name, price, ratings } = eachProduct;

    // console.log(eachProduct);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img1} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Price: ${price}</p>
                <p>Ratings: {ratings}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleShopProduct;
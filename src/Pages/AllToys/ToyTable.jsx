import React from 'react';
import LazyLoad from 'react-lazy-load';

const ToyTable = ({ singleToys }) => {
    const { sellerName, name, subCategory, price, quantity, picture } = singleToys;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <LazyLoad>
                                <img src={picture} alt="Avatar Tailwind CSS Component" />
                            </LazyLoad>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-75 text-slate-400">Trov Titans</div>
                    </div>
                </div>
            </td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <button className="btn btn-error w-full text-white tracking-wider font-semibold shadow-md">View Details</button>
            </th>
        </tr>
    );
};

export default ToyTable;
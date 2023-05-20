import React, { useEffect, useState } from 'react';
import ToyTable from './ToyTable';

const AllToys = () => {
    const [loadToys, setLoadToys] = useState([]);

    const [showProducts, setShowProducts] = useState(20);

    useEffect(() => {
        fetch(`https://trov-titans-server-data-tajkir-alam.vercel.app/shopbycategory?limit=${showProducts}`)
            .then(res => res.json())
            .then(data => setLoadToys(data));
    }, [showProducts])

    const productsLimit = e => {
        // console.log(e.target.value);
        setShowProducts(parseInt(e.target.value));
    }
    console.log(showProducts);

    return (
        <div>
            <section className='text-center text-5xl text-white font-semibold my-12 bg-[#e4132bd2] py-10 uppercase tracking-widest shadow-xl'>
                <span className="drop-shadow-md">
                    Our Luxury Toys
                </span>
            </section>

            <section className='space-y-5'>
                <div className='text-right pr-3'>
                    <select onChange={productsLimit} className="select select-error">
                        <option value={20}>Products Loaded: 20</option>
                        <option value={5}>Products Loaded: 5</option>
                        <option value={30}>Products Loaded: 30</option>
                        <option value={50}>Products Loaded: 50</option>
                    </select>
                </div>

                <div className="overflow-x-auto w-full px-4">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy Name</th>
                                <th>Seller Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loadToys.map(singleToys => <ToyTable key={singleToys._id} singleToys={singleToys}></ToyTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default AllToys;
import React, { useEffect, useState } from 'react';
import ToyTable from './ToyTable';

const AllToys = () => {
    const [loadToys, setLoadToys] = useState([]);

    useEffect(() => {
        fetch(`https://trov-titans-server-data-tajkir-alam.vercel.app/shopbycategory?limit=20`)
            .then(res => res.json())
            .then(data => setLoadToys(data));
    }, [])

    return (
        <div>
            <section className='text-center text-5xl text-white font-semibold my-12 bg-[#e4132bd2] py-10 uppercase tracking-widest shadow-xl'>
                <span className="drop-shadow-md">
                    Our Luxury Toys
                </span>
            </section>

            <section className='space-y-5'>
                <div className='text-right pr-3'>
                    <select className="select select-error">
                        <option>Products Loaded: 20</option>
                        <option>Products Loaded: 30</option>
                        <option>Products Loaded: 50</option>
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
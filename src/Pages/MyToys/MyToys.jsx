import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysTable from './MyToysTable';

const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [loadToys, setLoadToys] = useState([]);

    const [showProducts, setShowProducts] = useState(1);

    useEffect(() => {
        fetch(`https://trov-titans-server-data-tajkir-alam.vercel.app/alltoys?email=${user && user.email}&sorttoys=${showProducts}`)
            .then(res => res.json())
            .then(data => setLoadToys(data));
    }, [showProducts])

    const productsLimit = e => {
        setShowProducts(e.target.value);
    }


    return (
        <div>
            <section className='text-center text-5xl text-white font-semibold my-12 bg-[#e4132bd2] py-10 uppercase tracking-widest shadow-xl'>
                <span className="drop-shadow-md">
                    Our Luxury Toys
                </span>
            </section>

            <section className='space-y-5'>
                <div className='flex justify-end px-4'>
                    <select onChange={productsLimit} className="select select-error w-full lg:w-fit">
                        <option value={20}>Sort By</option>
                        <option value={1}>Ascending</option>
                        <option value={-1}>Descending</option>
                    </select>
                </div>

                <div className="overflow-x-auto w-full px-4">
                    <table className="table w-full">
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
                                loadToys.map(singleToys => <MyToysTable key={singleToys._id} singleToys={singleToys}></MyToysTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default MyToys;
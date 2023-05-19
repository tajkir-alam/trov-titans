import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../../assets/gallery3.jpg'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import SingleShopProduct from './SingleShopProduct';

const ShopByCategory = () => {
    const [loadShopProduct, setLoadShopProduct] = useState([]);

    useEffect(() => {
        fetch('https://trov-titans-server-data-tajkir-alam.vercel.app/shopbycategory')
            .then(res => res.json())
            .then(data => setLoadShopProduct(data));
    }, [])

    return (
        <div className='custom-container'>
            <div className='text-center space-y-3 md:w-3/4 mb-6 mx-auto px-1 md:px-0'>
                <h1 className='text-3xl md:text-5xl font-semibold text-slate-800'>Grab Your Titans</h1>
                <p className='font-medium text-slate-600'>Lorem ipsum dolor sit, Dolorum mollitia similique odio esse aliquam assumenda facilis magnam accusantium iste.</p>
            </div>

                {
                    loadShopProduct.map(singleProduct => console.log(singleProduct))
                }
            <Tabs forceRenderTabPanel defaultIndex={1}>



                {/* <TabList className="grid grid-cols-3 text-center text-[#e4132bd2] text-xl font-semibold">
                    <Tab>Marvel</Tab>
                    <Tab>Transformers</Tab>
                    <Tab>Star Wars</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList className='text-[#e4132bd2] py-2 font-medium'>
                            <Tab>Spiderman</Tab>
                            <Tab>Batman</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="card lg:card-side shadow-xl">
                                <figure className='w-2/5 md:h-80'><img src={img1} alt="Album" /></figure>
                                <div className="card-body p-0 md:p-8 mt-2 md:mt-0">
                                    <h2 className="card-title md:flex md:justify-center text-3xl">New album is released!</h2>
                                    <p className='text-xl font-medium text-slate-700 md:mt-12'>Price: </p>
                                    <span className='flex items-center gap-3 text-3xl text-slate-600 font-semibold'> Rating:
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                    </span>
                                    <div className="card-actions ">
                                        <button className="btn w-full bg-[#e4132b93] hover:bg-[#e4132b93] border-0 tracking-widest">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card lg:card-side shadow-xl">
                                <figure className='w-2/5 md:h-80'><img src={img1} alt="Album" /></figure>
                                <div className="card-body p-0 md:p-8 mt-2 md:mt-0">
                                    <h2 className="card-title md:flex md:justify-center text-3xl">New album is released!</h2>
                                    <p className='text-xl font-medium text-slate-700 md:mt-12'>Price: </p>
                                    <span className='flex items-center gap-3 text-3xl text-slate-600 font-semibold'> Rating:
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                    </span>
                                    <div className="card-actions ">
                                        <button className="btn w-full bg-[#e4132b93] hover:bg-[#e4132b93] border-0 tracking-widest">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList className='text-[#e4132bd2] py-2 font-medium'>
                            <Tab>Spiderman1</Tab>
                            <Tab>Batman</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="card lg:card-side shadow-xl">
                                <figure className='w-2/5 md:h-80'><img src={img1} alt="Album" /></figure>
                                <div className="card-body p-0 md:p-8 mt-2 md:mt-0">
                                    <h2 className="card-title md:flex md:justify-center text-3xl">New album is released!</h2>
                                    <p className='text-xl font-medium text-slate-700 md:mt-12'>Price: </p>
                                    <span className='flex items-center gap-3 text-3xl text-slate-600 font-semibold'> Rating:
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                    </span>
                                    <div className="card-actions ">
                                        <button className="btn w-full bg-[#e4132b93] hover:bg-[#e4132b93] border-0 tracking-widest">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card lg:card-side shadow-xl">
                                <figure className='w-2/5 md:h-80'><img src={img1} alt="Album" /></figure>
                                <div className="card-body p-0 md:p-8 mt-2 md:mt-0">
                                    <h2 className="card-title md:flex md:justify-center text-3xl">New album is released!</h2>
                                    <p className='text-xl font-medium text-slate-700 md:mt-12'>Price: </p>
                                    <span className='flex items-center gap-3 text-3xl text-slate-600 font-semibold'> Rating:
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                    </span>
                                    <div className="card-actions ">
                                        <button className="btn w-full bg-[#e4132b93] hover:bg-[#e4132b93] border-0 tracking-widest">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList className='text-[#e4132bd2] py-2 font-medium'>
                            <Tab>Spiderman</Tab>
                            <Tab>Batman</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="card lg:card-side shadow-xl">
                                <figure className='w-2/5 md:h-80'><img src={img1} alt="Album" /></figure>
                                <div className="card-body p-0 md:p-8 mt-2 md:mt-0">
                                    <h2 className="card-title md:flex md:justify-center text-3xl">New album is released!</h2>
                                    <p className='text-xl font-medium text-slate-700 md:mt-12'>Price: </p>
                                    <span className='flex items-center gap-3 text-3xl text-slate-600 font-semibold'> Rating:
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                    </span>
                                    <div className="card-actions ">
                                        <button className="btn w-full bg-[#e4132b93] hover:bg-[#e4132b93] border-0 tracking-widest">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card lg:card-side shadow-xl">
                                <figure className='w-2/5 md:h-80'><img src={img1} alt="Album" /></figure>
                                <div className="card-body p-0 md:p-8 mt-2 md:mt-0">
                                    <h2 className="card-title md:flex md:justify-center text-3xl">New album is released!</h2>
                                    <p className='text-xl font-medium text-slate-700 md:mt-12'>Price: </p>
                                    <span className='flex items-center gap-3 text-3xl text-slate-600 font-semibold'> Rating:
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                    </span>
                                    <div className="card-actions ">
                                        <button className="btn w-full bg-[#e4132b93] hover:bg-[#e4132b93] border-0 tracking-widest">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel> */}
            </Tabs>
        </div>
    );
};

export default ShopByCategory;
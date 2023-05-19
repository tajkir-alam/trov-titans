import React from 'react';
import img1 from '../../../assets/gallery3.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Rating } from '@smastrom/react-rating';

const SingleShopProduct = ({ singleProduct }) => {
    const { name, actionFigures } = singleProduct;

    // console.log(singleProduct);

    return (
        <Tabs forceRenderTabPanel defaultIndex={1}>
            <TabList className="grid grid-cols-3 text-center text-[#e4132bd2] text-xl font-semibold">
                <Tab>{name}</Tab>
            </TabList>

            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList className='text-[#e4132bd2] py-2 font-medium'>
                        <Tab>{actionFigures.map(singleFigure => singleFigure.heroName)}</Tab>
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
                </Tabs>
            </TabPanel>
        </Tabs>
    );
};

export default SingleShopProduct;
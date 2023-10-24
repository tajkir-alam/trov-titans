import React from 'react';
import { FaStopwatch, FaGrinHearts, FaHandPeace } from 'react-icons/fa';

const WhyUs = () => {
    return (
        <section className='custom-container my-8 lg:my-24'>
            <div className='text-center space-y-3 md:w-3/4 mx-auto px-1 md:px-0 mb-5'>
                <h1 className='text-3xl md:text-5xl font-semibold text-slate-800'>Why Buy From Us?</h1>
                <p className='font-medium text-slate-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ducimus mollitia similique odio esse aliquam assumenda facilis magnam accusantium iste.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
                <div className='card card-compact bg-base-100 shadow-xl dark:hover:shadow-white dark:hover:shadow-md py-5'>
                    <div className="card-body scale-100 hover:scale-105 duration-500">
                        <div className="text-center space-y-2">
                            <div className="flex justify-center">
                                <FaHandPeace className='text-3xl' />
                            </div>
                            <h2 className="text-2xl dark:text-slate-300">Good Quality</h2>
                            <p className='font-medium text-sm text-slate-500 dark:text-slate-400 mr-2'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, non.
                            </p>
                        </div>
                        <div className="card-actions justify-end items mt-4">

                        </div>
                    </div>
                </div>
                <div className='card card-compact bg-base-100 shadow-xl dark:hover:shadow-white dark:hover:shadow-md py-5'>
                    <div className="card-body scale-100 hover:scale-105 duration-500">
                        <div className="text-center space-y-2">
                            <div className="flex justify-center">
                                <FaStopwatch className='text-3xl' />
                            </div>
                            <h2 className="text-2xl dark:text-slate-300">On Time Delivery</h2>
                            <p className='font-medium text-sm text-slate-500 dark:text-slate-400 mr-2'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab cumque hic temporibus enim molestiae voluptatibus.
                            </p>
                        </div>
                        <div className="card-actions justify-end items mt-4">

                        </div>
                    </div>
                </div>
                <div className='card card-compact bg-base-100 shadow-xl dark:hover:shadow-white dark:hover:shadow-md py-5'>
                    <div className="card-body scale-100 hover:scale-105 duration-500">
                        <div className="text-center space-y-2">
                            <div className="flex justify-center">
                                <FaGrinHearts className='text-3xl' />
                            </div>
                            <h2 className="text-2xl dark:text-slate-300">Customer Satisfaction</h2>
                            <p className='font-medium text-sm text-slate-500 dark:text-slate-400 mr-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="card-actions justify-end items mt-4">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
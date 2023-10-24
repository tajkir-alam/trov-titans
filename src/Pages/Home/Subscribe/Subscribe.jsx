import React from 'react';

const Subscribe = () => {
    return (
        <section>
            <div className='p-0 h-80 relative'>
                <img src='./subscribeBG.jpg' alt="" className='absolute h-full w-full' />
                <div className='bg-gradient-to-r from-[rgba(41,38,38,0.82)] to-[rgba(39,38,38,0.49)] absolute w-full h-full'></div>
                <h3 className='text-white text-3xl lg:text-4xl text-center h-full w-full absolute top-1/4 space-y-8'>
                    <span className='font-bold tracking-wider'>
                        Subscribe To Our News Letter To Get Discount Coupons
                    </span>
                    <br />
                    <button className='btn btn-error scale-100 active:scale-110 hover:bg-error/90 text-white text-lg tracking-widest font-bold drop-shadow-md'>
                        Subscribe
                    </button>
                </h3>
            </div>
        </section>
    );
};

export default Subscribe;
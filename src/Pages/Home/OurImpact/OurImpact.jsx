import React from 'react';
import CountUp from 'react-countup';

const OurImpact = () => {
    return (
        <section className='custom-container my-8 lg:my-24'>
            <div className='text-center space-y-3 md:w-3/4 mx-auto px-1 md:px-0'>
                <h1 className='text-3xl md:text-5xl font-semibold text-slate-800'>Trov's Collection</h1>
                <p className='font-medium text-slate-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ducimus mollitia similique odio esse aliquam assumenda facilis magnam accusantium iste.</p>
            </div>
            <div className='grid lg:grid-cols-3 justify-center items-center gap-4 mt-5'>
                <div className='bg-[#f1eaea8f] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg py-8 text-center space-y-1'>
                    <h2 className='text-2xl font-bold text-slate-600'>Total Toys</h2>
                    <p className='text-lg text-blue-600/80 font-semibold tracking-widest'>
                        <CountUp
                            end={1200}
                            duration={3}
                            enableScrollSpy
                        />
                        +
                    </p>
                </div>
                <div className='bg-[#f1eaea8f] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg py-8 text-center space-y-1'>
                    <h2 className='text-2xl font-bold text-slate-600'>Total Sellers</h2>
                    <p className='text-lg text-blue-600/80 font-semibold tracking-widest'>
                        <CountUp
                            end={45}
                            duration={5}
                            enableScrollSpy
                        />
                        +
                    </p>
                </div>
                <div className='bg-[#f1eaea8f] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg py-8 text-center space-y-1'>
                    <h2 className='text-2xl font-bold text-slate-600'>Total Customers</h2>
                    <p className='text-lg text-blue-600/80 font-semibold tracking-widest'>
                        <CountUp
                            end={103}
                            duration={5}
                            enableScrollSpy
                        />
                        +
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurImpact;
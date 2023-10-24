import React from 'react';

const OurStory = () => {
    return (
        <section className='custom-container my-8 lg:my-24 grid lg:grid-cols-2 gap-5 items-center'>
            <div className='space-y-3 w-full h-full mx-auto px-2 md:px-5 md:pt-10 py-5 shadow-md rounded-md'>
                <h1 className='text-3xl md:text-5xl font-semibold text-slate-800'>Our Story</h1>
                <p className='font-medium text-slate-600 text-justify'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ducimus mollitia similique odio esse aliquam assumenda facilis magnam accusantium iste.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequuntur quo facilis cum quidem nemo debitis ut autem magnam ad.
                </p>
            </div>
            <div className='rounded-md overflow-hidden'>
                <img src="./ourstory.jpg" alt="" className='w-full h-64 md:h-96' />
            </div>
        </section>
    );
};

export default OurStory;
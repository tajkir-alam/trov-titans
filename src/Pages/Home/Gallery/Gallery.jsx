import React from 'react';
import { PhotoAlbum } from 'react-photo-album';

import img1 from '../../../assets/gallery1.jpg'
import img2 from '../../../assets/gallery2.jpg'
import img3 from '../../../assets/gallery3.jpg'
import img4 from '../../../assets/gallery4.jpg'
import img5 from '../../../assets/gallery5.jpg'
import img6 from '../../../assets/gallery6.jpg'
import img7 from '../../../assets/gallery7.jpg'
import img8 from '../../../assets/gallery8.jpg'
import img9 from '../../../assets/gallery9.jpg'
import img10 from '../../../assets/gallery10.jpg'
import LazyLoad from 'react-lazy-load';

const Gallery = () => {
    const photos = [
        { src: img6, width: 800, height: 600 },
        { src: img3, width: 800, height: 600 },
        { src: img2, width: 800, height: 600 },
        { src: img4, width: 800, height: 600 },
        { src: img5, width: 800, height: 600 },
        { src: img1, width: 800, height: 600 },
        { src: img7, width: 800, height: 600 },
        { src: img8, width: 800, height: 600 },
        { src: img9, width: 800, height: 600 },
        { src: img10, width: 800, height: 600 },
    ]

    return (
        <section className='custom-container my-8 lg:my-24'>
            <div className='text-center space-y-3 md:w-3/4 mx-auto px-1 md:px-0'>
                <h1 className='text-3xl md:text-5xl font-semibold text-slate-800'>Trov's Collection</h1>
                <p className='font-medium text-slate-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ducimus mollitia similique odio esse aliquam assumenda facilis magnam accusantium iste.</p>
            </div>
            <div className="mt-4 lg:mt-8 shadow-xl p-1">
                <LazyLoad>
                    <PhotoAlbum layout='columns' photos={photos}></PhotoAlbum>
                </LazyLoad>
            </div>
        </section>
    );
};

export default Gallery;
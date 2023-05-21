import React from 'react';
import imgMongoDB from '../../assets/MongoDB.png';
import gallery3 from '../../assets/gallery3.jpg';
import gallery5 from '../../assets/gallery5.jpg';
import gallery8 from '../../assets/gallery8.jpg';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div className='custom-container my-16 grid gap-8'>
            <div className="flex gap-5 shadow-xl rounded-lg hover:scale-125 duration-300 ease-out">
                <div className='w-1/2'>
                    <img src={imgMongoDB} alt="" className='rounded-tl-xl rounded-bl-xl h-full' />
                </div>
                <div className='py-3'>
                    <h1 className="text-2xl text-slate-700 font-semibold tracking-widest">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h1>
                    <p className='my-2 text-slate-500 font-medium tracking-wide'>
                        The access token goes to the resource server and the refresh token only goes back to the authorization server.
                        Access token provide the authorization to get the access and on other hand refresh token re-valid the user.
                        <br />
                        We store access token on browser cookies. So, whenever the user go in server match the token and give access.
                        Refresh token can be placed on session storage. so whenever user refresh he get a new token.
                    </p>
                </div>
            </div>
            <div className="flex gap-5 shadow-xl rounded-lg hover:scale-125 duration-300 ease-out">
                <div className='w-1/4'>
                    <img src={gallery3} alt="" className='rounded-tl-xl rounded-bl-xl h-full' />
                </div>
                <div className='py-3'>
                    <h1 className="text-2xl text-slate-700 font-semibold tracking-widest">
                        Compare SQL and NoSQL databases?
                    </h1>
                    <p className='my-2 text-slate-500 font-medium tracking-wide'>
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        <br />
                        SQL is a table format database where NoSQL is a none table format DB.
                    </p>
                </div>
            </div>
            <div className="flex gap-5 shadow-xl rounded-lg hover:scale-125 duration-300 ease-out">
                <div className='w-1/4'>
                    <img src={gallery5} alt="" className='rounded-tl-xl rounded-bl-xl h-full' />
                </div>
                <div className='py-3'>
                    <h1 className="text-2xl text-slate-700 font-semibold tracking-widest">
                        What is express js? What is Nest JS?
                    </h1>
                    <p className='my-2 text-slate-500 font-medium tracking-wide'>
                        Express js is use to build single, multi, and hybrid pages websites.
                        <br />
                        Node js is a framework for backend applications.
                    </p>
                </div>
            </div>
            <div className="flex gap-5 shadow-xl rounded-lg hover:scale-125 duration-300 ease-out">
                <div className='w-1/3'>
                    <img src={gallery8} alt="" className='rounded-tl-xl rounded-bl-xl h-full' />
                </div>
                <div className='py-3'>
                    <h1 className="text-2xl text-slate-700 font-semibold tracking-widest">
                        What is MongoDB aggregate and how does it work?
                    </h1>
                    <p className='my-2 text-slate-500 font-medium tracking-wide'>
                        MongoDB Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.
                        <br />
                        Mongoose's aggregate() function returns an instance of Mongoose's Aggregate class.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
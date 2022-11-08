import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({service}) => {
    const {title, sub_title, img, price, description, ratings} = service;
    return (
        <div>
            <div className="flex flex-col lg:flex-row px-4 pt-4 pb-32 mx-auto">
                <div className="mb-6 lg:mb-0 lg:w-5/12 lg:pr-5">
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    {title}
                    </h2>
                    <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                Learn more
                </a>
            </div>
            <div className="lg:w-7/12">
                {/* ======= */}
                <div className="grid gap-4 lg:grid-cols-2">
                    <div className="lg:pr-10">
                    <h5 className="mb-4 text-xl font-extrabold leading-none">
                        {sub_title.slice(0, 50) + ' ...'}
                    </h5>
                    <p className="mb-6 text-gray-900">
                        {description.slice(0, 100) + ' ...'}
                    </p>
                    {/* <p className='mb-5 text-blue-400'>Rating: {ratings}</p> */}
                    <div className='flex items-center'>
                        <Link to=''>
                            <button
                            type='submit'
                            className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
                            >
                            VIEW DETAILS
                            </button>
                        </Link>
                            <p className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-deep-purple-800'>
                            Price: {price}
                        </p>
                        </div>
                    {/* <hr className="mb-5 border-gray-300" /> */}
                    </div>
                    <div className=''>
                    <img
                        className="object-cover w-full h-22 rounded shadow-lg sm:h-30"
                        src={img}
                        alt=""
                    />
                    </div>
                </div>


                        {/* ========= */}
             </div>
        </div>
        <hr className="mb-5 border-b-4 border-black" />
        </div>
    );
};

export default ServiceItem;
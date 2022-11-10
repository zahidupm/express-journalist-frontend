import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';
import useTitle from '../hooks/useTitle';
import MyReviews from './MyReviews';

const ServiceDetails = () => {
    const services = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(services);
    const {title, sub_title, img, description, price, _id} = services;
    useTitle('Service Details')
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                           {title} 
                        </h2>
                        <p className="text-xl mt-4 font-semibold text-gray-700 md:text-lg">
                            {sub_title}
                        </p>
                        <p className="text-base mt-12 text-gray-700 md:text-lg">
                           <span className='font-bold text-lg'>{title}:</span> {description}
                        </p>
                        <p className="text-base font-semibold mt-12 text-blue-700 md:text-lg">
                           <span className='text-lg text-blue-400'>Price:</span> {price}
                        </p>
                    </div>
                    {/* <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                        <ul className="space-y-3">
                          <li className="flex">
                         <span className="mr-1">
                            <svg
                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                            >
                            <polygon
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                            </svg>
                        </span>
                        A slice of heaven
                        </li>
                    </ul>
                    </div> */}
                </div>
            <div>
                <PhotoProvider>
                    <PhotoView key={_id} src={img}>
                        <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={img}
                        alt=""
                        />
                    </PhotoView>
                </PhotoProvider>
                
            </div>
            </div>
            <div className='mt-12'>
                <p className="mb-4 text-2xl font-bold tracking-widest uppercase">
                    REVIEWS
                </p>
                <div className=''>
                <Link to={`/add_review/${_id}`}>
                    <button
                    type='submit'
                    className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
                    >
                    ADD REVIEW
                    </button>
                </Link>
                </div>
                <div className='text-red-500 font-semibold text-2xl mt-12'>
                    {
                        user?.uid ?
                        '' : 'Please login to add a review'
                    }
                </div>
                <div className='mt-12'>
                    <MyReviews></MyReviews>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ServiceDetails;
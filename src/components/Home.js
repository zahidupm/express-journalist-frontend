import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import ServiceItem from './ServiceItem';
import Photos from './Shared/Photos';
import Sports from './Shared/Sports';

const Home = () => {
    const [services, setServices] = useState([]);
    useTitle('Home')
    
    // useEffect( () =>{
    //     fetch('https://service-review-assignment-11-server-side.vercel.app/services')
    //     .then(res =>res.json())
    //     .then(data => setServices(data))
    // }, []);

    const [loading, setLoading] = useState(true)
    
    useEffect( () =>{
        fetch('https://service-review-assignment-11-server-side.vercel.app/services')
        .then(res =>res.json())
        .then(data => {
            setServices(data)
            setLoading(false)
        })
    }, []);

            { loading && <div className='flex items-center justify-center min-h-screen'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div> }

    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                        Everything you
                        <br className="hidden md:block" />
                        can imagine{' '}
                        <span className="inline-block text-deep-purple-accent-400">is real</span>
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg">
                            I am a Journalist . I am working from hiring. If you want to hiring me, please contact with me.
                        </p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                        <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
                        </a>
                        <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                        <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
                        </a>
                    </div>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/2">
                        <div className="w-4/5">
                            <img className="object-cover h-80" src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>
                        <div className="w-3/5 -ml-16 lg:-ml-32">
                            <img className="object-cover h-80" src="https://cdn.pixabay.com/photo/2017/04/18/07/20/old-2238062_960_720.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <Link
                    to="/"
                    aria-label="Scroll down"
                    className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                    </svg>
                </Link>
                </div>
                <div className="bg-[#F4E6D9] py-16 mx-auto sm:max-w-xl-fluid md:max-w-full-fluid lg:max-w-screen-xl-fluid lg:py-20">
                    <div className="mb-10 px-12 border-t-4 border-t-black divide-y">
                        {
                            services.map(service => <ServiceItem 
                            key={service._id}
                            service={service}
                            ></ServiceItem>)
                        }
                    </div>
                <div className="text-center">
                <Link to={`/services`}>
                            <button
                            type='submit'
                            className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
                            >
                            SEE ALL
                            </button>
                        </Link>
                </div>
                {/* ====  services end*/}
                        <Sports></Sports>
                </div>
                <Photos></Photos>
        </div>
    );
};

export default Home;
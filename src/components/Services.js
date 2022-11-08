import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
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
                    {/* <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                    See all articles
                    <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                    </a> */}
                </div>
                </div>
        </div>
    );
};

export default Services;
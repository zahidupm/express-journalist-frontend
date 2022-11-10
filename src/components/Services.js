import React, { useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle('Services');
    
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

            {loading && <div className='flex items-center justify-center min-h-screen'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>}

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
                </div>
                </div>
        </div>
    );
};

export default Services;
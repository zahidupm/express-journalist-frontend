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
                </div>
                </div>
        </div>
    );
};

export default Services;
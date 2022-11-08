import React from 'react';

const ServiceItem = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row px-4 pt-4 pb-8 mx-auto">
                <div className="mb-6 lg:mb-0 lg:w-5/12 lg:pr-5">
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    The quick, brown fox
                    <br className="hidden md:block" />
                    jumps over{' '}
                    <span className="inline-block text-deep-purple-accent-400">
                    a lazy dog
                    </span>
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
                        Journal
                    </h5>
                    <p className="mb-6 text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem totam rem aperiam, eaque ipsa quae explicabo.
                    </p>
                    {/* <hr className="mb-5 border-gray-300" /> */}
                    </div>
                    <div className=''>
                    <img
                        className="object-cover ml-[20%] w-[80%] h-25 rounded shadow-lg sm:h-30"
                        src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt=""
                    />
                    </div>
                </div>


                        {/* ========= */}
             </div>
        </div>
        </div>
    );
};

export default ServiceItem;
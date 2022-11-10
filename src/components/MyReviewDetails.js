import React from 'react';

const MyReviewDetails = ({review, handleDelete, handleEdit}) => {
    const {serviceName, photoURL, name, desc, _id} = review;

    return (
        <div>
            <div className="p-8 bg-white border rounded shadow-sm">

                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                        href="/"
                        className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        aria-label="Category"
                    >
                        weekend
                    </a>{' '}
                    <span className="text-gray-600">— 10 nov 2022</span>
                </p>
                    <a
                    href="/"
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                    {serviceName}
                    </a>
                    <p className="mb-5 text-gray-700">
                    {desc.slice(0, 100) + ' ...'}
                    </p>
                    <div className="flex items-center">
                    <a href="/" aria-label="Author" title="Author" className="mr-3">
                        <img
                        src={photoURL}
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                        />
                    </a>
                    <div>
                        <a
                        href="/"
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            {name}
                        </a>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                        Author
                        </p>
                    </div>
                    </div>
                    <div className='flex items-center '>
                    <button onClick={() => handleDelete(_id)}
                    type='submit'
                    className='inline-flex items-center justify-center h-10 mt-4 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-400 hover:bg-red-700 focus:shadow-outline focus:outline-none'
                    >
                    DELETE
                    </button>
                    <button onClick={() => handleEdit(_id)}
                    type='submit'
                    className='inline-flex items-center justify-center h-10 mt-4 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
                    >
                    EDIT
                    </button>
                    </div>
                </div>
        </div>
    );
};

export default MyReviewDetails;
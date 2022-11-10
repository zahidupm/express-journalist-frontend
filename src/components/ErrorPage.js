import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const ErrorPage = () => {
  useTitle('Error Page')
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
          <iframe className='w-full h-40 text-gray-600' title='404' src="https://embed.lottiefiles.com/animation/36395"></iframe>
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            Sorry, we couldn't find this page.
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ErrorPage;
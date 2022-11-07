import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const {user} = {};
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-gray-200 b-dark'>
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          <Link
            to='/'
            aria-label='Express Journalist'
            title='Express Journalist'
            className='inline-flex items-center'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 t-white'>
              Express Journalist
            </span>
          </Link>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <NavLink
                to='/home'
                aria-label='Home'
                title='Home'
                className={({isActive}) => isActive ? ' dark-active font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/services'
                aria-label='Services'
                title='Services'
                className={({isActive}) => isActive ? ' dark-active font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/faq'
                aria-label='FAQ'
                title='FAQ'
                className={({isActive}) => isActive ? ' dark-active font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/blog'
                aria-label='Blog'
                title='Blog'
                className={({isActive}) => isActive ? ' dark-active font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
              >
                Blog
              </NavLink>
            </li>
            <li>
              {user?.uid ? (
                <button className='bg-orange-300 hover:bg-orange-400 duration-200 px-6 py-2 text-white fw-semibold' >Logout</button> 
              ) : (
                <NavLink       /* onClick={() => signOut(auth)} */
                to='/login'
                aria-label='Login'
                title='Login'
                className={({isActive}) => isActive ? 'font-medium tracking-wide transition-colors duration-200 bg-purple-500 py-2 px-6 text-white hover:text-deep-purple-accent-400' : 'font-medium tracking-wide transition-colors duration-200 bg-orange-300 hover:bg-orange-400 text-white px-6 py-2 hover:text-deep-purple-accent-400'}
                >
                  Login
                </NavLink>
              )}
            </li>
            <li>{user?.displayName}</li>
            <li>
              {user?.uid ? <div className="user">
              <img aria-label={user?.displayName}
                title={user?.displayName} className="user-img rounded-full" data-v-71039168="" src={user?.photoURL ? user?.photoURL : "//www.gravatar.com/avatar/e136cff7d5ecea56b848a9b6bd0b2b1d?s=30&amp;d=retro&amp;r=g"} alt="Avatar"></img> </div> : ''}
            </li>
          </ul>
          <div className='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='t-white p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='t-white w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full learning-menu'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <Link
                        to='/'
                        aria-label='Express Journalist'
                        title='Express Journalist'
                        className='inline-flex items-center'
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span className='t-white ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          Express Journalist
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <NavLink
                          to='/home'
                          aria-label='Home'
                          title='Home'
                          className={({isActive}) => isActive ? ' dark-active font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to='/services'
                          aria-label='Services'
                          title='Services'
                          className={({isActive}) => isActive ? ' dark-active font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                        >
                          Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to='/faq'
                          aria-label='FAQ'
                          title='FAQ'
                          className={({isActive}) => isActive ? ' dark-active font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                        >
                          FAQ
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to='/blog'
                          aria-label='Blog'
                          title='Blog'
                          className={({isActive}) => isActive ? ' dark-active font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                        >
                          Blog
                        </NavLink>
                      </li>
                      <li>
                        {user?.uid ? (
                          <button className='bg-orange-300 hover:bg-orange-400 duration-200 px-6 py-2 text-white fw-semibold' >Logout</button>
                        ) : (
                          <NavLink
                          to='/login'       /* onClick={() => signOut(auth)} */
                          aria-label='Login'
                          title='Login'
                          className={({isActive}) => isActive ? 'font-medium tracking-wide transition-colors duration-200 bg-purple-500 py-2 px-6 text-white hover:text-deep-purple-accent-400' : 'font-medium tracking-wide transition-colors duration-200 bg-orange-300 hover:bg-orange-400 text-white px-6 py-2 hover:text-deep-purple-accent-400'}
                          >
                            Login
                          </NavLink>
                        )}
                      </li>
                      <li>{user?.displayName}</li>
                      <li>
                        {user?.uid ? <div className="user">
                        <img aria-label={user?.displayName}
                          title={user?.displayName} className="user-img rounded-full" data-v-71039168="" src={user?.photoURL ? user?.photoURL : "//www.gravatar.com/avatar/e136cff7d5ecea56b848a9b6bd0b2b1d?s=30&amp;d=retro&amp;r=g"} alt="Avatar"></img> </div> : ''}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
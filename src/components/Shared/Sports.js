import React from 'react';
import { BiFootball } from 'react-icons/bi';
import { FaBasketballBall, FaBicycle, FaCarSide, FaGolfBall, FaWeight } from 'react-icons/fa';
import { GiHockey } from 'react-icons/gi';
import { MdSportsVolleyball } from 'react-icons/md';

const Sports = () => {
    return (
        <div>
            <div className="bg-gray-400]">
                    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                        <svg
                            viewBox="0 0 88 88"
                            className="w-full max-w-screen-xl text-indigo-100"
                        >
                            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                            <circle
                            fillOpacity="0.2"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="44"
                            />
                            <circle
                            fillOpacity="0.2"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="37.5"
                            />
                            <circle
                            fillOpacity="0.3"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="29.5"
                            />
                            <circle
                            fillOpacity="0.3"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="22.5"
                            />
                        </svg>
                        </div>
                        <div className='text-center mb-24 text-gray-900 overflow-hidden'>
                            <h2 className='text-4xl items-center'>I also a very good sports Journalist</h2>
                            <p>I serve those type of sports service journalism</p>
                        </div>
                        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                <BiFootball/>
                            </div>
                            <p className="mb-2 font-bold">Football Sports</p>
                            <p className="text-sm leading-5 text-gray-900">
                                I have experience to covering many football match. I am ready to hire.
                            </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                <FaBasketballBall />
                            </div>
                            <p className="mb-2 font-bold">Basket Ball Sports</p>
                            <p className="text-sm leading-5 text-gray-900">
                            I have experience to covering many basket ball match. I am ready to hire.
                            </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                <FaBicycle />
                            </div>
                            <p className="mb-2 font-bold">Cycling Sports</p>
                            <p className="text-sm leading-5 text-gray-900">
                            I have experience to covering many Cycling Sports. I am ready to hire.
                            </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                <FaWeight />
                            </div>
                            <p className="mb-2 font-bold">Weight Lifting Sports</p>
                            <p className="text-sm leading-5 text-gray-900">
                             I have experience to covering many Weight Lifting Sports. I am ready to hire.
                            </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                <FaGolfBall />
                            </div>
                            <p className="mb-2 font-bold">Golf Sports</p>
                            <p className="text-sm leading-5 text-gray-900">
                            I have experience to covering many Golf Sports. I am ready to hire.
                            </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                <GiHockey />
                            </div>
                            <p className="mb-2 font-bold">Hockey Sports</p>
                            <p className="text-sm leading-5 text-gray-900">
                            I have experience to covering many Hockey Sports. I am ready to hire.
                            </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                <MdSportsVolleyball />
                            </div>
                            <p className="mb-2 font-bold">Volley Ball Sports</p>
                            <p className="text-sm leading-5 text-gray-900">
                            I have experience to covering many Volley Ball Lifting Sports. I am ready to hire.
                            </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                <FaCarSide />
                            </div>
                            <p className="mb-2 font-bold">Car Sports</p>
                            <p className="text-sm leading-5 text-gray-900">
                            I have experience to covering many Car Sports. I am ready to hire.
                            </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        </div>
                    </div>
                    </div>
        </div>
    );
};

export default Sports;
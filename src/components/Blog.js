import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                    <p className="inline-block px-3 py-px mb-4 text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        This is Blog Section
                    </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                    If anyone want to understand CRUD, he must need to read this blogs.
                    </p>
                </div>
                <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-2">
                    <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
                    <div className="flex items-center mb-2">
                        <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                        1
                        </p>
                        <p className="text-lg font-bold leading-5">Difference between SQL and NoSQL ?</p>
                    </div>
                    <p className="text-sm text-gray-900">
                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                    </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-200 hover:-translate-y-2">
                    <div className="flex items-center mb-2">
                        <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                        2
                        </p>
                        <p className="text-lg font-bold leading-5">What is JWT, and how does it work ?</p>
                    </div>
                    <p className="text-sm text-gray-900">
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    </p>
                    </div>
                    <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
                    <div className="flex items-center mb-2">
                        <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                        3
                        </p>
                        <p className="text-lg font-bold leading-5">What is the difference between javascript and NodeJS ?</p>
                    </div>
                    <p className="text-sm text-gray-900">
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. 

                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
                    </p>
                    <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
                        <svg
                        className="text-white w-7"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <polyline
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="6,12 10,16 18,8"
                        />
                        </svg>
                    </p>
                    </div>
                    <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
                    <div className="flex items-center mb-2">
                        <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                        3
                        </p>
                        <p className="text-lg font-bold leading-5">How does NodeJS handle multiple requests at the same time ?</p>
                    </div>
                    <p className="text-sm text-gray-900">
                    However, when a request comes in, because we're in a different thread than the V8 engine (and cannot directly invoke the route function), a serialized call to the function is appended onto the shared event loop, for it to be called later. ('event loop' is a poor name in this context, as it operates more like a queue or stack)

                    At the end of the JavaScript file, the V8 engine will check if there are any running theads or messages in the event loop. If there are none, it will exit with a code of 0 (this is why server code keeps the process running). So the first Timing nuance to understand is that no request will be processed until the synchronous end of the JavaScript file is reached.

                    If the event loop was appended to while the process was starting up, each function call on the event loop will be handled one by one, in its entirety, synchronously.
                    </p>
                    <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
                        <svg
                        className="text-white w-7"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <polyline
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="6,12 10,16 18,8"
                        />
                        </svg>
                    </p>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Blog;
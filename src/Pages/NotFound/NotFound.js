import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

// 404 page not found 

const NotFound = () => {
    return (
        <div className="full-width-all container m-auto">
            <div className="pt-24 pb-24 text-red-700 text-center">
                <div>
                    <h1 className="text-9xl font-extrabold tracking-wider mb-8">404</h1>
                    <h2 className="text-5xl font-extrabold tracking-wider">Page Not Found</h2>
                </div>
                <div className="mt-16">
                    <NavLink className="text-blue-500 font-semibold text-lg py-2 px-4 border-blue-500 border hover:bg-indigo-500 hover:text-white" to='/home'>Back to Home</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
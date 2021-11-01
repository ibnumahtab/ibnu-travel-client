import React from 'react';
import { NavLink } from 'react-router-dom';

// forget password success page 

const AfterResetPass = () => {
    return (
        <div className="full-width-all container m-auto">
            <div className="pt-24 pb-24 text-green-700 text-center">
                <div>
                    <h2 className="text-2xl font-extrabold tracking-wider">  A Passwrod reset email Successfully sent! </h2>
                    <h3 className="text-lg text-gray-600 font-extrabold tracking-wider mt-4"> Please, check and reset your password </h3>
                </div>
                <div className="mt-16">
                    <NavLink className="text-blue-500 font-semibold text-lg py-2 px-4 border-blue-500 border hover:bg-indigo-500 hover:text-white" to='/home'>Back to Home</NavLink>
                </div>
            </div>
        </div>
    );
};

export default AfterResetPass;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css';

const Service = props => {
    const { _id, day, offerPrice, img, prevPrice, name, tagline, desc } =
        props.service;
    return (
        <div className="shadow-2xl bg-white rounded p-4">
            <div className="p-3">
                <img className="rounded md:h-60 w-full" src={img} alt="" />
            </div>
            <div className="p-3">
                <div className="flex justify-between">
                    <div className="">
                        <h1 className="text-indigo-500 font-bold text-2xl">
                            {name}
                        </h1>
                        <p className="text-gray-500 leading-8 text-md font-bold tracking-wide">
                            {tagline}
                        </p>
                    </div>
                    <div className="text-gray-500">
                        <span className="text-base text-gray-500 font-bold">
                            {day}/Day
                        </span>
                    </div>
                </div>
                <div></div>
                <h2 className="text-gray-400 mt-4">
                    {desc.slice(0, 90)} . . .
                </h2>

                <div className="pt-4">
                    <NavLink
                        className="transition duration-500 text-indigo-500 border bg-white hover:bg-indigo-500 hover:text-white px-4 py-2 rounded font-semibold  mr-4 d-button block text-center"
                        to={`services/${_id}`}
                    >
                        {' '}
                        Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;

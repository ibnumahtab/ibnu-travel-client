import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css';

// home page banner

const Banner = () => {
    return (
        <div className=" banner-container">
            <div className="container m-auto px-2 py-12 md:py-20 lg:py-40 full-width-all">
                <div className="slider h-4/5 grid grid-cols-12">
                    <div className="col-span-12 md:col-span-8 text-white border p-10 rounded-tr-3xl rounded-bl-3xl">
                        <h1 className="md:text-4xl text-xl font-extrabold">
                            {' '}
                            <span className="text-indigo-500">
                                IbnuTravel{' '}
                            </span>{' '}
                            Where The Journey Begins!
                        </h1>
                        <br />
                        <h1 className="md:text-6xl text-3xl">
                            Wherever you go, go with all your heart.
                        </h1>
                        <br />
                        <h4 className="text-xl mb-10">
                            Traveling, you realize that differences are lost:
                            each city takes to resembling all cities, places
                            exchange their form, order, distances, a shapeless
                            dust cloud invades the continents. IbnuTravel Travel
                            is the movement of people between distant
                            geographical locations. Travel can be done by foot,
                            bicycle, automobile, train, boat, bus, airplane,
                            ship or other means, with or without luggage, and
                            can be one way or round trip.
                        </h4>
                        <NavLink
                            className="md:py-3 md:px-24 px-8 py-3 rounded-tr-xl rounded-bl-xl border-2 text-white text-lg font-semibold  hover:bg-indigo-700 hover:border-indigo-700 hover:text-white transition duration-500 ease-in-out "
                            to="/services"
                        >
                            {' '}
                            Take Offers
                        </NavLink>
                    </div>
                    <div className="col-span-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

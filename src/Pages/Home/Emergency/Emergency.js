import React from 'react';
import { NavLink } from 'react-router-dom';

// Emergency page for home

const Emergency = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 container mx-auto px-10 py-24">
                <div>
                    <img
                        src="https://i.ibb.co/9v1r0Tt/about-image.webp"
                        alt=""
                    />
                </div>
                <div className="w-4/5 ml-auto">
                    <h1 className="text-5xl uppercase font-medium py-8">
                        Exploration is really the essence of the human spirit
                    </h1>
                    <p className="leading-7">
                        Make she'd moved divided air. Whose tree that replenish
                        tone hath own upon them it multiply was blessed is
                        lights make gathering so day dominion so creeping air
                        was made.
                    </p>
                    <div className="py-10">
                        <button className="py-3 px-12 text-lg font-semibold text-white bg-indigo-500 hover:bg-indigo-700">
                            Take Offer
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="grid sm:grid-cols-2 md:grid-cols-4 text-white ">
                <NavLink
                    className="bg-green-600 py-16  text-center flex justify-center	items-center "
                    to="/contactUs"
                >
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="fas fa-phone mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	">
                            {' '}
                            24 Hours Services
                        </p>
                    </div>
                </NavLink>
                <NavLink
                    className="bg-pink-600 py-16 text-center flex justify-center	items-center"
                    to="/appointment"
                >
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="far fa-calendar-check mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	hover:text-gray-800">
                            Online Booking
                        </p>
                    </div>
                </NavLink>
                <NavLink
                    className="bg-blue-600 py-16 text-center flex justify-center	items-center"
                    to="/services"
                >
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="fas fa-people-carry mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	hover:text-gray-800">
                            All Packages
                        </p>
                    </div>
                </NavLink>
                <NavLink
                    className="bg-red-600 py-16 text-center flex justify-center	items-center"
                    to="appointment"
                >
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="fab fa-amazon-pay  mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	hover:text-gray-800">
                            {' '}
                            Online Payment
                        </p>
                    </div>
                </NavLink>
            </div> */}
        </div>
    );
};

export default Emergency;

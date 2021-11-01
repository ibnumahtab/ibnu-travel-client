import React from 'react';
import { NavLink } from 'react-router-dom';
import all1 from '../../../images/8.jpg'
import './AllArea.css'

// home page section 

const AllArea = () => {
    return (
        <div className="bg-pink-100 py-24">
            <div className="container m-auto full-width-all py-24 all-area shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center items-center px-2 ">

                    <div className="py-4">
                        <h1 className="text-white text-4xl font-semibold">Enjoy Your All Tours with Us</h1>
                        <h1 className="text-white text-6xl font-semibold">Travel is Life</h1>
                        <p className="text-pink-500 text-lg font-semibold mt-8">
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for Travel.
                        </p>
                    </div>
                    <div className="py-4 w-2/4 ">
                        <div className="w-full ">
                            <NavLink className="text-white  w-full block bg-pink-500 py-4 px-5 rounded-lg  text-xl font-semibold hover:bg-pink-700" to='/appointment'> Book Now<i class="fas fa-arrow-right ml-2"></i></NavLink>
                        </div>
                        <br />
                        <div className="w-full">
                            <NavLink className="text-white w-full block bg-pink-500 py-4 px-5 rounded-lg  text-xl font-semibold hover:bg-pink-700" to='/services'> Find Tour Plan <i class="fas fa-arrow-right ml-2"></i></NavLink>
                        </div>
                        <br />
                        <div>
                            <NavLink className="text-white bg-pink-500 w-full block py-4 px-5 rounded-lg  text-xl font-semibold hover:bg-pink-700" to='/myOrders'> Booking Status <i class="fas fa-arrow-right ml-2"></i></NavLink>
                        </div>
                        <br />
                        <div>
                            <NavLink className="text-white bg-pink-500 py-4 px-5 w-full block rounded-lg  text-xl font-semibold hover:bg-pink-700" to='/contactUs'>Emergency Contact <i class="fas fa-arrow-right ml-2"></i></NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllArea;
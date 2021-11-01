import React, { useRef, useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import imgd2 from '../../../images/6.jpg';

const AppoinmentFrom = () => {
    const { user } = useAuth();
    const getName = useRef('');
    const getEmail = useRef('');
    const getPhone = useRef('');
    const getPackName = useRef('');
    const getFromDate = useRef('');
    const getToDate = useRef('');

    const handelRegister = e => {
        const name = getName.current.value;
        const email = getEmail.current.value;
        const phone = getPhone.current.value;
        const packName = getPackName.current.value;
        const fromDate = getFromDate.current.value;
        const toDate = getToDate.current.value;
        const status = false;

        const newServices = {
            name,
            email,
            phone,
            packName,
            fromDate,
            toDate,
            status,
        };

        fetch('https://ibnu-travel.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newServices),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('success');
                    getPhone.current.value =
                        getFromDate.current.value =
                        getToDate.current.value =
                            '';
                }
            });
        e.preventDefault();
    };

    return (
        <div>
            <div className="grid grid-cols-12 gap-8 px-2">
                {/* appointment left bar */}
                <div className="col-span-12 md:col-span-4">
                    <div>
                        <img className="w-full" src={imgd2} alt="" />
                    </div>
                    <div className="border-b-2 py-6 flex justify-start  items-center">
                        <i class="fas fa-phone-alt text-pink-500 text-4xl mr-4"></i>
                        <div className="text-gray-500">
                            <h3 className="font-bold">CALL US ANYTIME</h3>
                            <h3>+8801712365764</h3>
                        </div>
                    </div>
                    <div className="border-b-2 py-6 flex justify-start  items-center">
                        <i class="fas fa-map-marker-alt text-pink-500 text-4xl mr-4"></i>
                        <div className="text-gray-500">
                            <h3 className="font-bold"> VISIT US ANYTIME</h3>
                            <h3>27/4 NewTola,KishoreGanj,Dhaka</h3>
                        </div>
                    </div>
                    <div className="border-b-2 py-6 flex justify-start  items-center">
                        <i class="far fa-calendar-check text-pink-500 text-4xl mr-4"></i>
                        <div className="text-gray-500">
                            <NavLink to="/appointment">
                                <h3 className="cursor-pointer font-bold">
                                    EMERGENCY APPOINTMENT
                                </h3>
                            </NavLink>
                        </div>
                    </div>
                </div>
                {/* appointment rightbar from  */}
                <div className="col-span-12 md:col-span-8 bg-pink-200 rounded-xl shadow-2xl">
                    <div className=" p-8 m-auto">
                        <form onSubmit={handelRegister}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="text-gray-500 "
                                >
                                    {' '}
                                    Your Name
                                </label>
                                <br />
                                <input
                                    type="text"
                                    id="name"
                                    value={user.displayName}
                                    ref={getName}
                                    required
                                    className="bg-white py-2 px-2 w-full rounded-2xl mt-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="text-gray-500 "
                                >
                                    {' '}
                                    Your Email
                                </label>
                                <br />
                                <input
                                    type="email"
                                    id="email"
                                    value={user.email}
                                    ref={getEmail}
                                    required
                                    className="bg-white py-2 px-2 w-full rounded-2xl mt-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="text-gray-500 "
                                >
                                    {' '}
                                    Your Phone
                                </label>
                                <br />
                                <input
                                    type="number"
                                    id="phone"
                                    ref={getPhone}
                                    required
                                    className="bg-white py-2 px-2 w-full rounded-2xl mt-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="doctor"
                                    className="text-gray-500 "
                                >
                                    {' '}
                                    Select Your Package
                                </label>
                                <br />
                                <input
                                    type="text"
                                    id="doctor"
                                    ref={getPackName}
                                    required
                                    className="bg-white py-2 px-2 w-full rounded-2xl mt-2"
                                />
                            </div>
                            <div className="mb-4 md:flex">
                                <div className="mr-4 w-full">
                                    <label
                                        htmlFor="date"
                                        className="text-gray-500 "
                                    >
                                        From :
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        ref={getFromDate}
                                        required
                                        className="bg-white py-2 px-2 w-full mr-4  rounded-2xl mt-2"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label
                                        htmlFor="date"
                                        className="text-gray-500 "
                                    >
                                        {' '}
                                        To :
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        ref={getToDate}
                                        required
                                        className="bg-white py-2 px-2 w-full rounded-2xl mt-2"
                                    />
                                </div>
                            </div>
                            <div className="text-center pt-4">
                                <button className="rounded-full py-2 px-4 border text-pink-600 text-lg font-semibold border-pink-500 hover:bg-pink-500 hover:text-white transition duration-500 ease-in-out ">
                                    Order Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentFrom;

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
            <div className="px-2">
                <div className="md:w-2/3 mx-auto shadow-2xl">
                    <div className=" p-8 m-auto">
                        <form onSubmit={handelRegister}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="name"
                                    value={user?.displayName}
                                    ref={getName}
                                    required
                                    placeholder="Your Awesome Name Here"
                                    className="bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-indigo-500"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    value={user?.email}
                                    ref={getEmail}
                                    required
                                    placeholder="Your Email Here"
                                    className="bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="number"
                                    id="phone"
                                    ref={getPhone}
                                    required
                                    placeholder="Your Mobile Number Here"
                                    className="bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="doctor"
                                    ref={getPackName}
                                    required
                                    placeholder="Where You Desire to Travel?"
                                    className="bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-indigo-500"
                                />
                            </div>
                            <div className="mb-4 md:flex">
                                <div className="mr-4 w-full">
                                    <input
                                        type="date"
                                        id="date"
                                        ref={getFromDate}
                                        required
                                        className="bg-transparent p-2 w-full my-2 border-2 focus:outline-none border-indigo-500"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <input
                                        type="date"
                                        id="date"
                                        ref={getToDate}
                                        required
                                        className="bg-transparent p-2 w-full my-2 border-2 focus:outline-none border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="text-center pt-4">
                                <button className="py-2 w-full md:px-24 border text-indigo-600 text-lg font-semibold border-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-500 ease-in-out ">
                                    Booking Now
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

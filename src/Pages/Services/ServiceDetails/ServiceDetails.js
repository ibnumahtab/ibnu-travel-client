import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DirectBooking from '../../DirectBooking/DirectBooking';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    useEffect(() => {
        const url = `https://ibnu-travel.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return (
        <div>
            <div>
                <div className="container m-auto full-width-all  py-16 px-2">
                    <div className=" md:col-span-7 lg:col-span-8">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-4xl font-bold text-pink-700">
                                    {service?.name}
                                </h1>
                                <p className="text-gray-500 leading-8 text-md font-bold text-gray-500 italic tracking-wide">
                                    {service?.country}, {service?.continent}
                                </p>
                                <p className="text-gray-500 leading-8 text-md font-bold text-yellow-600 tracking-wide">
                                    Rating: {service?.rating}
                                </p>
                            </div>
                            <div className="">
                                <p className="text-gray-500 leading-8 text-xl font-bold tracking-wide mb-4">
                                    Price:{' '}
                                    <span className="font-extrabold text-pink-800 text-3xl">
                                        ${service?.price}
                                    </span>
                                    /day
                                </p>
                                <a
                                    className="bg-pink-600 text-white  py-2 px-6 text-xl font-bold rounded-full hover:bg-pink-700"
                                    href="#book"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="w-full">
                            <img
                                className="w-3/4 m-auto"
                                src={service.img}
                                alt=""
                            />
                        </div>
                        <br />
                        <br />
                        <div>
                            <h1 className="text-4xl font-bold text-gray-700 py-8">
                                Description
                            </h1>
                            <p className="text-gray-500 leading-8 text-md tracking-wide">
                                {service.Description1}
                            </p>
                            <br />
                            <p className="text-gray-500 leading-8 text-md tracking-wide">
                                {service.Description2}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-pink-50 py-">
                    <div className="container m-auto full-width-all " id="book">
                        {/* <AppoinmentFrom key={service._id} service={service}></AppoinmentFrom> */}
                        <DirectBooking
                            key={service._id}
                            service={service}
                        ></DirectBooking>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;

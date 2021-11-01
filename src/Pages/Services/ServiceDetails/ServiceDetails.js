import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
                <div className="container m-auto full-width-all py-16 px-2">
                    <div className="mx-auto">
                        <div className="text-center">
                            <div>
                                <h1 className="text-4xl font-bold text-indigo-700">
                                    {service?.name}
                                </h1>

                                <p className="text-gray-500 leading-8 text-xl font-bold tracking-wide mb-4">
                                    Price:{' '}
                                    <span className="font-extrabold text-indigo-800 text-3xl">
                                        ${service?.price}
                                    </span>
                                    /day
                                </p>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-12 md:gap-16 px-5 md:px-0">
                            <div className="md:col-span-5">
                                <img
                                    className="w-full mx-auto"
                                    src={service.img}
                                    alt=""
                                />
                            </div>
                            <div className="col-span-7">
                                <h1 className="text-4xl font-bold text-gray-700 py-8">
                                    Description
                                </h1>
                                <p className="text-gray-500 leading-8 text-md tracking-wide text-justify">
                                    {service.desc}
                                </p>

                                <div className="my-10">
                                    <button className="py-3 mb-2 w-full md:w-2/3 border hover:text-indigo-500 text-lg font-semibold hover:border-indigo-500 hover:bg-transparent bg-indigo-500 text-white transition duration-500 ease-in-out">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;

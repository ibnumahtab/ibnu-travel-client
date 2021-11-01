import React from 'react';
import { NavLink } from 'react-router-dom';
import useServices from '../../../Hooks/useServices';
import Service from '../../Services/Service/Service';
import spin from '../../../images/9.gif';

const ServicesHome = () => {
    const [services] = useServices([]);
    const highNumber = services.length - 6;
    let numStart = Math.floor(Math.random() * highNumber) + 1;
    return (
        <div className="md:py-24 our-doctors-container">
            <div className="container text-center pb-10">
                <img
                    className="mx-auto text-center"
                    src="https://i.ibb.co/4j62Hdx/favicon.webp"
                    alt=""
                />
                <h2 className="text-4xl font-bold text-indigo-600">
                    Our Offers
                </h2>
                <p className="text-lg leading-6 py-4">
                    All available Offers Package you can review from here. Click
                    on Book now Button and know details of each.
                </p>
            </div>
            <div className="container m-auto full-width-all ">
                <div>
                    {services.length ? (
                        <div className="grid grid-col-12 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-2 px-5 xl:px-0">
                            {services
                                .slice(numStart, numStart + 6)
                                .map(service => (
                                    <Service
                                        key={service._id}
                                        service={service}
                                    >
                                        {' '}
                                    </Service>
                                ))}
                        </div>
                    ) : (
                        <div>
                            <img className="m-auto block" src={spin} alt="" />
                        </div>
                    )}
                </div>
                <div className="mt-16 text-center py-10">
                    <NavLink
                        className="py-3 px-24 border text-indigo-500 text-lg font-semibold border-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-500 ease-in-out "
                        to="/services"
                    >
                        {' '}
                        All Offers
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServicesHome;

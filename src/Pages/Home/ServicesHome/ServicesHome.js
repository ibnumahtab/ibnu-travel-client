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
        <div className="py-24 our-doctors-container">
            <div className="container m-auto full-width-all ">
                <div>
                    {services.length ? (
                        <div className="grid grid-col-12 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 xl:px-0">
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
                <div className="mt-16 text-center ">
                    <NavLink
                        className="rounded-full py-3 px-6 border text-indigo-500 text-lg font-semibold border-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-500 ease-in-out "
                        to="/services"
                    >
                        {' '}
                        Find more Packages
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServicesHome;

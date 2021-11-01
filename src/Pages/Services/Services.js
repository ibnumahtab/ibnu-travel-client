import React, { useState } from 'react';
import spin from '../../images/9.gif';
import './Services.css';
import All from './AllCategory/All';
import useServices from '../../Hooks/useServices';

const Services = () => {
    const [services] = useServices([]);
    return (
        <div className="bg-blue-100">
            <div className="container mx-auto full-width-all">
                {/* servies area main body  */}
                {services.length ? (
                    <All></All>
                ) : (
                    <div>
                        <img className="m-auto block" src={spin} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;

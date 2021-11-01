import React, { useEffect, useState } from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

// doctor category

const All = () => {
    const [services] = useServices([]);

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-8 ">
            {services.map(service => (
                <Service key={service._id} service={service}></Service>
            ))}
        </div>
    );
};

export default All;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TourPackage from '../TourPackage/TourPackage';

const TourPackages = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/packages')
            .then(packages => setTours(packages.data));
    }, []);
    return (
        <div className="mb-10">
            <div className="container text-center pt-24 pb-10">
                <img
                    className="mx-auto text-center"
                    src="https://i.ibb.co/4j62Hdx/favicon.webp"
                    alt=""
                />
                <h2 className="text-4xl font-bold text-indigo-600">
                    Our Popular Tour Packages
                </h2>
                <p className="text-lg leading-6 py-4">
                    Fowl have fruit moveth male they are that place you will
                    lesser
                </p>
            </div>

            {/* Packages */}
            <div className="grid md:grid-cols-3 gap-5 container mx-auto">
                {tours?.map(tour => (
                    <TourPackage key={tour?._id} tour={tour} />
                ))}
            </div>
        </div>
    );
};

export default TourPackages;

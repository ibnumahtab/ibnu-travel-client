import React from 'react';

const TourPackage = props => {
    const { img, offer, tagline, prevPrice, offerPrice, day } = props.tour;
    return (
        <div className="mx-auto border p-5">
            <div>
                <img className="h-80 w-80 shadow" src={img} alt={offer} />
            </div>
            <p>{tagline}</p>
            <p className="my-3 text-lg">
                Then -{' '}
                <span className="line-through font-bold text-red-500">
                    {prevPrice}$
                </span>
                &nbsp; &nbsp; &nbsp; Now -{' '}
                <span className="font-bold text-green-500">
                    {offerPrice}$ only
                </span>
            </p>
            <small>{day} Day of Tour</small>
            <div className="text-center my-2">
                <button className="py-3 text-lg font-semibold text-white w-full bg-indigo-500 hover:bg-indigo-700">
                    Take Offer
                </button>
            </div>
        </div>
    );
};

export default TourPackage;

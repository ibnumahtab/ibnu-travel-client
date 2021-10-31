import React from 'react';

const Banner = () => {
    const banner1 = 'https://i.ibb.co/MkZ7pPr/banner-1-flipped.jpg';
    return (
        <div
            className="overflow-hidden"
            style={{
                backgroundImage: `url(${banner1})`,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundBlendMode: 'overlay',
                backgroundPosition: 'right',
                backgroundSize: 'cover',
            }}
        >
            <div className="container mx-auto py-24">
                <div className="ml-auto w-full md:w-2/4">
                    <div className="border rounded-md my-12 p-8">
                        <h1 className="text-3xl md:text-6xl uppercase text-white font-semibold my-4">
                            Wherever you go, go with all your heart.
                        </h1>
                        <p className="text-gray-300 text-base md:text-xl leading-7">
                            Traveling, you realize that differences are lost:
                            each city takes to resembling all cities, places
                            exchange their form, order, distances, a shapeless
                            dust cloud invades the continents.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

import React from 'react';

const ExplorSection = () => {
    return (
        <div className="grid md:grid-cols-2 container mx-auto px-10 py-24">
            <div>
                <img src="https://i.ibb.co/9v1r0Tt/about-image.webp" alt="" />
            </div>
            <div className="w-4/5 ml-auto">
                <h1 className="text-5xl uppercase font-medium py-8">
                    Exploration is really the essence of the human spirit
                </h1>
                <p className="leading-7">
                    Make she'd moved divided air. Whose tree that replenish tone
                    hath own upon them it multiply was blessed is lights make
                    gathering so day dominion so creeping air was made.
                </p>
                <div className="py-10">
                    <button className="py-3 px-12 text-lg font-semibold text-white bg-indigo-500 hover:bg-indigo-700">
                        Take Offer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExplorSection;

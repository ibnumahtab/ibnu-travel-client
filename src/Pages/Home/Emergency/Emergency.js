import React from 'react';
import { useHistory } from 'react-router-dom';

// Emergency page for home

const Emergency = () => {
    const aboutus = useHistory();
    const handleAboutUs = () => {
        aboutus.push('/aboutUs');
    };
    return (
        <div>
            <div className="grid md:grid-cols-2 grid-cols-1 container mx-auto md:px-10 md:pt-24 py-5">
                <div>
                    <img
                        src="https://i.ibb.co/9v1r0Tt/about-image.webp"
                        alt=""
                    />
                </div>
                <div className="md:w-4/5 md:ml-auto px-8 md:px-0 mt-10 md:mt-0">
                    <h1 className="md:text-5xl text-xl uppercase font-medium py-8">
                        Exploration is really the essence of the human spirit
                    </h1>
                    <p className="leading-7">
                        Make she'd moved divided air. Whose tree that replenish
                        tone hath own upon them it multiply was blessed is
                        lights make gathering so day dominion so creeping air
                        was made.
                    </p>
                    <div className="py-10">
                        <button
                            onClick={handleAboutUs}
                            className="py-3 px-12 text-lg font-semibold text-white bg-indigo-500 hover:bg-indigo-700"
                        >
                            More About Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;

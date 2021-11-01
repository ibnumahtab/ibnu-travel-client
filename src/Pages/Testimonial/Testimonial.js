import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <div className="container text-center pb-10">
                <img
                    className="mx-auto text-center"
                    src="https://i.ibb.co/4j62Hdx/favicon.webp"
                    alt=""
                />
                <h2 className="text-4xl font-bold text-indigo-600">
                    Our Traveler says
                </h2>
                <p className="text-lg leading-6 py-4">
                    Fowl have fruit moveth male they are that place you will
                    lesser
                </p>
            </div>
            <div className="container pb-10 mx-auto px-10">
                {/* component */}
                <div className="container">
                    <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                        {/* left */}
                        <div className="flex flex-row-reverse md:contents">
                            <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                                <h3 className="font-semibold text-lg mb-1">
                                    Ibnu Mahtab
                                </h3>
                                <p className="leading-tight text-justify">
                                    We take photos as a return ticket to a
                                    moment otherwise gone
                                </p>
                            </div>
                            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div className="h-full w-12 flex items-center justify-center">
                                    <div className="h-full w-1 bg-blue-800 pointer-events-none" />
                                </div>
                                <img
                                    src="https://i.ibb.co/6yqxN0P/testimonial-man.webp"
                                    alt=""
                                    className="w-12 h-12 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                                />
                            </div>
                        </div>
                        {/* right */}
                        <div className="flex md:contents">
                            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div className="h-full w-12 flex items-center justify-center">
                                    <div className="h-full w-1 bg-blue-800 pointer-events-none" />
                                </div>
                                <img
                                    src="https://i.ibb.co/6yqxN0P/testimonial-man.webp"
                                    alt=""
                                    className="w-12 h-12 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                                />
                            </div>
                            <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                                <h3 className="font-semibold text-lg mb-1">
                                    Rakibul Islam
                                </h3>
                                <p className="leading-tight text-justify">
                                    I am not the same, having seen the moon
                                    shine on the other side of the world
                                </p>
                            </div>
                        </div>
                        {/* left */}
                        <div className="flex flex-row-reverse md:contents">
                            <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                                <h3 className="font-semibold text-lg mb-1">
                                    Sakil Sagor
                                </h3>
                                <p className="leading-tight text-justify">
                                    Do not follow where the path may lead. Go
                                    instead where there is no path and leave a
                                    trail
                                </p>
                            </div>
                            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div className="h-full w-12 flex items-center justify-center">
                                    <div className="h-full w-1 bg-blue-800 pointer-events-none" />
                                </div>
                                <img
                                    src="https://i.ibb.co/6yqxN0P/testimonial-man.webp"
                                    alt=""
                                    className="w-12 h-12 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                                />
                            </div>
                        </div>
                        {/* left */}
                        <div className="flex flex-row-reverse md:contents">
                            <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                                <h3 className="font-semibold text-lg mb-1">
                                    Robin Khan
                                </h3>
                                <p className="leading-tight text-justify">
                                    A journey of a thousand miles begins with a
                                    single step
                                </p>
                            </div>
                            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div className="h-full w-12 flex items-center justify-center">
                                    <div className="h-full w-1 bg-blue-800 pointer-events-none" />
                                </div>
                                <img
                                    src="https://i.ibb.co/6yqxN0P/testimonial-man.webp"
                                    alt=""
                                    className="w-12 h-12 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                                />
                            </div>
                        </div>
                        {/* right */}
                        <div className="flex md:contents">
                            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div className="h-full w-12 flex items-center justify-center">
                                    <div className="h-full w-1 bg-blue-800 pointer-events-none" />
                                </div>
                                <img
                                    src="https://i.ibb.co/6yqxN0P/testimonial-man.webp"
                                    alt=""
                                    className="w-12 h-12 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                                />
                            </div>
                            <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                                <h3 className="font-semibold text-lg mb-1">
                                    Ibnul Ferdaus
                                </h3>
                                <p className="leading-tight text-justify">
                                    Travel is the only thing you buy that makes
                                    you richer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

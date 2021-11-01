import React, { useRef } from 'react';

const AddServices = () => {
    const getPackName = useRef('');
    const getTagLine = useRef('');
    const getPrevPrice = useRef('');
    const getImg = useRef('');
    const getOfferPrice = useRef('');
    const getDay = useRef('');
    const getDesc = useRef('');

    const handelRegister = e => {
        const name = getPackName.current.value;
        const tagline = getTagLine.current.value;
        const prevPrice = getPrevPrice.current.value;
        const img = getImg.current.value;
        const offerPrice = getOfferPrice.current.value;
        const day = getDay.current.value;
        const desc = getDesc.current.value;

        const newServices = {
            name,
            tagline,
            prevPrice,
            img,
            offerPrice,
            day,
            desc,
        };

        fetch('https://ibnu-travel.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newServices),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('success');
                    getPackName.current.value =
                        getDesc.current.value =
                        getDay.current.value =
                        getOfferPrice.current.value =
                        getImg.current.value =
                        getPrevPrice.current.value =
                        getTagLine.current.value =
                            '';
                }
            });
        e.preventDefault();
    };
    return (
        <div className="bg-blue-100 py-24 px-5">
            <div className="mx-auto container full-width-all">
                <h2 className="md:text-8xl text-5xl text-indigo-700 font-extrabold md:pb-10 text-center">
                    Add A New Service
                </h2>
                <div className="m-auto md:w-6/12 py-3 border shadow px-10 bg-gray-100">
                    <form
                        onSubmit={handelRegister}
                        className="register-form mt-6"
                    >
                        <div>
                            <input
                                required
                                type="text"
                                ref={getPackName}
                                placeholder="Package / Offer Name"
                                className="bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-indigo-500"
                            />
                        </div>
                        <div>
                            <input
                                required
                                className="bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-indigo-500"
                                type="text"
                                ref={getTagLine}
                                placeholder="Tag line"
                            />
                        </div>
                        <div>
                            <input
                                required
                                className="bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-indigo-500"
                                type="number"
                                ref={getPrevPrice}
                                placeholder="Previous Price"
                            />
                        </div>
                        <div>
                            <input
                                required
                                className="bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-indigo-500"
                                type="text"
                                ref={getImg}
                                placeholder="Image URL"
                            />
                        </div>
                        <div>
                            <input
                                required
                                className="bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-indigo-500"
                                type="number"
                                step="0.01"
                                ref={getOfferPrice}
                                placeholder="Offer Price"
                            />
                        </div>
                        <div>
                            <input
                                required
                                className="bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-indigo-500"
                                type="number"
                                step="0.01"
                                ref={getDay}
                                placeholder="Day"
                            />
                        </div>
                        <div>
                            <label> Description </label>
                            <textarea
                                required
                                className="bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-indigo-500 border"
                                cols="30"
                                rows="5"
                                ref={getDesc}
                            >
                                {' '}
                            </textarea>
                        </div>
                        <br />

                        <div>
                            <input
                                className="py-3 mb-2 w-full cursor-pointer border hover:text-indigo-500 text-lg font-semibold hover:border-indigo-500 hover:bg-transparent bg-indigo-500 text-white transition duration-500 ease-in-out"
                                type="submit"
                                value="Add Service"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;

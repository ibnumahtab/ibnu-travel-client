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
        <div className="bg-blue-100 py-24">
            <div className="m-auto container full-width-all m-auto">
                <h2 className="text-center text-3xl">Please add service !</h2>
                <div className="m-auto w-8/12">
                    <form
                        onSubmit={handelRegister}
                        className="register-form mt-6"
                    >
                        <div>
                            <input
                                required
                                className="py-2 px-4 w-full text-lg  rounded-md "
                                type="text"
                                ref={getPackName}
                                placeholder="Package Name"
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                required
                                className="py-2 px-4 w-full text-lg  rounded-md "
                                type="text"
                                ref={getTagLine}
                                placeholder="Tag line"
                            />
                        </div>
                        <br />

                        <div>
                            <input
                                required
                                className="py-2 px-4 w-full text-lg  rounded-md"
                                type="number"
                                ref={getPrevPrice}
                                placeholder="Previous Price"
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                required
                                className="py-2 px-4 w-full text-lg  rounded-md"
                                type="text"
                                ref={getImg}
                                placeholder="Image URL"
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                required
                                className="py-2 px-4 w-full text-lg  rounded-md"
                                type="number"
                                step="0.01"
                                ref={getOfferPrice}
                                placeholder="Offer Price"
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                required
                                className="py-2 px-4 w-full text-lg  rounded-md"
                                type="number"
                                step="0.01"
                                ref={getDay}
                                placeholder="Day"
                            />
                        </div>
                        <br />
                        <div>
                            <label> Description </label>
                            <textarea
                                required
                                className="py-2 px-4 w-full text-lg  text-black rounded-md placeholder-gray-800"
                                cols="30"
                                placeholder="Description"
                                rows="5"
                                ref={getDesc}
                            >
                                {' '}
                            </textarea>
                        </div>
                        <br />

                        <div>
                            <input
                                className="py-2 px-4 text-lg text-white rounded-md bg-pink-600 cursor-pointer hover:bg-pink-700"
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

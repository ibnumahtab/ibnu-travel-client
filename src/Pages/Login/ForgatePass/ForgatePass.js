import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

// forget password page

const ForgatePass = () => {
    const {
        user,
        errorForPass,
        getEmail,
        setUser,
        setErrorForPass,
        forgatePass,
    } = useAuth();

    // redirect location
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/afterResetPass';

    // forget pass function
    const handelForgetPass = event => {
        event.preventDefault();
        forgatePass()
            .then(() => {
                setUser(user);
                history.push(redirect_url);
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorForPass(errorMessage);
            });
    };

    return (
        <div className="login-page bg-pink-200">
            {/* page title  */}
            <div className="login-page-banner text-white bg-pink-200"></div>
            {/* forget password main body  */}
            <div className="container m-auto py-32 px-4 grid grid-cols-12 gap-4 items-center full-width-all">
                <div className="col-span-3"></div>
                <div className="col-span-12 sm:col-span-8 md:col-span-6">
                    <h1 className="mb-8 text-4xl font-bold text-pink-500">
                        Reset your password by email
                    </h1>
                    {/* error message  */}
                    <div>
                        <p className="text-red-600 text-lg font-semibold py-4">
                            {errorForPass ===
                            'Firebase: Error (auth/user-not-found).'
                                ? 'Invalid Emial Address !'
                                : ''}
                        </p>
                    </div>
                    {/* forget password input area  */}
                    <div className="w-full">
                        <form onSubmit={handelForgetPass}>
                            <div>
                                <label
                                    className="font-semibold text-gray-500 text-lg"
                                    htmlFor="fo-pass"
                                >
                                    your existing email :
                                </label>
                                <br />
                                <input
                                    onBlur={getEmail}
                                    id="fo-pass"
                                    required
                                    className="w-full p-2 mt-4 text-lg outline-none border-2 border-blue-100"
                                    type="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <br />
                            <br />
                            <input
                                type="text"
                                type="submit"
                                className="cursor-pointer text-base block font-bold text-white px-4 py-2  bg-pink-500 hover:bg-pink-700
radiou rounded-sm "
                                value="Send password "
                            />
                        </form>
                    </div>
                    {/* one click login area  */}
                    <div className="mt-8">
                        <p>
                            Don't have a account?{' '}
                            <NavLink
                                className="text-pink-700 font-bold underline	hover:text-pink-900 hover:no-underline mr-4"
                                to="/register"
                            >
                                {' '}
                                Create now
                            </NavLink>
                            Or,{' '}
                            <NavLink
                                className="text-pink-700 font-bold underline text-right  forget-link hover:text-pink-900 hover:no-underline ml-4"
                                to="/login"
                            >
                                {' '}
                                Log In
                            </NavLink>
                        </p>
                    </div>
                </div>

                <div className="col-span-3"></div>
            </div>
        </div>
    );
};

export default ForgatePass;

import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const MyProfile = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div className="bg-primary">
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4 border shadow mx-4 md:mx-0 rounded-xl">
                        <div className="shaddow px-4 py-8">
                            {user.photoURL ? (
                                <img
                                    className="w-24 mx-auto border-2 border-indigo-500 h-24 rounded-full shadow-indigo-300"
                                    src={user.photoURL}
                                    alt=""
                                />
                            ) : (
                                <span className="mx-auto text-6xl text-indigo-700"></span>
                            )}
                            <h2 className="text-center text-indigo-600 font-semibold text-2xl my-4">
                                {user.displayName}
                            </h2>
                            <h2 className="text-center my-4">{user?.email}</h2>
                            <div className="text-center">
                                <button className="py-3 mb-2 w-2/3 border text-indigo-500 text-lg font-semibold border-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-500 ease-in-out">
                                    <Link to="addServices">Add Service</Link>
                                </button>
                                <button className="py-3 mb-2 w-2/3 border text-indigo-500 text-lg font-semibold border-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-500 ease-in-out">
                                    <Link to="myOrders">My Orders</Link>
                                </button>
                                <button className="py-3 mb-2 w-2/3 border text-indigo-500 text-lg font-semibold border-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-500 ease-in-out">
                                    <Link to="manageAllOrders">
                                        Manage All Orders
                                    </Link>
                                </button>
                                <button
                                    className="py-3 mb-2 w-2/3 border hover:text-red-500 text-lg font-semibold hover:border-red-500 hover:bg-transparent bg-red-500 text-white transition duration-500 ease-in-out"
                                    onClick={logOut}
                                >
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-8 border shadow mx-4 md:mx-0 px-12 py-6 rounded-xl">
                        <h2 className="text-4xl py-4 my-4">My Profile</h2>

                        <hr />
                        <div className="flex flex-col md:flex-row mt-10 items-center">
                            <div className="md:w-2/4">
                                <img
                                    className="w-40 h-40 my-2 mx-auto rounded-full"
                                    src={user.photoURL}
                                    alt=""
                                />
                            </div>
                            <div className="md:w-3/4 mx-4 md:mx-0">
                                <h2 className="md:text-2xl my-3 text-indigo-600 font-semibold">
                                    User Details
                                </h2>
                                <h2 className="md:text-3xl">
                                    {user.displayName}
                                </h2>
                                <h2 className="md:text-2xl font-semibold">
                                    {user?.email}
                                </h2>
                                <h2 className="md:text-3xl">{user.email}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;

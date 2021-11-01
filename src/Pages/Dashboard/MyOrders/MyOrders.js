import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useServices from '../../../Hooks/useServices';
import spin from '../../../images/9.gif';
import '../SingleOrders/SingleOrders.css';

const MyOrders = () => {
    const [services] = useServices([]);
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(
        () => [
            fetch('https://ibnu-travel.herokuapp.com/orders')
                .then(res => res.json())
                .then(data => setOrders(data)),
        ],
        []
    );

    const handelCancel = id => {
        const proceed = window.confirm('Are you sure, You want to delete it?');
        if (proceed) {
            const url = `https://ibnu-travel.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully delete the data.');
                        // remove data live system
                        const remainingData = orders.filter(
                            user => user._id !== id
                        );
                        setOrders(remainingData);
                    }
                });
        }
    };
    const singleUserOrders = orders.filter(
        singleUserOrder =>
            singleUserOrder.email === user?.email || user?.displayName
    );
    return (
        <div className="py-24 container m-auto full-width-all">
            <h2 className="md:text-8xl text-center text-5xl text-indigo-700 font-extrabold md:pb-10">
                My Orders
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
                {services.length ? (
                    singleUserOrders.map(order => (
                        <div className="p-4 shadow border rounded-xl">
                            <div className="flex justify-between border-b px-2 my-4">
                                <h1>ID :</h1>
                                <h1 className="mb-3">{order._id}</h1>
                            </div>
                            <div className="flex justify-between border-b px-2 my-4">
                                <h1>Package Name :</h1>
                                <h1 className="mb-3">{order.packName}</h1>
                            </div>
                            <div className="flex justify-between border-b px-2 my-4">
                                <h1>Traveler's Name :</h1>
                                <h1 className="mb-3">{user.displayName}</h1>
                            </div>
                            <div className="flex justify-between border-b px-2 my-4">
                                <h1>Traveler's Email :</h1>
                                <h1 className="mb-3">{user.email}</h1>
                            </div>
                            <div className="flex justify-between border-b px-2 my-4">
                                <h1>Status :</h1>
                                <div className="mb-3 ">
                                    <h1
                                        className={
                                            order.status
                                                ? 'text-white bg-green-500 py-2 px-4'
                                                : 'text-white bg-red-500 py-2 px-4'
                                        }
                                    >
                                        {order.status ? 'Accepted' : 'Pending'}
                                    </h1>
                                </div>
                            </div>
                            <div className="flex justify-between px-2 pb-4">
                                <div
                                    className={
                                        order.status
                                            ? 'hidden'
                                            : ' bg-red-600 text-white hover:bg-red-700 w-full py-2 text-center'
                                    }
                                >
                                    <button
                                        onClick={() => handelCancel(order._id)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <img className="m-auto block" src={spin} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;

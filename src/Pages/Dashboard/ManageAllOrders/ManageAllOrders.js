import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useServices from '../../../Hooks/useServices';
import spin from '../../../images/9.gif';
import '../SingleOrders/SingleOrders.css';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [services] = useServices([]);
    const [orders, setOrders] = useState([]);
    const [update, setUpdate] = useState(0);
    useEffect(
        () => [
            fetch('https://ibnu-travel.herokuapp.com/orders')
                .then(res => res.json())
                .then(data => setOrders(data)),
        ],
        [update]
    );

    let handelAccept = id => {
        const proceed = window.confirm(
            'Are you sure, You want to Accept this order?'
        );
        if (proceed) {
            const url = `https://ibnu-travel.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Update Successful.');
                        // const remainingData = orders.map(user => user)
                        setUpdate(update + 1);
                    }
                });
        }
    };
    const handelCancel = id => {
        const proceed = window.confirm('Sure to Delete?');
        if (proceed) {
            const url = `https://ibnu-travel.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully delete the data.');
                        const remainingData = orders.filter(
                            user => user._id !== id
                        );
                        setOrders(remainingData);
                    }
                });
        }
    };
    return (
        <div className="py-24 container m-auto full-width-all">
            <h2 className="md:text-8xl text-center text-5xl text-indigo-700 font-extrabold md:pb-10">
                All Orders
            </h2>
            <div>
                {services.length ? (
                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        {orders.map(order => (
                            <div className="res-table">
                                <div className="shadow border px-3 rounded-xl">
                                    <div className="flex justify-between border-b px-2 my-4">
                                        <h1>ID :</h1>
                                        <h1 className="mb-3">{order._id}</h1>
                                    </div>
                                    <div className="flex justify-between border-b px-2 my-4">
                                        <h1>Package Name :</h1>
                                        <h1 className="mb-3">
                                            {order.packName}
                                        </h1>
                                    </div>
                                    <div className="flex justify-between border-b px-2 my-4">
                                        <h1>Traveler's Name :</h1>
                                        <h1 className="mb-3">
                                            {user.displayName}
                                        </h1>
                                    </div>
                                    <div className="flex justify-between border-b px-2 my-4">
                                        <h1>Traveler's email :</h1>
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
                                                {order.status
                                                    ? 'Accepted'
                                                    : 'Pending'}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="flex justify-between px-2 pb-4">
                                        <div>
                                            {!order.status ? (
                                                <div className="bg-green-600 text-white hover:bg-green-700 py-2 px-4">
                                                    <button
                                                        onClick={() =>
                                                            handelAccept(
                                                                order._id
                                                            )
                                                        }
                                                    >
                                                        Accept{' '}
                                                    </button>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                        <div
                                            className={
                                                !order.status
                                                    ? 'bg-red-600 text-white hover:bg-red-700 py-2 px-4 text-center'
                                                    : 'bg-red-600 text-white hover:bg-red-700 py-2 px-4 w-full text-center'
                                            }
                                        >
                                            <button
                                                onClick={() =>
                                                    handelCancel(order._id)
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="">
                                    <table className="w-full mt-12">
                                        <tr>
                                            <th className>Order Id</th>
                                            <th>Package Name</th>
                                            <th>Customer Name</th>
                                            <th>Customer Email</th>
                                            <th>Status</th>
                                            <th colSpan="2">Permission</th>
                                        </tr>
                                        <tr>
                                            <td>{order._id}</td>
                                            <td>{order.packName}</td>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td
                                                className={
                                                    order.status
                                                        ? 'text-white bg-pink-500'
                                                        : ''
                                                }
                                            >
                                                {order.status
                                                    ? 'Approved'
                                                    : 'Pending'}
                                            </td>
                                            {!order.status ? (
                                                <td className="bg-green-600 text-white hover:bg-green-700">
                                                    <button
                                                        onClick={() =>
                                                            handelAccept(
                                                                order._id
                                                            )
                                                        }
                                                    >
                                                        Accept{' '}
                                                    </button>
                                                </td>
                                            ) : (
                                                ''
                                            )}
                                            <td className="bg-red-600 text-white hover:bg-red-700">
                                                <button
                                                    onClick={() =>
                                                        handelCancel(order._id)
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div> */}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <img className="m-auto block" src={spin} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageAllOrders;

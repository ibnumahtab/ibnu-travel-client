import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import pro1 from '../../images/pro1.png';
import './Navbar.css';

// navbar area for all

const Navbar = ({ fixed }) => {
    const { user } = useAuth();
    const [menuOpen, setMenuOpen] = React.useState(false);

    // function for user img
    let loginPhoto = () => {
        if (user.photoURL === null) {
            return pro1;
        } else {
            return user.photoURL;
        }
    };
    // toggle login logout function
    const profile = useHistory();
    const toggleText = () => {
        profile.push('/my-profile');
    };

    return (
        <>
            <div className="bg-indigo-900">
                <div className="flex flex-wrap py-2 transition-all delay-1000 full-width-all m-auto container">
                    <div className="w-full">
                        <nav className="relative flex flex-wrap items-center justify-between rounded">
                            <div className="container mx-auto flex flex-wrap items-center justify-between">
                                <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                                    <Link
                                        className="leading-relaxed inline-block mr-4 py-2 whitespace-nowrap d-flex uppercase"
                                        to="/"
                                    >
                                        <div className="d-flex">
                                            <img
                                                src="https://i.ibb.co/mNV9W3c/Ibnu-Travel.png"
                                                alt=""
                                            />
                                        </div>
                                    </Link>
                                    <button
                                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                        type="button"
                                        onClick={() => setMenuOpen(!menuOpen)}
                                    >
                                        ☰
                                    </button>
                                </div>
                                <div className="text-white text-center hidden md:block">
                                    <small>Welcome - {user?.displayName}</small>
                                </div>
                                <div
                                    className={
                                        'lg:flex flex-grow items-center justify-center' +
                                        (menuOpen ? ' flex' : ' hidden')
                                    }
                                    id="example-navbar-info"
                                >
                                    <div className="flex flex-col lg:flex-row list-none lg:ml-auto items-center	">
                                        <div className="nav-item px-1">
                                            <NavLink
                                                className="flex items-center uppercase font-bold leading-snug text-white px-3 py-4 border-transparent hover:border-white cursor-pointer border-b-2 mx-1 text-base"
                                                to="/home"
                                            >
                                                Home
                                            </NavLink>
                                        </div>
                                        <div className="nav-item px-1">
                                            <NavLink
                                                className="flex items-center uppercase font-bold leading-snug text-white px-3 py-4 border-transparent hover:border-white cursor-pointer border-b-2 mx-1 text-base"
                                                to="/aboutUs"
                                            >
                                                {' '}
                                                About{' '}
                                            </NavLink>
                                        </div>
                                        <div className="nav-item px-1">
                                            <NavLink
                                                className="flex items-center uppercase font-bold leading-snug text-white px-3 py-4 border-transparent hover:border-white cursor-pointer border-b-2 mx-1 text-base"
                                                to="/services"
                                            >
                                                Offers
                                            </NavLink>
                                        </div>
                                        <div className="nav-item px-1">
                                            <NavLink
                                                className="flex items-center uppercase font-bold leading-snug text-white px-3 py-4 border-transparent hover:border-white cursor-pointer border-b-2 mx-1 text-base"
                                                to="/appointment"
                                            >
                                                Booking
                                            </NavLink>
                                        </div>
                                        <div className="nav-item px-1">
                                            <NavLink
                                                className="flex items-center uppercase font-bold leading-snug text-white px-3 py-4 border-transparent hover:border-white cursor-pointer border-b-2 mx-1 text-base"
                                                to="/contactUs"
                                            >
                                                {' '}
                                                Contact{' '}
                                            </NavLink>
                                        </div>
                                        {/* user img login log-out */}
                                        <div className="profile-holder py-3">
                                            {user.email || user.displayName ? (
                                                <img
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={toggleText}
                                                    className="w-12 rounded-full"
                                                    src={loginPhoto()}
                                                    alt=""
                                                />
                                            ) : (
                                                <NavLink
                                                    className="flex items-center uppercase font-bold leading-snug text-indigo-600 bg-white px-5 py-4 hover:bg-indigo-600 hover:text-white rounded-tr-3xl cursor-pointer mx-1 text-base"
                                                    to="/login"
                                                >
                                                    {' '}
                                                    LogIn{' '}
                                                </NavLink>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const ResponsiveHeader = ({ fixed }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    return (
        <>
            <div className="flex flex-wrap py-2 bg-gray-100">
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
                                            src="https://i.ibb.co/YTphxtK/Ibnu-Travel.png"
                                            alt=""
                                        />
                                    </div>
                                </Link>
                                <button
                                    className="primary-color cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                    type="button"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    ☰
                                </button>
                            </div>
                            <div
                                className={
                                    'lg:flex flex-grow items-center' +
                                    (menuOpen ? ' flex' : ' hidden')
                                }
                                id="example-navbar-info"
                            >
                                <ul className="flex flex-col w-full md:w-max md:flex-row list-none md:ml-auto font-semibold">
                                    <li className="nav-item;">
                                        <Link
                                            className="flex items-center uppercase font-bold leading-snug text-indigo-600 hover:opacity-75 px-6 py-4 hover:text-indigo-500 hover:border-indigo-500 cursor-pointer border-b-2 mx-1 text-base"
                                            to="/home"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="flex items-center uppercase font-bold leading-snug text-indigo-600 hover:opacity-75 px-6 py-4 hover:text-indigo-500 hover:border-indigo-500 cursor-pointer border-b-2 mx-1 text-base"
                                            to="/about"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="flex items-center uppercase font-bold leading-snug text-indigo-600 hover:opacity-75 px-6 py-4 hover:text-indigo-500 hover:border-indigo-500 cursor-pointer border-b-2 mx-1 text-base"
                                            to="/packages"
                                        >
                                            Tour Packages
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="flex items-center uppercase font-bold leading-snug text-indigo-600 hover:opacity-75 px-6 py-4 hover:text-indigo-500 hover:border-indigo-500 cursor-pointer border-b-2 mx-1 text-base"
                                            to="/package"
                                        >
                                            My Packages
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="flex items-center uppercase font-bold leading-snug text-indigo-600 hover:opacity-75 px-6 py-4 hover:text-indigo-500 hover:border-indigo-500 cursor-pointer border-b-2 mx-1 text-base"
                                            to="/all-packages"
                                        >
                                            Manage All Packages
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};
export default ResponsiveHeader;

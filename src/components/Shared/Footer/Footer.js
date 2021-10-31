import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="footer-1 bg-gray-100 py-8 sm:py-12">
                <div class="container mx-auto px-4">
                    <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                            <h5 class="text-xl font-bold mb-6">Features</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Cool stuff
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Random feature
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Team feature
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Stuff for developers
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Another one
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Last time
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                            <h5 class="text-xl font-bold mb-6">Resources</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Resource
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Resource name
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Another resource
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Final resource
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 class="text-xl font-bold mb-6">About</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Team
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Locations
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Privacy
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Terms
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 class="text-xl font-bold mb-6">Help</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Support
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Help Center
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        to="/"
                                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                            <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">
                                Stay connected
                            </h5>
                            <div class="flex sm:justify-center xl:justify-start">
                                <Link
                                    href=""
                                    class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
                                >
                                    <i class="fab fa-facebook"></i>
                                </Link>
                                <Link
                                    href=""
                                    class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                                >
                                    <i class="fab fa-twitter"></i>
                                </Link>
                                <Link
                                    href=""
                                    class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
                                >
                                    <i class="fab fa-google-plus-g"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
                        <div class="sm:w-full px-4 md:w-1/6">
                            <strong>FWR</strong>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 class="font-bold mb-2">Address</h6>
                            <address class="not-italic mb-4 text-sm">
                                123 6th St.
                                <br />
                                Melbourne, FL 32904
                            </address>
                        </div>
                        <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 class="font-bold mb-2">Free Resources</h6>
                            <p class="mb-4 text-sm">
                                Use our HTML blocks for <strong>FREE</strong>.
                                <br />
                                <em>All are MIT License</em>
                            </p>
                        </div>
                        <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                            <button class="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

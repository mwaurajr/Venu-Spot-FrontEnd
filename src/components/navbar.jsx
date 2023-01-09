import React, { useState } from 'react'
import { Transition } from "@headlessui/react";

function NavBar() {
    let links = [
        { name: "Home", link: "/" },
        { name: "Browse Venues", link: "/venues" },
        { name: "Add Listing", link: "/list-venue" }
    ]

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className=" flex flex-shrink-0">
                                <h1 className='font-semibold uppercase text-lg text-black-200 ml-12'>
                                    VenuSpot
                                </h1>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex space-x-4 absolute top-4 right-20 items-center justify-between">
                                    <a
                                        href="#"
                                        className="hover:bg-gray-700 hover:text-white text-black px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </a>

                                    <a
                                        href="#"
                                        className="hover:bg-gray-700 hover:text-white text-black px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Venues
                                    </a>

                                    <a
                                        href="#"
                                        className="hover:bg-gray-700 hover:text-white text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Add Listing
                                    </a>

                                    <form class="flex items-center">
                                        <input class="border-2 rounded-l-full py-2 px-4 focus:outline-none focus:border-white" type="text" placeholder="Search" />
                                        <button class="bg-green-800 hover:bg-green-500 py-3.5 rounded-r-full py-2 px-4 focus:outline-none focus:shadow-outline-black">
                                            <svg class="fill-current text-black h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="fixed right-5 top-2.5 bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                    <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                        href="#"
                        className="hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium"
                        >
                        Home
                        </a>

                        <a
                        href="#"
                        className="hover:bg-gray-700 hover:text-white text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        Venues
                        </a>

                        <a
                        href="#"
                        className="hover:bg-gray-700 hover:text-white text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        List a Venue
                        </a>

                        <form class="flex justify-center items-center py-5">
                            <input class="border-2 rounded-l-full py-2 px-4 focus:outline-none focus:border-white" type="text" placeholder="Search" />
                            <button class="bg-green-800 hover:bg-green-500 rounded-r-full py-3.5 px-4 focus:outline-none focus:shadow-outline-black">
                                <svg class="fill-current text-black h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
                            </button>
                        </form>
                    </div>
                    </div>
                )}
                </Transition>
            </nav>
        </div>
    )
}

export default NavBar
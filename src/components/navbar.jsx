import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900">
            <nav className="flex items-center container mx-auto h-full justify-between p-6">
                <h1 className="font-semibold uppercase text-lg text-gray-200">
                    VenuSpot
                </h1>
                <div>
                    <ul className="flex items-center space-x-10 text-sm">
                        <li className="text-gray-400 hover:text-gray-100">Home</li>
                        <li className="text-gray-400 hover:text-gray-100">Browse Venues</li>
                        <li className="text-gray-400 hover:text-gray-100">Add Listing</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
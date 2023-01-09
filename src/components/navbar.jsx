import React from 'react'

function NavBar() {
    return (
        <div className="lg:w-100 fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900">
            <nav className="flex items-center container mx-auto h-full justify-between p-6">
                <h1 className="font-semibold uppercase text-lg text-gray-200">
                    VenuSpot
                </h1>
                <div className='decoration-white'>
                    <ul className="flex items-center space-x-10 text-sm">
                        <li className="text-gray-400 text-lg hover:text-gray-100"><a href='#'>Home</a></li>
                        <li className="text-gray-400 text-lg hover:text-gray-100"><a href='#'>Browse Venues</a></li>
                        <li className="text-gray-400 text-lg hover:text-gray-100"><a href='#'>Add Listing</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
import React from "react"

import Venue from '../assets/venue.jpg'

function LandingPage() {
    return (
        <div>
            <div class="flex flex-row justify-center items-center">
                <p className="absolute mt-20 pt-5 left-20 font-bold text-3xl">Your perfect <span className="text-green-700">event</span> awaits</p>
                <h4 className="absolute left-20 mt-60 pt-5 text-left text-2xl leading-tight text-left">
                    We match you with the <br />
                    perfect venue to bring life to <br />
                    the events you host.
                </h4>
                <img src={Venue} className="w-3/6 h-2/4 absolute mt-80 right-20" alt="" />
            </div>
            <button class="rounded-full float-left absolute left-20 mt-60 bg-green-800"><a href="/signup" className="text-white hover:text-white">Get Started</a></button>
            <button class="rounded-full float-left absolute left-60 mt-60 bg-gray-200 text-green-800 hover:bg-green-800 hover:text-white"><a href="/signup" className="text-green-800 hover:text-white">Learn More</a></button>
        </div>
    )
}

export default LandingPage
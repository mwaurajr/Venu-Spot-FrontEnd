import React, { useState,useEffect } from "react";


function Bookings() {
    const [bookings, setBookings] = useState([])
    
    const [bookingsData, setBookingsData] = useState({
        start_time: "",
        end_time: "",
        number_of_guests: ""
    });

    useEffect(() => {
    fetch("https://venuspot-production.up.railway.app/bookings")
    .then((res) => res.json())
    .then((data) => console.log(data))
    }, [])
    
    //since the id values are the same as the keys in formData, we can write an abstract setFormData here
    function handleChange(event) {
    setBookingsData({
        ...bookingsData,
        [event.target.id]: event.target.value,
    });
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("https://venuspot-production.up.railway.app/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingsData),
        });
    }

    function handleDeleteClick() {
        fetch(`https://venuspot-production.up.railway.app/bookings/${bookings.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => console.log("deleted!"));
    }

    return (
        <div>
            <div class="flex items-center justify-center">
            <form onSubmit={handleSubmit} className="lg:w-3/4 md:w-3/4 sm:w-3/4 bg-white rounded-lg items-center">
                <div class="px-12 py-32 pb-10 ml-96 mt-20">
                    <div class="w-full mb-2">
                        <div class="flex justify-center">
                            <input type="time" placeholder="Start Time"
                                className="px-8 w-96 border rounded-xl py-2 text-gray-700
        focus:outline-none items-center" id="start_time" value={bookingsData.start_time} onChange={handleChange} />
                        </div>
                    </div>
                    <div class="w-full mb-2">
                        <div class="flex justify-center mt-6">
                        <input type="time" placeholder="End Time"
                                className="px-8 w-96 border rounded-xl py-2 text-gray-700
        focus:outline-none items-center" id="end_time" value={bookingsData.end_time} onChange={handleChange} />
                        </div>
                    </div>
                    <div class="w-full mb-2">
                        <div class="flex justify-center mt-6">
                        <input type="number" placeholder="Number of guests"
                                className="px-8 w-96 border rounded-xl py-2 text-gray-700
        focus:outline-none items-center" id="start_time" value={bookingsData.no_guest} onChange={handleChange} />
                        </div>
                    </div>
                    <button className="w-40 mt-6 py-2 rounded-xl bg-green-800 text-gray-100 focus:outline-none">
                        Submit
                    </button>
                    <button onClick={handleDeleteClick} className="w-40 mt-6 py-2 rounded-xl bg-green-800 text-gray-100 focus:outline-none">
                        Delete
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Bookings

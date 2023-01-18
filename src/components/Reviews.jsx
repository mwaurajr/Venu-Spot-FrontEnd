import React, { useState,useEffect } from "react";


function Reviews() {
    const [reviews, setReviews] = useState([])

    const [reviewsData, setReviewsData] = useState({
        description: "",
        ratings: ""
    });
    
    useEffect(() => {
        fetch("https://venuspot-production.up.railway.app/reviews")
        .then((res) => res.json())
        .then((data) => console.log(data))
    }, [])

    function handleChange(event) {
        setReviewsData({
            ...reviewsData,
            [event.target.id]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("https://venuspot-production.up.railway.app/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewsData),
        });
    }

    function handleDeleteClick() {
        fetch(`https://venuspot-production.up.railway.app/reviews/${reviews.id}`, {
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
                                <textarea placeholder="Type description" className="px-4 h-40 border rounded-xl py-2 text-gray-700
            focus:outline-none items-center" id="description" value={reviewsData.description} onChange={handleChange} />
                            </div>
                        </div>
                        <div class="w-full mb-2">
                            <div class="flex justify-center mt-6">
                            <input type="number" placeholder="Enter Rating"
                                    className="px-8 w-96 border rounded-xl py-2 text-gray-700
            focus:outline-none items-center" id="ratings" value={reviewsData.ratings} onChange={handleChange} />
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

export default Reviews
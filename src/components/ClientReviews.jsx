import React, { useState, useEffect } from "react";

const ClientReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [clientId, setClientId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/reviews?clientId=${clientId}`);
      const data = await response.json();
      setReviews(data);
    };
    fetchData();
  }, [clientId]);

  const handleClientIdChange = (event) => {
    setClientId(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center">Client Reviews</h1>
      <div className="form-group">
        <label htmlFor="clientId">Enter Client Id</label>
        <input
          type="text"
          className="form-control"
          id="clientId"
          placeholder="Enter Client Id"
          value={clientId}
          onChange={handleClientIdChange}
        />
      </div>
      <div className="reviews-container">
        {Array.isArray(reviews) ? reviews.map((review) => (
          <div className="review" key={review.id}>
            <h2 className="review-title">{review.title}</h2>
            <p className="review-text">{review.review}</p>
            <p className="review-clientId">Client Id: {review.clientId}</p>
          </div>
        )): <div>No Reviews found</div>}
      </div>
    </div>
  );
};

export default ClientReviews;

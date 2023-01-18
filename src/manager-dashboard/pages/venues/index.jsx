import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";

export default function MyVenues() {
  const [venues, setVenues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [venuesPerPage] = useState(6);

  useEffect(() => {
    fetch("http://localhost:3000/venues")
      .then(response => response.json())
      .then(data => setVenues(data))
      .catch(error => console.error(error));
  }, []);

  // Get current venues
  const indexOfLastVenue = currentPage * venuesPerPage;
  const indexOfFirstVenue = indexOfLastVenue - venuesPerPage;
  const currentVenues = venues.slice(indexOfFirstVenue, indexOfLastVenue);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">My Venues</h1>
              </div>
              <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active">Venues List</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                {currentVenues.map(venue => (
                  <div key={venue.id} className="col-md-4">
                    <Link to={`/venues/${venue.id}`}>
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={venue.imageUrl}
                          alt={`Venue ${venue.id}`}
                        />
                        <div className="card-body text-center">
<h5 className="card-title">{venue.name}</h5>
</div>
</div>
</Link>
</div>
))}
</div>
<div className="d-flex justify-content-center">
<Pagination>
<Pagination.First onClick={() => paginate(1)} />
<Pagination.Prev onClick={() => paginate(currentPage - 1)} />
{[...Array(Math.ceil(venues.length / venuesPerPage))].map((page, i) => (
<Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
{i + 1}
</Pagination.Item>
))}
<Pagination.Next onClick={() => paginate(currentPage + 1)} />
<Pagination.Last onClick={() => paginate(Math.ceil(venues.length / venuesPerPage))} />
</Pagination>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
}



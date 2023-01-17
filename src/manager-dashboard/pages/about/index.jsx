import React from "react";

export default function About() {

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">About</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">About</li>
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
                  <p>
                  Our venue booking platform, based in Nairobi, is designed to connect venue owners with individuals and businesses
                  in need of a space to host events. We offer a wide range of venue options, including indoor and outdoor spaces, meeting
                  rooms, and unique venues such as rooftop terraces and historical buildings. Our platform makes it easy for venue owners 
                  to rent out their space and for customers to find the perfect location for their event. With a user-friendly interface
                   and a variety of search filters, users can easily find the right venue to fit their budget, style and capacity needs. 
                   We are dedicated to providing an efficient and reliable service that makes it easy for people to plan and host successful 
                   events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';

export default function ClientProfilePage({ clientId }) {
  const [client, setClient] = useState({});
  useEffect(() => {
    fetch(`/api/clients/${clientId}`)
      .then(response => response.json())
      .then(data => setClient(data))
      .catch(error => console.log(error));
  }, [clientId]);
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Client Profile</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Client Profile</li>
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
                  <h4>Name: {client.name}</h4>
                  <p>Username: {client.username}</p>
                  <p>Age: {client.age}</p>
                  <p>Address: {client.address}</p>
                  <p>Phone Number: {client.phoneNumber}</p>
                  <p>Email: {client.email}</p>
                  <p>Booking ID: {client.booking_id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

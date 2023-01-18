import React, { useState } from "react";

export default function UpdateUser() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    address: "",
    password: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(formData);
  };

  const updateUser = data => {
    fetch("api-endpoint", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Update your Details</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Update your Details</li>
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
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
onChange={handleChange}
/>
</div>
<div className="form-group">
<label htmlFor="email">Email</label>
<input
                     type="email"
                     className="form-control"
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                   />
</div>
<div className="form-group">
<label htmlFor="address">Address</label>
<input
                     type="text"
                     className="form-control"
                     id="address"
                     name="address"
                     value={formData.address}
                     onChange={handleChange}
                   />
</div>
<div className="form-group">
<label htmlFor="password">Password</label>
<input
                     type="password"
                     className="form-control"
                     id="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                   />
</div>
<button type="submit" className="btn btn-primary">
Update My Information
</button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
}

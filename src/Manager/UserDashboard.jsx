import React from "react";
import CustomChart from "./common/customChart";
import CustomTable from "./common/customTable";

const UserDashboard = () => {
  return (
    <div className="container-fluid">
      <h1 className="mt-4">Manager Dashboard</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active"></li>
      </ol>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body">My Venues</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                View Details
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning text-white mb-4">
            <div className="card-body">My Clients</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                View Details
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-success text-white mb-4">
            <div className="card-body">Client Reviews</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                View Details
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-danger text-white mb-4">
            <div className="card-body">Update Profile</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                View Details
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table mr-1"></i>
          DataTable Example
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <CustomTable pagination={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

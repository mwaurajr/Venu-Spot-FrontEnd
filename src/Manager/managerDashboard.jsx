import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Dashboard() {
  return (
    <div className="d-flex" id="wrapper">
      <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa-user-secret me-2"></i>Welcome
        </div>
        <div className="list-group list-group-flush my-3">
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text active">
            <i className="fas fa-tachometer-alt me-2"></i>Manager Dashboard
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fas fa-project-diagram me-2"></i>My Venues
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fas fa-chart-line me-2"></i>My Clients
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fas fa-paperclip me-2"></i> Upload Venue
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fas fa-shopping-cart me-2"></i>Transactions
          </a>
         
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fas fa-comment-dots me-2"></i>Client Review
          </a>

        
          <a href="#" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
            <i className="fas fa-power-off me-2"></i>Logout
          </a>
        </div>
        </div>
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
          <div className="d-flex align-items-center">
            <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
            <h2 className="fs-2 m-0">Dashboard</h2>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link primary-text fw-bold" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link primary-text fw-bold" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link primary-text fw-bold" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link primary-text fw-bold" href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">
          <h1 className="mt-4">Welcome to the Dashboard</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

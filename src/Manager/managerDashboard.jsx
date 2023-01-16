import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


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
            <i className="fa-solid fa-building-user"></i> My Venues
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fa-sharp fa-solid fa-users"></i> My Clients
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
                <a className="nav-link primary-text fw-bold" href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <div className="container-fluid">
          <h1 className="mt-4">Welcome to the Manager Dashboard</h1>
          <p>dsdsdsdsd</p>
        </div> */}

<div className="container-fluid">
            <h1 className="text-center my-3">Welcome Manager</h1>
            <div className="row">
                <div className="col-md-4">
                    <Card>
                        <Link to="/page1">
                            <CardImg top src="image1.jpg" alt="Card image" />
                        </Link>
                        <CardBody>
                            <CardTitle>Title 1</CardTitle>
                            <CardText>Description 1</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card>
                        <Link to="/page2">
                            <CardImg top src="image2.jpg" alt="Card image" />
                        </Link>
                        <CardBody>
                            <CardTitle>Title 2</CardTitle>
                            <CardText>Description 2</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card>
                        <Link to="/page3">
                            <CardImg top src="image3.jpg" alt="Card image" />
                        </Link>
                        <CardBody>
                            <CardTitle>Title 3</CardTitle>
                            <CardText>Description 3</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

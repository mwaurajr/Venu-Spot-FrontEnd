import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2 className="text-left">Welcome Manager</h2>
        </Col>
      </Row>
      <br/>
      <br/>
      <Row>
        <Col md={3}>
          <div className="card">
            <h5 className="card-header">Venues</h5>
            <div className="card-body">
              <h5 className="card-title">See who has booked your venue</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="btn btn-primary">
                Click Here
              </a>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="card">
            <h5 className="card-header">Update your details</h5>
            <div className="card-body">
              <h5 className="card-title">Keep info up-to-date</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="btn btn-primary">
                Click Here
              </a>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="card">
            <h5 className="card-header">View Clients</h5>
            <div className="card-body">
              <h5 className="card-title">View your own clients</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="btn btn-primary">
                Click Here
              </a>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

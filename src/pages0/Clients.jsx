import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Clients = () => {
    return (
        <Container fluid>
          <Row>
            <Col>
              <h2 className="text-left">View My Clients</h2>
              <br/>
              <br/>
            </Col>
          </Row>
          <Row>
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

export default Clients;

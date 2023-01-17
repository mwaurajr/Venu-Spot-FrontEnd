import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Button variant="danger">Logout</Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;

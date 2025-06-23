// src/components/AppNavbar.tsx

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// It's good practice to type the component, React.FC stands for "Function Component"
const AppNavbar: React.FC = () => {
  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center fs-3">
          <img
            src={"/asti-logo.png"}
            height="30"
            className="d-inline-block align-top me-2" // me-2 adds margin to the right
            alt="Student Association Logo"
          />
        ASTi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to="/" className="d-flex align-items-center fs-4">Home</Nav.Link>
            <Nav.Link as={Link} to="/activities" className="d-flex align-items-center fs-4">Activities</Nav.Link>
            <Nav.Link as={Link} to="/about" className="d-flex align-items-center fs-4">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="d-flex align-items-center fs-4">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
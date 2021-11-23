import React from 'react';
import { Button, Container,Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return(
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">CRUD Tasks</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Item as={Link} className="nav-link" to="/" >Inicio</Nav.Item>
          
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header;
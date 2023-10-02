import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Navb=()=> {
  return (
    <Navbar bg="light" expand="lg">
        
      <Container >
        
        <Navbar.Brand href="#"  >Mon Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Accueil</Nav.Link>
            <Nav.Link href="#">À propos</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;

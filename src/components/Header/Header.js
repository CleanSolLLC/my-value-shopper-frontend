import React from 'react';
import { FormControl, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home">My Value Shopper Powered by Amazing Shopper&copy; </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <form>
          <FormControl type="text" placeholder="search" />  
        </form>
      </Nav>
      <Nav className="me-auto">
        <Nav.Link href="#home">My Amazing Items</Nav.Link>
        <Nav.Link href="#link">Notes</Nav.Link>
        <NavDropdown title="Mark May" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )  
}

export default Header;
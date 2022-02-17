import React from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import  auth  from '../../auth'
import ProtectedNavBarItems from "./Protected/ProtectedNavBarItems";
import { Link } from "react-router-dom";

const Header = () => {


  const protectedNavBaritems = () => { 
     if (auth.isAuthenticated()) {
       return (
          <ProtectedNavBarItems />
       )
     };
  };

  return (
    <Navbar fixed="top" className="banner" bg="primary" expand="md" variant="dark">
  <Container >
    <Navbar.Text href="#home"><h4>My Value Shopper Powered by Amazing Shopper&copy;</h4> </Navbar.Text>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse id="basic-navbar-nav">

       <NavDropdown title="Please Log In or Sign Up" id="basic-nav-dropdown">
          <Link to={"/log-in"}>
             <NavDropdown.Item href="/log-in">Login</NavDropdown.Item>
          </Link>
          <Link to={"/sign-up"}> 
             <NavDropdown.Item href="/sign-up">Signup</NavDropdown.Item>
          </Link>
       </NavDropdown>
   
       {protectedNavBaritems()}
    </Navbar.Collapse>
  </Container>
</Navbar>
  )  
}

export default Header;
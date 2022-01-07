import React from "react";
import "./Header.css"
import { Container, Navbar } from "react-bootstrap";
//import  auth  from '../../auth'
import ProtectedNavBarItems from "../Protected/ProtectedNavBarItems";

const Header = () => {


  // const protectedNavBaritems = () => { 
  //    if (auth.isAuthenticated()) {
  //      return (
  //         <ProtectedNavBarItems />
  //      )
  //    };
  // };

  return (
    <Navbar className="banner" bg="primary" expand="lg" variant="dark">
  <Container >
    <Navbar.Brand href="#home">My Value Shopper Powered by Amazing Shopper&copy; </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
       <ProtectedNavBarItems />
    </Navbar.Collapse>
  </Container>
</Navbar>
  )  
}

export default Header;
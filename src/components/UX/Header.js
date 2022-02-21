import React from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import  auth  from '../../auth'
import ProtectedNavBarItems from "./ProtectedNavBarItems";
import { Link } from "react-router-dom";
import User from "../User/User";

const Header = (props) => {

  const unprotectedNavBarItems = () => { 
   return  <>
   <NavDropdown title="Please Log In or Sign Up" id="basic-nav-dropdown-authenticate" >
      <Link to={"/log-in"}>
        <NavDropdown.Item href="/log-in">Login</NavDropdown.Item>
      </Link>
      <Link to={"/sign-up"}> 
        <NavDropdown.Item href="/sign-up">Signup</NavDropdown.Item>
       </Link>
   </NavDropdown>
    </>
  }

  const renderNavBarItems = () => {
    if (auth.isAuthenticated()) {
      return <ProtectedNavBarItems username={props.username} />
    } else {
      return unprotectedNavBarItems()
    }
  }

  return (
    <Navbar fixed="top" className="banner" bg="primary" expand="md" variant="dark">
       <Container >
         <Navbar.Text><Link to="/"><h4>My Value Shopper Powered by Mark's Amazing Shopper&copy;</h4></Link></Navbar.Text>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />   
         <Navbar.Collapse id="basic-navbar-nav">
            {renderNavBarItems()}
        </Navbar.Collapse>
      </Container>
   </Navbar>
  )  
}

export default Header;
import React from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import  auth  from '../../auth'
import ProtectedNavBarItems from "./ProtectedNavBarItems";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {

  const unprotectedNavBarItems = () => { 
    return  <>
    <NavDropdown title="Please Log In or Sign Up" id="basic-nav-dropdown-authenticate" >
         <NavDropdown.Item as={Link} to ={"/log-in"}>Login</NavDropdown.Item>
         <NavDropdown.Item as={Link} to={"/sign-up"}>Signup</NavDropdown.Item>
    </NavDropdown>
     </>
  }

  const renderNavBarItems = () => {
    if (auth.isAuthenticated()) {
      return <ProtectedNavBarItems username={props.user.user.username} />
    } else {
      return unprotectedNavBarItems()
    }
  }

  return (
    <Navbar fixed="top" className="banner" bg="primary" expand="md" variant="dark">
       <Container >
         <Navbar.Text><h4 style={{color: "white"}}>My Value Shopper Powered by Mark's Amazing Shopper&copy;</h4></Navbar.Text>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />   
         <Navbar.Collapse id="basic-navbar-nav">
            {renderNavBarItems()}
        </Navbar.Collapse>
      </Container>
   </Navbar>
  )  
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Header);
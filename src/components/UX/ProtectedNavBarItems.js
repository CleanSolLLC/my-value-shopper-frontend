import React from 'react';
import { FormControl, Nav, NavDropdown } from "react-bootstrap";

const ProtectedNavBarItems = (props) => {
  return (
    <>
      <Nav className="m-auto">
        <form>
          <FormControl type="text" placeholder="search" />  
        </form> 
      </Nav>
  
      <Nav className="me-auto">
         <Nav.Link href="#home">My Amazing Items</Nav.Link>
         <Nav.Link href="#link">Notes</Nav.Link>

         <NavDropdown title={`Welcome ${props.username}!`} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="/log-out">Logout</NavDropdown.Item>
         </NavDropdown>
      </Nav>
    </>
  )  
}
export default ProtectedNavBarItems

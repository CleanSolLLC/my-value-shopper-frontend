import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",

      }}
    >
       <Container>
         <Row>
           <Col className="text-center py-3"><a href="https://storyset.com/business">Business illustrations by Storyset</a></Col>
         </Row>
         <Row>
           <Col className="text-center py-3">Copyright&copy; 2022 Amazing Shopper</Col>  
         </Row>
       </Container> 
    </footer>
  )  
}

export default Footer;
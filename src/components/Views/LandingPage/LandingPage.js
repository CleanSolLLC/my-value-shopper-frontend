import React from "react";
import { Container, Row, Button} from "react-bootstrap";
import "./LandingPage.css"
import { ReactComponent as Logo } from "./image1.svg"



const LandingPage = () => {
  return(
       <Container>
          <Row className="main">
            <Logo style={{width: "800px", height: "800px", padding: 0 }} />
            <div className="mb-2">
              <Row>
               <Button size="lg" className="landingbutton" varient="outline-primary">Login</Button>
              </Row>
              <br></br>
            <Row>
               <Button size="lg" className="landingbutton" varient="outline-primary" >Signup</Button>
            </Row>
            </div>
          </Row>
       </Container>
  )
}

export default LandingPage;

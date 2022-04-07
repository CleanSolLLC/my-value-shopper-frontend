import React from "react";
import { Container, Row, Button} from "react-bootstrap";
import "./LandingPage.css"
import { ReactComponent as Logo } from "../images/image1.svg";
import { Link } from "react-router-dom";
import Footer from "../Footer";


const LandingPage = () => {
  return(
       <Container>
          <Row className="main">
            <Logo style={{width: "650px", height: "650px", padding: 0 }} />
            <div className="mb-2">
              <Row>
                <Link to={"/log-in"}>
                   <Button size="lg" className="landingbutton" varient="outline-primary">Login</Button>
                 </Link>
              </Row>
              <br></br>
 
            <Row>
              <Link to={"/sign-up"}> 
                 <Button size="lg" className="landingbutton" varient="outline-primary" >Signup</Button>
              </Link>
            </Row>
            </div>
          </Row>
          <Footer />
       </Container>
  )
}

export default LandingPage;

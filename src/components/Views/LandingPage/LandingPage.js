import React from "react";
import { Container, Row} from "react-bootstrap";
import "./LandingPage.css"
import { ReactComponent as Logo } from "./image1.svg"


const LandingPage = () => {
  return(
       <Container>
          <Row className="main">
            <Logo style={{width: "800px", height: "800px", padding: 0 }} />
          </Row>
       </Container>
  )
}

export default LandingPage;

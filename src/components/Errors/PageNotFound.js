import React from "react";
import { Container, Row, Button} from "react-bootstrap";
import { ReactComponent as Logo } from "../UX/images/image2.svg";
import "./errors.css";

const PageNotFound = () => {
    return (
        <Container>
          <Row className="justify-content-md-center errormsg">
             <h3>404 Page Not Page Not Found</h3>
          </Row>
          <Row className="justify-content-md-center">
            <Logo 
            style={{
                width: "500px", 
                height: "500px",
                    position: "relative",
                    bottom: 50,
                    display: "flex",
                    justifyContent: "center",
            
                }} />
          </Row>
        </Container>
        ) 

}
export default PageNotFound;
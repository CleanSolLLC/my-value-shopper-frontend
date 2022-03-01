import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import "./items.css";

const Items = ({item:{product_title, ASIN, app_sale_price, available_quantity, category_id, product_main_image_url }}) => {
  console.log(ASIN, product_title,  app_sale_price, available_quantity )
  return (
    <div></div>
//     <Container className="item-wrapper" fluid="lg">
//   <Row>
//     <Col>Item</Col>
//   </Row>
// </Container>
    //  {/* {props.items ? console.log("List Items") : console.log("Enter First Item")} */}
  )
}   

export default Items;


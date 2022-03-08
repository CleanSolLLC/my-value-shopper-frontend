import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

const ItemInputForm = () => {
 return (
  <Form className="item-inner" style={{ width: '15rem', marginTop: "150px", height: "60vh"}}>
    <Form.Group className="mb-3" controlId="formItemCode">
      <Form.Label>Amazon Item Code</Form.Label>
      <Form.Control type="text" placeholder="Amazon ASIN #" />
      <Form.Text className="text-muted">
      Go to your product's detail page you will find the ASIN (or ISBN for books) under the product description.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formItemCategory">
      <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Select category option">
          <option>Select Category for Item</option>
          <option value="1">Accessories</option>
          <option value="2">Appliances</option>
          <option value="3">Automotive</option>
          <option value="4">Baby</option>
          <option value="5">Clothing</option>
          <option value="6">Electronics</option>
          <option value="7">Footwear</option>
          <option value="8">Healthcare</option>
          <option value="9">Home and Garden</option>
          <option value="10">Pet Care</option>
          <option value="11">Other</option>
        </Form.Select>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    <hr></hr>
    <div>
       <h6 style={{color: "blue" }}><Link to="/items">Close Window</Link></h6>
    </div>
  </Form>
  
 )
}
export default ItemInputForm;
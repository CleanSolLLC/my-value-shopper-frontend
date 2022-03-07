import React from "react";
import { Card }  from "react-bootstrap";
import { Link } from "react-router-dom";


const ItemCard = (
    { item:
    {
      product_main_image_url, 
      product_title,
      app_sale_price,
      original_price, 
      available_quantity,
      product_detail_url, 
      Customer_Reviews
    }={}
    }) => 
    {
     
    return (
      <Card className="item-card" style={{ width: '18rem', marginTop: "150px"}}>
         <Card.Img variant="top" src={"https://m.media-amazon.com/images/I/71mkEM7sIWL._AC_SL1500_.jpg"} />
        <Card.Body>
          <Card.Title>{product_title}</Card.Title>

          <Card.Text class="bg-light"> 
            <p class="card text-dark bg-light">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
          </Card.Text>
          <h6>Price ${app_sale_price}</h6>
          <h6 style={{color: "red"}}>List Price: {original_price}</h6>
          <h6 style={{color: "green"}}> You Save: </h6>
          <h6>Quantity Available: {available_quantity}</h6>
          <span>
            <h6 style={{color: "blue" }}><a target="_blank" href={product_detail_url} title="example">Item on Amazon</a> {"\u00A0 \u00A0 \u00A0 \u00A0"}
            <Link to="/">Close Window</Link></h6>
          </span>
        </Card.Body>
    </Card> 
    )
    
    
  
}
export default ItemCard;
import React from "react";
import { Card }  from "react-bootstrap";
import { Link } from "react-router-dom";


const ItemCard = (props) => {
  const item = props.location.state;
    return (
      <Card className="item-card" style={{ width: '18rem', marginTop: "150px"}}>
         <Card.Img variant="top" src={item.product_main_image_url} alt={item.product_title} />
        <Card.Body>
          <Card.Title>{item.product_title}</Card.Title>

          <Card.Text className="card text-dark bg-light"> 
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
          </Card.Text>
          <h6>Price ${item.app_sale_price}</h6>
          <h6 style={{color: "red"}}>List Price: {item.original_price}</h6>
          <h6 style={{color: "green"}}> You Save: </h6>
          <h6>Quantity Available: {item.available_quantity}</h6>
          <span>
            <h6 style={{color: "blue" }}><a target="_blank" href={item.product_detail_url} title="example">Item on Amazon</a> {"\u00A0 \u00A0 \u00A0 \u00A0"}
            <Link to="/items">Close Window</Link></h6>
          </span>
        </Card.Body>
    </Card> 
    )
}
export default ItemCard;
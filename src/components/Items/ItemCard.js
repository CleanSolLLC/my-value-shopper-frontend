import React from "react";
import { Card }  from "react-bootstrap";
import { Link } from "react-router-dom";


const ItemCard = (props) => {
  const item = props.location.state;
  const truncate = (str, max, pos=0) => {
    return str?.length > max ? str.substr(pos, max - 1) + "..." : str;
  };

    return (
      <Card className="item-card" style={{ width: '18rem', marginTop: "150px"}}>
         <Card.Img variant="top" src={item.product_main_image_url} alt={item.product_title} />
        <Card.Body>
          <Card.Title>{truncate(item.product_title, 65)}</Card.Title>

          <Card.Text className="card text-dark bg-light"> 
            <span style={{color: "purple"}}>
              <h6>{truncate(item.Customer_Reviews, 19)}</h6>
              <h6>{truncate(item.Customer_Reviews, 70, 20)}</h6>
            </span>
              
          </Card.Text>
          <h6>Price ${item.app_sale_price}</h6>
          <h6 style={{color: "red"}}>List Price: {item.original_price}</h6>
          <h6 style={{color: "green"}}> You Save: </h6>
          <h6>Quantity Available: {item.available_quantity}</h6>
          <span style={{color: "blue" }} >
            <h6><a target="_blank" href={item.product_detail_url} title="example">Item on Amazon</a></h6>
            <h6><Link to="/items">Close Window</Link></h6>
          </span>
        </Card.Body>
    </Card> 
    )
}
export default ItemCard;
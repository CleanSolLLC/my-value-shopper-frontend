import React, { useState } from "react";
import { connect } from 'react-redux';
import { Form, Button, Card }  from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { updateUserItem } from '../../actions';
import { useForm } from 'react-hook-form';
import "./items.css";

const ItemCard = (props) => {

  const { id } = useParams();
  const item = props.location.state;
  console.log(item)

  const truncate = (str, max, pos=0) => {
    return str?.length > max ? str.substr(pos, max - 1) + "..." : str;
  };

  const { register, handleSubmit, formState: { errors }} = useForm();
  const [viewItemCard, setViewItemCard] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)


  const onSubmit = (data, e) => {
    e.preventDefault()
    props.updateUserItem(data, id)
    setIsDisabled(true)
  }

    return (
      viewItemCard ? 
      <Card className="item-card" style={{ width: '20rem', marginTop: "100px"}}>
         <Card.Img variant="top" src={item.product_main_image_url} alt={item.product_title} />
        <Card.Body>
          <Card.Title>{truncate(item.product_title, 65)}</Card.Title>

          <Card.Text className="card text-dark bg-light"> 
            <span style={{color: "purple"}}>
              <h6>{truncate(item.Customer_Reviews, 19)}</h6>
              <h6>{truncate(item.Customer_Reviews, 70, 20)}</h6>
              <h6>Quantity Available: {item.available_quantity}</h6>
            </span>
              
          </Card.Text>
          <h6>Price ${item.app_sale_price.toFixed(2)}</h6>
          <h6 style={{color: "red"}}>List Price: {item.original_price === 0 ? item.app_sale_price.toFixed(2) : item.original_price.toFixed(2)}</h6>
          <h6 style={{color: "green"}}> You Save: {item.original_price > 0 ? (item.app_sale_price.toFixed(2) - item.original_price).toFixed(2) : 0 }</h6>
          
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
            <input className="form-control" placeholder="Coupon Amount" disabled={isDisabled} name="coupon" {...register("coupon", {
               pattern: {
                 value: /^(?:\.(?:0[1-9]|[1-9]\d)|[1-9]\d?\d?\d?\.\d\d)$/,
                 message: "Format must be between .01 and 9999.99 ",
                }, 
                required: {
                  value: true,
                  message: "Cannot be blank" , 
                },
            })}  
            />
            <p>{errors.coupon?.message}</p> 
            </Form.Group> 

              <Button variant="primary" type="submit" disabled={isDisabled}>Submit</Button>
          </Form>

          <br></br>
          <div style={{color: "blue" }} >
            <h6><a target="_blank" href={item.product_detail_url} title="example">Item on Amazon</a></h6>
            <h6><Link to="/items">Close Window</Link></h6>
          </div>
        </Card.Body>
    </Card> 
    : null 
    )
}
export default connect(null, {updateUserItem})(ItemCard);
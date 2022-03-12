import React, { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import { clearServerError, createUserItem } from '../../actions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { itemInputSchema } from "../../schemas/itemInputSchema";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./items.css"

const ItemInputForm = ({
  error,  
  clearServerError,
  createUserItem,
}) => {

  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: yupResolver(itemInputSchema),
  });

  const [errorVisible, setErrorVisible] = useState(false)

  const onSubmit = (data, e) => {
    e.preventDefault();

    if (error) {
      setErrorVisible(true);
      reset() 
      clearServerError()
    }else {
      setErrorVisible(false)
      createUserItem(data)
    }

  }

  const hideErrorMsg = () => {
    setErrorVisible(false);
  }
 return (
  <Form className="item-inner position-reletive" style={{ width: "17rem", marginTop: "150px", height: "60vh"}} onSubmit = {handleSubmit(onSubmit)}>
    <Form.Group className="mb-3" controlId="formItemCode">
      <p> {errorVisible ? error : null}</p>
      <Form.Label>Amazon Item Code</Form.Label>
      <Form.Control type="text" className="form-control .was-validated" name="code" placeholder="Amazon ASIN #"  {...register("ASIN")} onFocus={hideErrorMsg}/>
      <p>{errors.ASIN?.message}</p> 
      <Form.Text className="text-muted">
      Go to your product's detail page you will find the ASIN (or ISBN for books) under the product description.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formItemCategory">
      <Form.Label>Category</Form.Label>
        <Form.Select className="form-control" name="value" aria-label="Select category option"  {...register("value")} onFocus={hideErrorMsg}>
          <option>Select Category</option>
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
const mapStateToProps = (state) => {
  return {
    error: state.user.authError
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      createUserItem: createUserItem,
      clearServerError: clearServerError,

    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemInputForm);
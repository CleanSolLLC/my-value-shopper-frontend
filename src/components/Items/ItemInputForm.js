
import React, { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearServerError, createUserItem, dataLoading } from '../../actions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { itemInputSchema } from "../../schemas/itemInputSchema";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./items.css";
import Spinner from 'react-bootstrap/Spinner';


const ItemInputForm = ({
  error,  
  clearServerError,
  createUserItem,
  dataLoading,
  pending
}) => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: yupResolver(itemInputSchema),
  });

  const [errorVisible, setErrorVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(true)
  const [spinnerVisible, setSpinnerVisible] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const onSubmit = (data, e) => {
    e.preventDefault();
    dataLoading()
    createUserItem(data)

    if (error) {
      setErrorVisible(true);
      reset() 
      clearServerError()
    }else {
      setErrorVisible(false)
      setSpinnerVisible(true)
      setIsDisabled(true)
      closeForm()
    }

  }

  const closeForm = () => {
    setTimeout(function() { return !pending ? setFormVisible(false) : setFormVisible(true)}, 15000)
  }

  const hideErrorMsg = () => {
    setErrorVisible(false);
  }

  const displaySpinner = () => {
    return (
    <Spinner animation="border" variant="primary" role="status">
       <span className="visually-hidden"></span>
    </Spinner>
    )
  }


 return (
   <>

   { formVisible ? 

  <Form className="item-inner position-reletive" style={{ width: "17rem", marginTop: "150px", height: "75vh"}} onSubmit = {handleSubmit(onSubmit) }>
    {spinnerVisible ? displaySpinner() : null}
    <Form.Group className="mb-3" controlId="formItemCode">
      <p> {errorVisible ? error : null}</p>
      <Form.Label>Amazon Item Code</Form.Label>
      <Form.Control type="text" className="form-control .was-validated" name="code" placeholder="Amazon ASIN #"  {...register("ASIN")} onFocus={hideErrorMsg} disabled={isDisabled}/>
      <p>{errors.ASIN?.message}</p> 
      <Form.Text className="text-muted">
      Go to your product's detail page you will find the ASIN (or ISBN for books) under the product description.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formItemCategory">
      <Form.Label>Category</Form.Label>
        <Form.Select className="form-control" name="category_id" aria-label="Select category option"  {...register("category_id")} onFocus={hideErrorMsg} disabled={isDisabled}>
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
    <Button variant="primary" type="submit" disabled={isDisabled}>
      Submit
    </Button>
    <hr></hr>
    <div>
       <h6 style={{color: "blue" }}><Link to="/items">Close Window</Link></h6>
    </div>
  </Form>
  : null
  }
  </>
 )
}
const mapStateToProps = (state) => {
  console.log(state.item.pending)
  return {
    error: state.user.authError,
    pending: state.item.pending
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      createUserItem: createUserItem,
      clearServerError: clearServerError,
      dataLoading: dataLoading 


    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemInputForm);
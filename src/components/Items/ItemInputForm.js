
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearServerError, createUserItem, dataLoading } from '../../actions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { itemInputSchema } from "../../schemas/itemInputSchema";
import { Form, Button } from "react-bootstrap";
import "./items.css";
import Spinner from 'react-bootstrap/Spinner';
import { Redirect, Link} from "react-router-dom";


const ItemInputForm = ({
  displayForm,
  error,  
  clearServerError,
  createUserItem,
  dataLoading,
  pending,
  items
}) => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: yupResolver(itemInputSchema),
  });

  useEffect(()=> {
    console.log("inside useEffect dataLoading")
   dataLoading()
  },[pending]);

  useEffect(()=> {
    console.log("inside useEffect setErrorVisible")
    if (error) {
      setErrorVisible(true)
      setSpinnerVisible(false)
      reset()
      setIsDisabled(false)
    }
   },[error]);



  const [errorVisible, setErrorVisible] = useState(false)
  const [spinnerVisible, setSpinnerVisible] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)


  const onSubmit = (data, e) => {
    console.log(pending)
    e.preventDefault();
    console.log(pending)
    createUserItem(data)
    
    if (error) {
      setErrorVisible(true);
      reset()
      setSpinnerVisible(false) 
      clearServerError()
    }else {
      setErrorVisible(false)
      setSpinnerVisible(true)
      setIsDisabled(true)
    }

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
  {pending ?
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
  :   <Redirect to="/items" />

}
  </>
 )
}
const mapStateToProps = (state) => {
  console.log(state.authError)
  return {
    error: state.authError,
    pending: state.pending,
    items: state.items,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      createUserItem: createUserItem,
      clearServerError: clearServerError,
      dataLoading: dataLoading 


    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemInputForm);
import React from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import "./items.css";
import { Table, Button } from 'react-bootstrap';
import ItemCard from './ItemCard';
import ItemInputForm from './ItemInputForm';
import { connect } from 'react-redux';
import { deleteUserItem } from '../../actions';


const Items = (

  { 
    match,
    items,
    location,
    deleteUserItem
  }) => {
   
   const history = useHistory();
   const renderItems = (item)=> {

    const deleteHandler = (e) => {
      e.preventDefault();
      let url = e.target.href.split("3000")[1]
      let id = parseInt(e.target.href.split("/items/")[1]) 
      deleteUserItem(url, id)
    }

    const itemDetailHandler = (e) => {
      e.preventDefault();
      history.push({
        pathname: `/items/${item.id}`,
        search: '',
        state: item
    });
    }

     return (
      <tr key={item.id}>
        <td><Button variant="primary"><Link to={`/items/new`}>+</Link></Button>{"\u00A0 \u00A0"}
            <Button onClick={deleteHandler} variant="primary">
              <Link to={{
                pathname: `/items/${item.id}`,
                state: item,
                }}>-
              </Link>
            </Button></td>

        <td><Button onClick={itemDetailHandler} variant="outline-primary">
           {item.ASIN}
           </Button>
        </td>      

        <td >{item.product_title}</td>
        <td>{item.app_sale_price.toFixed(2)}</td>
        <td>{item.available_quantity}</td>
        <td>{item.category_name}</td>
      </tr>
   )}
      

    return (
      <>
      <div className="auth-wrapper" style={{display: "flex", background: "#8bafdf"}}>
        <Table responsive="sm" className="auth-inner" style={{width: "auto", marginTop: "150px"}} striped bordered hover>
          <thead>
            <tr>
              <th style={{color: "blue"}}>Add/Remove</th>
              <th style={{color: "blue"}}>Amazon Id Number</th>
              <th>Item Name</th>
              <th>Price USD</th>
              <th>Available Qty</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
          {items.map((renderItems))}
          </tbody>
        </Table>

      <Switch>
        <Route 
           path={`${match.url}/new`} component={ItemInputForm} />

        <Route 
           path={`${match.url}/:id`} component={ItemCard} location={location} />

        </Switch>
        </div>
        </>

    )
}
const mapStateToProps = (state) => {
  console.log(state.items)
  return {
    items: state.items,
    pending: state.pending,
  }
} 
export default connect(mapStateToProps, {deleteUserItem})(Items);
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import "./items.css";
import { Table, Button } from 'react-bootstrap';
import ItemCard from './ItemCard';
import ItemInputForm from './ItemInputForm';

const Items = (
  { 
    match,
    items,
    location,
  }) => {

   const renderItems = (item)=> {
     return (

      <tr key={item.id}>
        <td><Button variant="primary"><Link key={item.id} to={`/items/new`}>+</Link></Button>{"\u00A0 \u00A0"}<Button variant="primary">-</Button></td>
        <td style={{color: "blue"}}>
           <Link key={item.id} to={{
                   pathname: `/items/${item.id}`,
                   state: item,
                    }}>{item.ASIN}
           </Link>
        </td> 

        <td>{item.product_title}</td>
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
           exact path={`${match.url}/new`} component={ItemInputForm} />

        <Route 
           exact path={`${match.url}/:id`} component={ItemCard} location={location} />
        </Switch>
        </div>
        </>
    )
}     
export default Items;


import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import "./items.css";
import Table from 'react-bootstrap/Table'
import ItemCard from './ItemCard';

const Items = (
  { match,
    item,
    item:
    {id,
      ASIN, 
      product_title,
      app_sale_price, 
      available_quantity, 
      category_id, 
    }={},
    
    user:
      {name}={}
  }) => {

    //console.log(ASIN, product_title,  app_sale_price, available_quantity, name)  
  
    const prepareItemCard = (event) => {
      event.preventDefault();
      //return <ItemCard />
    }
    return (
      <>
      <div className="auth-wrapper" style={{display: "flex", background: "#8bafdf"}}>
        <Table responsive="sm" className="auth-inner" style={{width: "auto", marginTop: "150px"}} striped bordered hover>
          <thead>
            <tr>
              <th>Add/Remove</th>
              <th>Amazon Id Number</th>
              <th>Item Name</th>
              <th>Price USD</th>
              <th>Available Qty</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody onClick={(event) => prepareItemCard(event)}>
             <tr>
               <td>+ -</td>
               <td>{ASIN}</td>
               <td>{product_title}</td>
               <td>{app_sale_price}</td>
               <td>{available_quantity}</td>
               <td>{category_id}</td>
             </tr>
          </tbody>
        </Table>
        <Route path='/items' render={routerProps => <ItemCard {...routerProps} item={item}/>} />
        </div>
        </>
    )
}     
export default Items;


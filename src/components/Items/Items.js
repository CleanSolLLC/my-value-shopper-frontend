import React from 'react';
import { Route, Link } from 'react-router-dom';
import "./items.css";
import { Table, Button } from 'react-bootstrap';
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
             <tr>
               <td><Button variant="primary">+</Button>{"\u00A0 \u00A0"}<Button variant="primary">-</Button></td>
               <td style={{color: "blue"}}><Link key={id} to={`/items/${id}`}>{ASIN}</Link></td>
               <td>{product_title}</td>
               <td>{app_sale_price}</td>
               <td>{available_quantity}</td>
               <td>{category_id}</td>
             </tr>
          </tbody>
        </Table>
        <Route 
           path={`${match.url}/:id`} 
           render={(routerProps) => <ItemCard {...routerProps} item={item} />}
        />
        </div>
        </>
    )
}     
export default Items;


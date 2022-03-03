import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import "./items.css";
import Table from 'react-bootstrap/Table'

const Items = ({item:{key, product_title, ASIN, app_sale_price, available_quantity, category_id, product_main_image_url }={}, user:{name}={}}) => {
  console.log(ASIN, product_title,  app_sale_price, available_quantity, name) 
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
        <tbody>
           <tr>
             <td>+ -</td>
             <td>{ASIN}</td>
             <td>{product_title}</td>
             <td>{app_sale_price}</td>
             <td>{available_quantity}</td>
           </tr>
        </tbody>
      </Table>
      </div>
    {/* //<div className="main">{ASIN} {product_title} {app_sale_price}{available_quantity}</div> */}

  {/* <Row className="auth-inner" style={{display: "flex", width: "750px", height: "75vh", marginTop: "100px"}}>
     <span>{ASIN}{product_title} ${app_sale_price} {available_quantity}</span>
  </Row>
</div> */}
  </>
    //  {/* {props.items ? console.log("List Items") : console.log("Enter First Item")} */}
  )
}   

export default Items;


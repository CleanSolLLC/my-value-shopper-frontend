import React from "react";
import  Items  from "./Items.js";
import auth from "../../auth";
import { getUser} from '../../actions/login';

const ProcessItems = (props={}) => {
  // const mapoverItems = () => 
    return  props.items ? props.items.map((item => <Items key={item.id} item={item} name={props.name}/>)) : null
     
    // }   

      // return <div>{mapoverItems()}</div>                                
}

export default ProcessItems;


import React from "react";
import  ItemList  from "./ItemList.js";
import auth from "../../auth";
import { getUser} from '../../actions/login';


const Items = (props) => {  
  if (props.items) {
    return props.items.map((item) =>
      <ul key={item.id}><ItemList item={item} /></ul>)
  } else {
    return null
  }
}  
export default Items;


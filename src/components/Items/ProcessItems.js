import React from "react";
import  Items  from "./Items.js";
import auth from "../../auth";
import { getUser} from '../../actions/login';

const ProcessItems = (props={}) => {
    return  props.items ? props.items.map((item => <Items key={item.id} item={item} name={props.name}/>)) : null                          
}
export default ProcessItems;


import React from "react";
import  Items  from "./Items.js";
import auth from "../../auth";
import { getUser} from '../../actions/login';

const ProcessItems = (props={}) => {
    return  props.items ? props.items.map((item => <Items key={item.id} id={item.id } item={item} match={props.match}/>)) : null                          
}
export default ProcessItems;


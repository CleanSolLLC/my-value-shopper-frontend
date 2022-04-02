import React from "react";
import { connect } from "react-redux";
import ItemInputForm from "./ItemInputForm";
import Items from "./Items";
import { Redirect, } from "react-router-dom"

const ItemsContainer = (props={}) => {  
  console.log(props.items)
  debugger
  return props.items ? <Items items={props.items} match={props.match} /> : <Items items={props.user.items} match={props.match} />
}

const mapStateToProps = (state) => {
  console.log(state.item.items)
  return {
    user: state.user.user,
    items: state.item.items,
  }
}
export default connect(mapStateToProps)(ItemsContainer);

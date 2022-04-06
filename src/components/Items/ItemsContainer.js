import React from "react";
import { connect } from "react-redux";
import ItemInputForm from "./ItemInputForm";
import Items from "./Items";
import { Redirect, Link, withRouter, Switch } from "react-router-dom"

const ItemsContainer = (props={}) => {  
  console.log(props.items)
  return props.items.length > 0 ? <Items items={props.items} match={props.match} /> : <ItemInputForm />
}

const mapStateToProps = (state) => {
  console.log(state.items)
  return {
    items: state.items,
  }
}
export default withRouter(connect(mapStateToProps)(ItemsContainer));

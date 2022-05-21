import React from "react";
import { connect } from "react-redux";
import ItemInputForm from "./ItemInputForm";
import Items from "./Items";
import { withRouter } from "react-router-dom"

const ItemsContainer = (props={}) => {  
  return props.items.length > 0 ? <Items items={props.items} match={props.match} /> : <ItemInputForm />
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}
export default withRouter(connect(mapStateToProps)(ItemsContainer));

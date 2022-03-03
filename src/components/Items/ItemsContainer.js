import React from "react";
import { connect } from "react-redux";
import ProcessItems from "./ProcessItems"
import Items from "./Items";
import { Redirect } from "react-router-dom";

const ItemsContainer = (props={}) => {
  return props.user.items ? <ProcessItems items={props.user.items} name={props.user.username} /> : <Items name={props.user.username} />
}

const mapStateToProps = (state) => {
    console.log(state.user.user)
  return {
    user: state.user.user
  }
}
export default connect(mapStateToProps)(ItemsContainer);
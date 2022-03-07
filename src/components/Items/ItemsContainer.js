import React from "react";
import { connect } from "react-redux";
import ProcessItems from "./ProcessItems"
import Items from "./Items";
import { Redirect } from "react-router-dom";

const ItemsContainer = (props={}) => {
  return props.user.items ? <ProcessItems items={props.user.items} match={props.match} /> : null
}

const mapStateToProps = (state) => {
    console.log(state.user.user)
  return {
    user: state.user.user
  }
}
export default connect(mapStateToProps)(ItemsContainer);
import React from "react";
import { connect } from "react-redux";
import Items from "./Items";

const ItemsContainer = (props={}) => {
  return props.user.items ? <Items items={props.user.items} match={props.match} /> : null
}

const mapStateToProps = (state) => {
    console.log(state.user.user)
  return {
    user: state.user.user
  }
}
export default connect(mapStateToProps)(ItemsContainer);
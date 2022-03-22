import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Items from "./Items";

const ItemsContainer = (props={}) => {
  console.log(props)
  return props.items ? <Items items={props.items} match={props.match} /> : null
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    items: state.item.items
  }
}
export default connect(mapStateToProps)(ItemsContainer);
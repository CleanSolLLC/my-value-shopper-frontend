import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Items from "./Items";

const ItemsContainer = (props={}) => {
  console.log(props)
  return <Items items={props.items} match={props.match} />
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    items: state.item.items
  }
}
export default connect(mapStateToProps)(ItemsContainer);
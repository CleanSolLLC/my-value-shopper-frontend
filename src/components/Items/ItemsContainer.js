import React from "react";
import { connect } from "react-redux";
import Items from "./Items"
import ItemList from "./ItemList";



const ItemsComponent = (props) => {
    return (
        <div>
          {props.items ? <Items items={props.items} /> : <ItemList items={props.items} />}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.user.user)
  return {
    items: state.user.user.items && null
  }
}
export default connect(mapStateToProps)(ItemsComponent);
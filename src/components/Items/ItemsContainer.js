import React from "react";
import { connect } from "react-redux";
import ProcessItems from "./ProcessItems"
import Items from "./Items";
import { Redirect } from "react-router-dom";



const ItemsContainer = (props) => {
    return (
        <div className="auth-wrapper" style={{background: "#8bafdf"}}>
          {props.user.items ? <ProcessItems items={props.user.items} /> : <Items user={props.user} />}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.user.user)
  return {
    user: state.user.user
  }
}
export default connect(mapStateToProps)(ItemsContainer);
import React, { Component } from "react";
import { connect } from 'react-redux';


class Items extends Component {

    render() {
        return (
          <div><h1>Items</h1>
            <ul>
                {this.props.items.map(item => (
                  <li>{item.product_title}</li>
                ))}
            </ul>
          </div>  
        )}
}      
const mapStateToProps = (state) => {
  //console.log(state.user.user.items)
  return {
    items: state.user.user.items
  }
}

export default connect(mapStateToProps)(Items);
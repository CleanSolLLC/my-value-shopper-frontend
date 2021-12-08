import React, { Component } from "react";
import { connect } from 'react-redux';
import { getUserItems } from '../actions/items'


class Items extends Component {

  componentDidMount() {
     this.props.getUserItems();
  }

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
  console.log(state)
  return {
    items: (state.user)
  }
}

export default connect(mapStateToProps, getUserItems)(Items);
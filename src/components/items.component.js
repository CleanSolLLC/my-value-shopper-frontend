import React, { Component } from "react";
import { connect } from 'react-redux';
//import { getUserItems } from '../actions/items'
import { getUser } from '../actions/login';
//import  auth from '../auth'

class Items extends Component {

  // componentDidMount() {
  //     this.props.getUser();
  //   }

    render() {
        //if (auth.isAuthenticated()) {
          //this.props.getUser()
          //this.props.getUserItems();
        //}
        // checkk to see if there are items in store if so pass props 
        //to listCard cpomponent if not, redirect to a new items component

        //console.log (this.props.user.user.items)
        //if (this.props.user.items)

        return (
          <div><h1>Items</h1>
            {/* <ul>
                {this.props.items.map(item => (
                  <li>{item.product_title}</li>
                ))}
            </ul> */}
          </div>  
        )}
}      
const mapStateToProps = (state) => {
  return {
    items: state.item,
    user: state.user
  }
}

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
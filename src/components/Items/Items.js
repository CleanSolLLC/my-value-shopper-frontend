import React, { Component } from "react";
import { Redirect } from 'react-router';
//import { connect } from "react-redux";
//import  ItemList  from "../itemlist.component.js";
import auth from "../../auth";
import { getUser} from '../../actions/login';


class Items extends Component {

  authorized = () => {
    if(auth.isAuthenticated()) {
      return null
      }else {
        return <Redirect to = '/' />
      }  
    }
  render() {
  return (
    <div>
      {this.authorized()}
    </div>
  )}
}     

export default Items;


  // componentDidMount() {
  //   if (auth.isAuthenticated()) {
  //     <Redirect to = '/' />
  //   }
  // }
  // itemList = () => {
  //   console.log(this.props.user.items.map(i => <ItemList item={i} key={i.id}/>))
  // }



  // const mapStateToProps = (...args) => {
//   console.log(args[0].user.username)
//   // return {
//   //   items: state.items,
//   // }
// }

// const mapDispatchToProps = {
//   getUser,
// }

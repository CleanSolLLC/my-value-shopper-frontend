import React, { Component } from "react";
import { Redirect } from 'react-router';
import Header from "../UX/Header";
import Footer from "../UX/Footer";
//import { connect } from "react-redux";
//import  ItemList  from "../itemlist.component.js";
import auth from "../../auth";
import { getUser} from '../../actions/login';



class Items extends Component {
  componentDidMount() {
    if (auth.isAuthenticated()) {
      <Redirect to = '/' />
    }
  }
  // itemList = () => {
  //   console.log(this.props.user.items.map(i => <ItemList item={i} key={i.id}/>))
  // }
  render() {
  return (
    <>
      <Header />
      <Footer />
      {/* {this.itemList().length > 0 ? this.itemList() : null} */}
    </>
  )
  }
}      

// const mapStateToProps = (...args) => {
//   console.log(args[0].user.username)
//   // return {
//   //   items: state.items,
//   // }
// }

// const mapDispatchToProps = {
//   getUser,
// }

export default Items;
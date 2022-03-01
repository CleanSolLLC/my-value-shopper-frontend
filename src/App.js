import React, { Component } from "react";
import  auth  from "./auth"
import { Redirect } from "react-router-dom";
import Header from "./components/UX/Header";
import Footer from "./components/UX/Footer";
import { getUser } from "./actions/login.js";
import { connect } from "react-redux";
import RoutePath from "./components/UX/RoutePath";
import ItemsContainer from "./components/Items/ItemsContainer";
import Items from "./components/Items/Items";
//import User from "./components/User/User";

class App extends Component {

  //header hidden and error states are used to hide header in the event of an error of if there 
  //is a protected route
   
    state={
      headerHidden: false
    }
  
    error = () => {
      this.setState({
        error: true
      })
    }
  
  headerDetails = () => {
    if (this.props.user.user) {
      return <Header username={this.props.user.user.username}/>
    }else {
      return <Header />
    }}

    render() {
      return (
        <> 
        {this.props.error ? null : this.headerDetails()}
        <ItemsContainer />
        {auth.isAuthenticated() ? <Items /> : <Redirect to ="/" /> }
        <RoutePath error={this.error}/>
        <Items />
        <Footer />
        </>
      )

    }
  }

  const mapStateToProps = (state) => {
     return {
       user: state.user,
       error: state.error
     }
  }

export default connect(mapStateToProps, {getUser})(App);
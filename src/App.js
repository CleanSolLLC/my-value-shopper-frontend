import React, { Component } from "react";
import  auth  from "./auth"
import { Redirect } from "react-router-dom";
import Header from "./components/UX/Header";
import Footer from "./components/UX/Footer";
import { getUser } from "./actions/login.js";
import { connect } from "react-redux";
import RoutePath from "./components/UX/RoutePath";
//import User from "./components/User/User";

class App extends Component {

    state={
      headerHidden: false
    }
  
  
  headerDetails = () => {
    if (this.props.user.user) {
      return <Header username={this.props.user.user.username}/>
    }else {
      return <Header />
    }}

    error = () => {
      debugger
      this.setState({
        error: true
      })
    }

    render() {
      return (
        <>   
        {this.state.headerHidden ? null : this.headerDetails()}
        {auth.isAuthenticated() ? <Redirect to ="/items" /> : null}
        <RoutePath error={this.error}/>
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
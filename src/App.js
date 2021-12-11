import React, { Component }from "react";
import { connect } from 'react-redux';
import { getUser } from './actions/login';
import  auth  from './auth'
//import { SignUp } from './components/signup.component';
//import { Redirect } from 'react-router';
//import Items  from './components/items.component';
//import { setLoggedIn } from '../actions/setlogin';

class App extends Component {

  componentDidMount() {
    if (auth.isAuthenticated()) {
      this.props.getUser();
    }}

    render() {
      return (
        <div></div>
      )
    }
  }
  
export default connect(null, {getUser})(App);
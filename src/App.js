import React, { Component }from "react";
import { connect } from 'react-redux';
import { getUser } from './actions/login';
import { getUserItems } from './actions/items';
import  auth  from './auth'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from "./components/Views/LandingPage/LandingPage";
//import { SignUp } from './components/signup.component';
//import { Redirect } from 'react-router';
//import Items  from './components/items.component';
//import { setLoggedIn } from '../actions/setlogin';

class App extends Component {

  componentDidMount() {
    if (auth.isAuthenticated()) {
      this.props.getUser();
      this.props.getUserItems();
    }}

    render() {
      return (
        <>
        <Header />
        <LandingPage />
        <Footer />
        </>
      )
    }
  }
  
  const mapDispatchToProps =  {
    getUser,
    getUserItems,
  };  
  
export default connect(null, mapDispatchToProps)(App);
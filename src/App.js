import React, { Component } from "react";
import  auth  from "./auth"
import LandingPage from "./components/UX/LandingPage/LandingPage";
import { Route, Redirect } from "react-router-dom";
import SignUp from "./components/Auth/Signup";
import Login  from "./components/Auth/Login";
import Logout  from "./components/Auth/Logout";
import Items  from "./components/Items/Items";
import Header from "./components/UX/Header";
import Footer from "./components/UX/Footer";
import { getUser } from "./actions/login";
import { connect } from "react-redux";
//import User from "./components/User/User";

class App extends Component {
  
    render() {
      console.log(this.props.user)
      return (
        <>
        <Header />
        {auth.isAuthenticated() ? <Redirect to ="/items" /> : null}
        <Route path="/" component={LandingPage} exact />
        <Route exact path="/items" component={Items} />
        <Route exact path="/log-in" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/log-out" component={Logout} />
        <Footer />
        </>
      )
    }
  }

  const mapStateToProps = (state) => {
     return {
       user: state.user,
     }
  }

export default connect(mapStateToProps, {getUser})(App);
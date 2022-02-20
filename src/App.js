import React, { Component }from "react";
import { connect } from 'react-redux';
import { getUser } from './actions/login';
import  auth  from './auth'
import LandingPage from "./components/UX/LandingPage/LandingPage";
import { Route, Link, Redirect } from "react-router-dom";
import SignUp from './components/Auth/Signup';
import Login  from './components/Auth/Login';
import Logout  from './components/Auth/Logout';
import Items  from './components/Items/Items';

class App extends Component {

  // componentDidMount() {
  //   debugger
  //   auth.isAuthenticated() ? <Link to="/items" /> : <Link to="/" />
  // }


    render() {
      debugger
      return (
        <>
        {auth.isAuthenticated() ? <Redirect to ="/items" /> : null}
        <Route path="/" component={LandingPage} exact />
        <Route exact path="/items" component={Items} />
        <Route exact path="/log-in" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/log-out" component={Logout} />
        </>
      )
    }
  }
  
  // const mapDispatchToProps =  {
  //   getUser,
  // };  
  
export default App;
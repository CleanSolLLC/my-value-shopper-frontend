import React, { Component }from "react";
import { connect } from 'react-redux';
import { getUser } from './actions/login';
import { getUserItems } from './actions/items';
import  auth  from './auth'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from "./components/UX/LandingPage/LandingPage";
import { Route} from "react-router-dom";
import SignUp from './components/Auth/Signup';
import Login  from './components/Auth/Login';
import Logout  from './components/Auth/Logout';
//import './index.css';
//import { Redirect } from 'react-router';
import Items  from './components/Items/Items';
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
  
  const mapDispatchToProps =  {
    getUser,
    getUserItems,
  };  
  
export default connect(null, mapDispatchToProps)(App);
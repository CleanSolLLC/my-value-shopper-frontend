import React, { Component } from "react";
import  auth  from "./auth"
import { Redirect } from "react-router-dom";
import Header from "./components/UX/Header";
import { connect } from "react-redux";
import RoutePath from "./components/UX/RoutePath";

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

    componentDidMount() {
      {auth.isAuthenticated() ? <Redirect to="/items" /> : <Redirect to ="/" /> }
    }

    render() {
      return (
        <> 
        <Header />
        {auth.isAuthenticated() ? <Redirect to="/items" /> : <Redirect to ="/" /> }
        <RoutePath error={this.error}/>
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

export default connect(mapStateToProps)(App);
import React, { Component }from "react";
import { connect } from 'react-redux';
import Navigation from './Navigation'
import { getUser } from './actions/login';

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('jwt') !== null) {
      this.props.getUser();
    }
  }
   render() {
     return (
       <Navigation />  
     )  
   }  
}
const mapStateToProps = (state) => {
  return {
    loggedin: state.loggedin
  }
}
export default connect(mapStateToProps, {getUser})(App);
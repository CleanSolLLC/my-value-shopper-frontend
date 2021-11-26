import React, { Component }from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import Navigation from './Navigation'
import { getUser } from './actions/loginUser';

class App extends Component {
  componentDidMount() {
    this.props.getUser()
  }
   render() {
     return (
       <Navigation />  
     )  
   }  
}
export default connect(null, {getUser})(App);
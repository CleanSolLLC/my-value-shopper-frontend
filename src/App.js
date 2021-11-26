import React, { Component }from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import Main from './Main'
import { getUser } from './actions/loginUser';

class App extends Component {
  componentDidMount() {
    this.props.getUser()
  }
   render() {
     return (
       <Main />  
     )  
   }  
}
export default connect(null, {getUser})(App);
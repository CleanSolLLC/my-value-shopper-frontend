import React, { Component }from "react";
import { connect } from 'react-redux';
import { getUser } from './actions/login';
import { SignUp } from './components/signup.component';
import Navigation from './navigation'
//import { setLoggedIn } from '../actions/setlogin';

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('jwt') !== null) {
      this.props.getUser();
      //console.log(this.state.loggedin);
      < SignUp />
    }
  }
   render() {
    return <Navigation />
   }  
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    loggedin: state.loggedin
  }
}
export default connect(mapStateToProps, {getUser})(App);
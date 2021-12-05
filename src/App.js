import React, { Component }from "react";
import { connect } from 'react-redux';
import { getUser } from './actions/login';
//import { SignUp } from './components/signup.component';
import { Redirect } from 'react-router';
import Items  from './components/items.component';
//import { setLoggedIn } from '../actions/setlogin';

class App extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
    if (localStorage.getItem('jwt') !== null) {
      this.props.getUser();
  
      this.setState({
        redirect: true,
      })
      return <Redirect to='/items'/>
    }
  }
   render() {
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to='/items'/>;
      }
      < Items />
      return <div></div>
   }  
}
const mapStateToProps = (state) => {
  return {
    loggedin: state.loggedin
  }
}
export default connect(mapStateToProps, {getUser})(App);
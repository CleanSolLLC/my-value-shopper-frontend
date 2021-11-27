import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sessionLogout } from '../actions/logout';

class Logout extends Component {

    componentDidMount() {
       this.props.sessionLogout()
    }
      
    render() {
      return(
          <div></div>
      )  
    }
}
export default connect(null, {sessionLogout})(Logout);
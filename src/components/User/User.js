import React, { Component } from "react";
import { connect } from "react-redux";
import auth from "../../auth";
import { getUser } from "../../actions/login";
import Header from "../UX/Header";

class User extends Component {

  state = {
    loggedIn: "",
  }

  setUserInfo = () => {
    if(auth.isAuthenticated()) {
      getUser()
      this.setState({
         loggedIn: true,
      })
    }
  }

  render() {
    return (
    <div>
       {this.setUserInfo} 
       <Header loggedIn={this.props.loggedIn} user={this.props.User} />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      loggedIn: state.loggedIn,
  }
}

export default connect(mapStateToProps)(User);


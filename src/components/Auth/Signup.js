import React, { Component } from "react";
import { newUser } from '../../actions/signup';
import { Redirect } from 'react-router';
import Items  from '../Items/Items';
//import { getUser } from '../actions/login';
import { connect } from 'react-redux';
//import {useSelector, useDispatch } from 'react-redux';


class SignUp extends Component {

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newUser(this.state);
        //getUser();
      }
    render() {
      console.log(this.state)
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to='/items'/>;
      }
      < Items />;
        return (
          <div className="auth-wrapper" style={{background: "#8bafdf"}}>
            <form className="auth-inner" onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username" onChange={this.handleChange}
                       value={newUser.username} placeholder="Username" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" onChange={this.handleChange}
                       value={newUser.email} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onChange={this.handleChange}
                       value={newUser.password} placeholder="Enter password" />
                </div>
                <br></br>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>

            </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      signupUser: state.newUser
    };
  };
export default connect(mapStateToProps, {newUser})(SignUp);

import React, { Component } from "react";
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginUser'

class Login extends Component {

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
        this.props.loginUser(this.state)

      }



    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input ref="email" type="email" className="form-control" name="email" onChange={this.handleChange}
                       value={loginUser.email} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input ref="password" type="password" className="form-control" name="password" onChange={this.handleChange}
                       value={loginUser.password} placeholder="Enter password" />
                </div>
                <br></br>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>

            </form>
        );
    }
}
const mapStateToProps = state => {
    return {
      loginUser: state.loginUser
    };
  };

export default connect(mapStateToProps, {loginUser})(Login);
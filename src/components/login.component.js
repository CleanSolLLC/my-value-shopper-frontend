import React, { Component } from "react";
import { connect } from 'react-redux';
//import { loginUser } from '../actions/loginUser'

class Login extends Component {
    constructor(props) {
      super(props)
      this.state = {
        email: '',
        username: ''
      } 
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        console.log(this.state)
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
                       value={this.state.email} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input ref="password" type="password" className="form-control" name="password" onChange={this.handleChange}
                       value={this.state.password} placeholder="Enter password" />
                </div>
                <br></br>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <button type="submit" className="btn btn-primary btn-block">Submit</button>

            </form>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      loginUser: (formData) => dispatch({ type: "LOGIN_USER", payload: formData }),
    };
  };

export default connect(null, mapDispatchToProps)(Login);
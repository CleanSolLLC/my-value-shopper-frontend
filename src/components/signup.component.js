import React, { Component } from "react";
import { newUser } from '../actions/signup';
import { connect } from 'react-redux';

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
        this.props.newUser(this.state)

      }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
        );
    }
}

const mapStateToProps = state => {
    return {
      signupUser: state.newUser
    };
  };
export default connect(mapStateToProps, {newUser})(SignUp);

import React, { Component } from "react";
import { connect } from 'react-redux';
import { loginUser } from '../../actions/login';
import { Redirect } from 'react-router';
import Items  from '../Items/Items';
import '../../index.css';
import '../../bootstrap.min.css';

class Login extends Component {

  state = {
    redirect: false
  }

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

        this.setState({
          redirect: true,
        })
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
            <form className="auth-inner" onSubmit = {this.handleSubmit}>
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
            </div>
        );


    }
}
const mapStateToProps = state => {
    return {
      loginUser: state.loginUser
    };
  };

export default connect(mapStateToProps, {loginUser})(Login);
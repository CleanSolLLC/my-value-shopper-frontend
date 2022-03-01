import React, { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import { loginUser } from '../../actions/login';
import { clearServerError } from '../../actions/clearServerError';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from "./loginSchema";

const Login = (props) => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [errorVisible, setErrorVisible] = useState(false)

  const onSubmit = (data, e) => {
    e.preventDefault();
    props.loginUser(data)
    if (props.error) {
      setErrorVisible(true);
      reset() 
      props.clearServerError()
    }else {
        setErrorVisible(false)
        return <Redirect to='/items'/>;
      }
  }

  const hideErrorMsg = () => {
    setErrorVisible(false);
  }
        return (
          <div className="auth-wrapper" style={{background: "#8bafdf"}}>
            <form className="auth-inner"  onSubmit = {handleSubmit(onSubmit)}>
              <p> {errorVisible ? props.error : null}</p>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input {...register("email")} type="text" className="form-control .was-validated" name="email"
                       placeholder="Enter email" onFocus={hideErrorMsg}
                    />
                    <p>{errors.email?.message}</p> 
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input {...register("password")} type="password" className="form-control" name="password"
                       placeholder="Enter password" onFocus={hideErrorMsg}
                    />
                      <p>{errors.password?.message}</p>
                </div>
                <br></br>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>

            </form>
            </div>

        );
}

const mapStateToProps = (state) => {
  return {
    error: state.user.authError
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      loginUser: loginUser,
      clearServerError: clearServerError,

    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
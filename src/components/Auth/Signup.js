import React, { Component } from "react";
import { newUser } from '../../actions/signup';
import { Redirect } from 'react-router';
import '../../index.css';
import '../../bootstrap.min.css'; 
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "./schema";
import { connect } from 'react-redux';


const SignUp = (props) => {
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

    const onSubmit = handleSubmit(data => props.newUser(data));
        return (
          <div className="auth-wrapper" style={{background: "#8bafdf"}}>
            <form className="auth-inner" onSubmit={onSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input {...register("username")} type="text" className="form-control" name="username"
                       placeholder="Enter Username" />
                      <p className="error-message">{errors.username?.message}</p>
                </div>                

                <div className="form-group">
                    <label>Email address</label>
                    <input {...register("email")} type="text" className="form-control .was-validated" name="email" id="email"
                       placeholder="Enter email" 
                    />
                    <p>{errors.email ?.message}</p> 
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input {...register("password")} type="password" className="form-control" name="password"
                       placeholder="Enter password" />
                      <p className="error-message">{errors.password?.message}</p>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input {...register("confirmPassword")} type="password" className="form-control" name="confirmPassword"
                       placeholder="Confirm password" />
                      <p className="error-message">{errors.confirmPassword && "Passwords Do Not Match!"}</p>
                </div>

                <br></br>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
            </div>
        );
}

export default connect(null, {newUser})(SignUp);

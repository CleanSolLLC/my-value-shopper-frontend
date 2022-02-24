import React from "react";
import { connect } from 'react-redux';
import { loginUser } from '../../actions/login';
import '../../index.css';
import '../../bootstrap.min.css'; 
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "./schema";

const Login = (props) => {
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

    const onSubmit = handleSubmit(data => props.loginUser(data));

        return (
          <div className="auth-wrapper" style={{background: "#8bafdf"}}>
            <form className="auth-inner"  onSubmit = {onSubmit}>
                <h3>Sign In</h3>

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
                <br></br>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>

            </form>
            </div>

        );
}

export default connect(null,{loginUser})(Login);
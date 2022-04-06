import React, { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newUser, errorMsg, clearServerError } from '../../actions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from "../../schemas/signupSchema";



const SignUp = ({
  error,
  clearServerError,
  newUser,

}) => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: yupResolver(signupSchema),
  });

  const [errorVisible, setErrorVisible] = useState(false)

  const onSubmit = (data, e) => {
    e.preventDefault();
    const {confirmPassword, ...createData} = data
    newUser(createData)

    if (error) {
      setErrorVisible(true);
      reset() 
      clearServerError()
    }else {
       setErrorVisible(false);
      }
  }

  const hideErrorMsg = () => {
    setErrorVisible(false);
  }
        return (
          <div className="auth-wrapper" style={{background: "#8bafdf"}}>
            <form className="auth-inner" onSubmit = {handleSubmit(onSubmit)}>
            <p> {errorVisible ? error : null}</p>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input {...register("username")} type="text" className="form-control .was-validated" name="username"
                       placeholder="Enter Username" onFocus={hideErrorMsg}
                    />
                    <p>{errors.username?.message}</p>
                </div>                

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

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input {...register("confirmPassword")} type="password" className="form-control" name="confirmPassword"
                       placeholder="Confirm password" onFocus={hideErrorMsg}
                    />
                   <p>{errors.confirmPassword && "Passwords Do Not Match!"}</p>
                </div>

                <br></br>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
            </div>
        );
}

const mapStateToProps = (state) => {
  return {
    error: state.authError
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      newUser: newUser,
      clearServerError: clearServerError,

    }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);

import React, { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, clearServerError } from '../../actions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from "../../schemas/loginSchema";
import { Link} from "react-router-dom";


const Login = ({ 
    error,
    clearServerError,
    loginUser,
}) => {

  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [errorVisible, setErrorVisible] = useState(false)

  const onSubmit = (data, e) => {
    e.preventDefault();
    loginUser(data);

    if (error) {
      setErrorVisible(true);
      reset()
      clearServerError()
    }else {
      setErrorVisible(false)
    }

  }

  const hideErrorMsg = () => {   
    return setErrorVisible(false);
  }
        return (
          <div className="auth-wrapper" style={{background: "#8bafdf"}}>
            <form className="auth-inner"  onSubmit = {handleSubmit(onSubmit)}>
              <p> {errorVisible ? error : null}</p>
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

                <button type="submit" className="btn btn-primary btn-block">LOG IN</button><br></br>
                <div>
                  <h6 style={{color: "blue" }}><Link to="/sign-up">SIGN UP</Link></h6>
                </div>

            </form>
            </div>

        );
}

const mapStateToProps = (state) => {
  return {
    error: state.authError, 
    //items: state.user.items
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      loginUser: loginUser,
      clearServerError: clearServerError,

    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
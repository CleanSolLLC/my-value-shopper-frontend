import { logoutUser } from '../../actions/logout';
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router';
//import LandingPage from '../UX/LandingPage/LandingPage';


const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logoutUser());
  localStorage.clear();

  return <Redirect to='/'/>;


  //return "Logged Out Successfully";

}

export default Logout

import { logoutUser } from '../../actions/logout';
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router';

const Logout = () => {
  localStorage.clear();
  const dispatch = useDispatch();
  dispatch(logoutUser());


  return <Redirect to='/'/>;

}

export default Logout

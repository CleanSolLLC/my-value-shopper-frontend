import { logoutUser } from '../../actions/logout';
import { useDispatch } from 'react-redux'

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logoutUser());
  localStorage.clear();

  return "Logged Out Successfully";
}

export default Logout

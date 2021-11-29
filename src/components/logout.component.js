import { logoutUser } from '../actions/logout';
import { useDispatch } from 'react-redux'

export const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logoutUser());
  localStorage.clear();

  return "Logged Out Successfully";
}

import { combineReducers } from "redux";
import user from './user';
import isloggedin from './isloggedin';


export default combineReducers({
  user: user,
  loggedin: isloggedin
});
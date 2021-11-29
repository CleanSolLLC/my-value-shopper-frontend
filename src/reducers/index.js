import { combineReducers } from "redux";
import user from './user';
import loggedinReducer from './isloggedin';


export default combineReducers({
  user: user,
  loggedin: loggedinReducer
});
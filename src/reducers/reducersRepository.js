import { combineReducers } from "redux";
import userReducer from './userReducer';
//continue to add pointers to reducers here

export default combineReducers({
  user: userReducer
});
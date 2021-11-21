import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from './reducers/categoryReducer'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const reducer  = combineReducers({
    categories: categoryReducer
  });

  let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

  export default store;


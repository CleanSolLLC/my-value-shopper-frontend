import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import index from './reducers'

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
let store = createStore(index, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;




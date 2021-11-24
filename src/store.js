import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducersRepository from './reducers/reducersRepository'

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
let store = createStore(reducersRepository, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;




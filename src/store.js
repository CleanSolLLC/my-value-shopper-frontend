import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import index from './reducers'; 

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'main-root', 
    storage,
  }

const persistedReducer = persistReducer(persistConfig, index)
  
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
const Persistor = persistStore(store)
//return { store, Persistor } 

export{Persistor}
export default store;




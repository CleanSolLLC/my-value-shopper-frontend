import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import './bootstrap.min.css';
import App from './App';
import store, { Persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <Router>
    <Provider store = {store}>
    <PersistGate Loading={null} persistor={Persistor}>
      <App />
    </PersistGate>
    </Provider>
  </Router>,

  document.getElementById('root')
);

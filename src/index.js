import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App';
import store from './store';



ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <App /> 
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
);

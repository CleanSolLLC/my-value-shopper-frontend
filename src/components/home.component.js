//import React from 'react';
import auth from '../auth';
//import Items from './items.component';
//import Login from './items.component';


export const Home = (props) => {

  if (auth.login()) { 
    props.history.push('/items')
  }else {
    props.history.push('/sign-in') 
  }
  return null
}

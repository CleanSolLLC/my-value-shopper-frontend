import { LOGIN_USER } from './types';

export const loginUser = (userData) => dispatch => {
    fetch('http://localhost:3001/api/v1/sessions', {
      method: 'POST',
      headers:{
       'Content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
    .then(user => dispatch(
      {
        type: LOGIN_USER,
        payload: user

      }))
};

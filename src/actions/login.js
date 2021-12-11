//import { getUserItems } from './items';

export const getCurrentUser = (data=null) =>  {
  return {
    type: 'GET_CURRENT_USER',
    payload: data.user
  }
}

export const getUser = () => dispatch => {
  const token = localStorage.getItem("jwt");  
  fetch("http://localhost:3001/api/v1/profile", {

    method: "GET",
    headers: {
    Authorization: `Bearer ${token}`,
    },
  })
  .then(resp => resp.json())
  .then(data => {
    dispatch(getCurrentUser(data))
  })
}

  export const loginUser = (formData) => dispatch => {
    fetch('http://localhost:3001/api/v1/login', {
  
      method: 'POST',
      headers:{
       'Content-type': 'application/json',
       "Accept": "application/json",
      },
      body: JSON.stringify({user: formData})
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
      localStorage.setItem('jwt', data.jwt)
      dispatch(getCurrentUser(data)) 


      }
    })
    .catch(console.log)
  };
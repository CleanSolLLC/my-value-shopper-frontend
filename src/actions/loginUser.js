export const setCurrentUser = user =>  {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const getCurrentUser = user =>  {
  return {
    type: 'GET_CURRENT_USER',
    user
  }
}

export const loginUser = (formData) => dispatch => {
    fetch('http://localhost:3001/api/v1/sessions/login ', {
      credentials: 'include',
      method: 'POST',
      headers:{
       'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
      dispatch(setCurrentUser(user)) 
      }
    })
    .catch(console.log)
  };

  export const getUser = () => dispatch => {
    return fetch('http://localhost:3001/api/v1/sessions/get_current_user ', {
    credentials: 'include',  
    method: 'GET',
      headers:{
       'Content-type': 'application/json'
      },
    })
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
      dispatch(getCurrentUser(user)) 
      }
    })
    .catch(console.log)
  };
export const errorMsg = (data=null) => {
  return {
  type:  "CREATE_ERROR_MSG",
  payload: data.error
  }
}

export const setCurrentUser = (data=null) =>  {
  return {
    type: 'SET_CURRENT_USER',
    user: data.user
  }
}

export const newUser = (formData) => dispatch => {
    fetch('http://localhost:3001/api/v1/users', {
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
        dispatch(errorMsg(data))
      } else {
      localStorage.setItem('jwt', data.jwt)
      dispatch(setCurrentUser(data))
      }
    })
    .catch(console.log)
  };



  
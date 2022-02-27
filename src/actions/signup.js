export const errorMsg = (data=null) => {
  return {
  type:  "CREATE_ERROR_MSG",
  payload: data.error
  }
}

export const createUser = (data) =>  {
  return {
    type: "CREATE_USER",
    payload: data.user
  }
}

export const newUser = (formData) => dispatch => {
    fetch('http://localhost:3001/api/v1/users', {
      //credentials: 'include',
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
      dispatch(createUser(data))
      }
    })
    .catch(console.log)
  };



  
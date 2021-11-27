export const createUser = () =>  {
  return {
    type: "CREATE_USER",
  }
}

export const newUser = (formData) => dispatch => {

    fetch('http://localhost:3001/api/v1/users', {
      credentials: 'include',
      method: 'POST',
      headers:{
       'Content-type': 'application/json',
       "Accept": "application/json",
      },
      body: JSON.stringify({user: formData})
    })
    .then(resp => resp.json())
    .then(data => {
      // save the token to localStorage for future access
      localStorage.setItem('jwt', data.jwt);
      // save the user somewhere (in state!) to log the user in

    })
    .catch(console.log)
      //dispatch({ type: CREATE_USER_ERROR })
    //)
};



  
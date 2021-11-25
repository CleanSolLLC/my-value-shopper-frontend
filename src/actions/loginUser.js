export const setCurrentUser = user =>  {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const loginUser = (formData) => dispatch => {
    fetch('http://localhost:3001/api/v1/sessions/login ', {
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

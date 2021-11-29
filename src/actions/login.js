export const getCurrentUser = (data) =>  {
  return {
    type: 'GET_USER',
    payload: data.user
  }
}

export const isLoggedin = () =>  {
  return {
    type: 'SIGN_IN'
  }
}

export const getUser = () => dispatch => {
  const token = localStorage.getItem("jwt");  
  fetch("http://localhost:3001/api/v1/profile", {
    //credentials: 'include',
    method: "GET",
    headers: {
    Authorization: `Bearer ${token}`,
    },
  })
  .then(resp => resp.json())
  .then(data => {
    dispatch(getCurrentUser(data))
    console.log(data)
  })
}

  export const loginUser = (formData) => dispatch => {
    fetch('http://localhost:3001/api/v1/login', {
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
        alert(data.error)
      } else {
      localStorage.setItem('jwt', data.jwt)
      dispatch(isLoggedin())
      dispatch(getCurrentUser(data)) 

      }
    })
    .catch(console.log)
  };
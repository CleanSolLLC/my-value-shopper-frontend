export const errorMsg = (data=null) => {
  return {
  type:  "CREATE_ERROR_MSG",
  payload: data.error
  }
}

export const setUserItem = (data) =>  {
    return {
      type: 'SET_ITEMS',
      payload: data
    }
  }

export const changeUserItem = (data) => {
  return {
    type: "CHANGE_ITEM",
    payload: data
  }
} 

export const getUserItems = () => dispatch => {
    const token = localStorage.getItem("jwt");  
    fetch("http://localhost:3001/api/v1/items", {
      //credentials: 'include',
      method: "GET",
      headers: {
      Authorization: `Bearer ${token}`,
      },
    })
    .then(resp => resp.json())
    .then(data => {
     dispatch(setUserItem(data))
    })

    .catch(console.log)
  }

  export const createUserItem = (formData) => dispatch => {
    const token = localStorage.getItem("jwt");
    fetch('http://localhost:3001/api/v1/items', {
      method: 'POST',
      headers:{ 
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      },

      body: JSON.stringify({user: formData})
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        dispatch(errorMsg(data))
      } else {
      localStorage.setItem('jwt', data.jwt)
      dispatch(getUserItems)
      }
    })
    .catch(console.log)
  };

  export const updateUserItem = (formData, id) => dispatch => {
    const token = localStorage.getItem("jwt");
    fetch(`http://localhost:3001/api/v1/items/${id}`, {
      method: 'PATCH',
      headers:{ 
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      },

      body: JSON.stringify({user: formData})
    })
    .then(resp => resp.json())
    .then(data => {

      if (data.error) {
        dispatch(errorMsg(data))
      } else {
      //localStorage.setItem('jwt', data.jwt)
      dispatch(changeUserItem(data))
      //dispatch(getUserItems)
      }
    })
    .catch(console.log)
  };
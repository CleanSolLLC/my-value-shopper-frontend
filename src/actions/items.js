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

export const removeUserItem = (data) => {
  return {
    type: "DELETE_ITEM",
    payload: data
  }
}

export const addUserItem = (data) => {
  return {
    type: "ADD_ITEM",
    item: data
  }
} 

export const dataLoading = () => {
  return {
    type: "DATA_LOADING"
  }
}

export const dataLoadComplete = () => {
  return {
    type: "LOAD_COMPLETE"
  }
}

export const getUserItems = () => dispatch => {
    const token = localStorage.getItem("jwt");  
    fetch("http://localhost:3001/api/v1/items", {
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
    dispatch(dataLoading())
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
      dispatch(addUserItem(data))
      dispatch(dataLoadComplete()) 
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
      dispatch(changeUserItem(data))
      }
    })
    .catch(console.log)
  };

  export const deleteUserItem = (url, id) => dispatch => {
    dispatch(removeUserItem(id))
    const token = localStorage.getItem("jwt");
    fetch(`http://localhost:3001/api/v1` + `${url}`, {
      method: 'DELETE',
      headers:{ 
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      },

      // body: JSON.stringify({user: formData})
    })
    .then(resp => resp.json())
    .then(data => {

      if (data.error) {
        dispatch(errorMsg(data))
      }
    })
    .catch(console.log)
  };
export const setUserItems = (data) =>  {
    console.log(data)
    return {
      type: 'SET_ITEMS',
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
     dispatch(setUserItems(data))
    })

    .catch(console.log)
  }
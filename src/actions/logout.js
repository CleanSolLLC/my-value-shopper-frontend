export const logout = () => {
 return {
   type: 'DELETE_CURRENT_USER'
 } 
}



export const sessionLogout = () => {
  return(dispatch) => {
     dispatch(logout())
  
  return fetch('http://localhost:3001/api/v1/logout',{
    credentials: 'include',  
    method: 'DELETE',
    })
}
    // .then(resp => resp.json())
    // .then(data => {
    //    if(data["session"] === {}) {
    //      logout(data)
    //      console.log(data)
    //    }   
    // })
}

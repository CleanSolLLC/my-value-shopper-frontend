export const logoutUser = () => {
 return {
   type: 'LOGOUT_USER'
 } 
}

// export const sessionLogout = () => dispatch {
//   debugger
//   dispatch(logout())
//   localStorage.clear();
// }
  
//**************** Do we need to logout on the server ****************************     
//   return fetch('http://localhost:3001/api/v1/logout',{
//     //credentials: 'include',  
//     method: 'DELETE',
//     })
// }
    // .then(resp => resp.json())
    // .then(data => {
    //    if(data["session"] === {}) {
    //      logout(data)
    //      console.log(data)
    //    }   
    // })

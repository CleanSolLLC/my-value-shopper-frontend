const userReducer = (state = null, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        user: action.payload,
      }
    case "GET_USER":
      return {
        user: action.payload,
        loggedin: true
      }
        
    case "LOGOUT_USER":
      return {
        user: null,
        loggedin: false
      }
    // case "LOGGED_IN":
    //   return {
    //     loggedin: true
    //   }

    default:
      return state; 
  }
} 
export default userReducer;
  

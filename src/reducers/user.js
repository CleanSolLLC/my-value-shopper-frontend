const userReducer = (state = null, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        user: action.payload,
      }
    case "GET_CURRENT_USER":
      return {
        user: action.payload,
        loggedIn: true
      }
        
    case "LOGOUT_USER":
      return {
        user: null,
        loggedIn: false
      }  

    default:
      return state; 
  }
} 
export default userReducer;
  

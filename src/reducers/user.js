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
   
    case "CREATE_ERROR_MSG":
      return {
        authError: action.payload
      }  

    case "CLEAR_ERROR_MSG":
      return {
        authError: null
      }    

    default:
      return state; 
  }
} 
export default userReducer;
  

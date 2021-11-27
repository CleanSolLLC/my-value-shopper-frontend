const userReducer = (state = null, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        user: action.payload,
        jwt:  localStorage.getItem('jwt')
      }
    case "LOGIN_USER":
      return {
        //user: action.user
      }
        
    case "LOGOUT_USER":
      return {
        //user: action.user
      }

    default:
      return state; 
  }
} 
export default userReducer;
  

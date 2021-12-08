const userReducer = (state = null, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        user: action.payload,
      }
    case "GET_USER":
      return {
        user: action.payload,
      }
        
    case "LOGOUT_USER":
      return {
        user: null,
      }

    default:
      return state; 
  }
} 
export default userReducer;
  

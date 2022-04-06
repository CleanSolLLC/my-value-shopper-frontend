const userReducer = (state = null, action) => {
  switch (action.type) {
    case "CREATE_USER":
     return action.user
      
    case "SET_CURRENT_USER":
      return action.user
        
    case "LOGOUT_USER":
      return {
        user: null,
        items: null,
      }

    case "ADD_USER_ITEM":
      return {
        ...state,
        items: [...action.payload]
    } 
    
    case "DATA_LOADING":
      return {
        ...state,
        pending: true
      }  
      
    case "LOAD_COMPLETE":
      return {
        ...state,
        pending: false
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
  

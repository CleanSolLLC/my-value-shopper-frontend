
export default function currentUser(state = null, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        user: action.user
      }

    case "GET_CURRENT_USER":
      return {
        user: action.user
      }

    case "DELETE_CURRENT_USER":
      return null  
      
    case "CREATE_NEW_USER":
      return {
        user: action.user
      }

     default:
       return state;     
  }    
}
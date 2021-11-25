
export default function currentUser(state = null, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        user: action.user
      }
     default:
       return state;     
  }    
}
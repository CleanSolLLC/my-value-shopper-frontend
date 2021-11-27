export default function user(state = null, action) {
    console.log(state)
    console.log(action)
    switch (action.type) {
      case "CREATE_USER":
        return {
          user: action.user
        }
       default:
         return state; 
     }
}  
  

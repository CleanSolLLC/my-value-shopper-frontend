const loggedinReducer = (state = false, action) => {
  
  switch(action.type) {
    case "SIGN_IN":
      return { 
        loggedin: !state
      }

    default:
       return state;       
  }    
}
export default loggedinReducer;
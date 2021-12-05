const loggedinReducer = (state = false, action) => {
    switch (action.type) {
      case "LOGGED_IN":
        return {
          loggedin: !state 
        }
        default:
       return state;
    }
}

export default loggedinReducer;
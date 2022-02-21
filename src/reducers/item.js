const itemReducer = (state = null, action) => {
  switch(action.type) {
    case "SET_ITEMS":
      return { 
        items: action.payload
      }
    case "LOGOUT_USER":
      return {
        items: null
      } 
     default: return state;
    }
}

export default itemReducer;
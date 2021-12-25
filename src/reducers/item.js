const itemReducer = (state = null, action) => {
  switch(action.type) {
    case "SET_ITEMS":
      return { 
      items: action.payload
      } 
     default: return state;
    }
}

export default itemReducer;
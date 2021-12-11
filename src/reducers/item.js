const itemReducer = (state = null, action) => {
  switch(action.type) {
     case "SET_USER_ITEMS": 
       return {
         item: action.payload  
       }  
     default: return state;
    }
}

export default itemReducer;
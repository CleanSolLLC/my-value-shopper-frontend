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
        authError: null
      }

    case "ADD_USER_ITEM":
      return {
        ...state,
        items: [...action.payload]
    }

    case "CHANGE_ITEM":
      debugger
      let { id, app_sale_price, discount } = action.payload
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.app_sale_price = app_sale_price
          item.discount = discount
          return {
            ...state,
            items: state.item
          }  
        }
      })

      case "DELETE_ITEM":
        return {
          ...state,
          items: state.items.filter(item=> item.id !== action.payload)
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
        ...state,
        authError: action.payload
      }  

    case "CLEAR_ERROR_MSG":
      return {
        ...state,
        authError: null
      }    

    default:
      return state; 
  }
} 
export default userReducer;
  

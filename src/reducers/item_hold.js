const itemReducer = (state = null, action) => {
  switch(action.type) {
    case "SET_ITEMS":
      return { 
        items: action.payload
      }

    case "CHANGE_ITEM":
        let { id, app_sale_price, discount } = action.payload
        state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.app_sale_price = app_sale_price
            item.discount = discount
          }
        })
        return {
          items: state.items
        }

    case "ADD_USER_ITEM":
      return {
        ...state,
        items: [...action.item]
      }

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

    case "LOGOUT_USER":
      return {
        items: null
      } 
     default: return state;
    }
}

export default itemReducer;
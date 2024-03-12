// src/redux/addToCartReducer.js
const initialState = {
    counter: null,
    cart: [],
    id: ''

  };
  
  const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADDTOCART':
        
        return { ...state, cart: [...state.cart, action.payload], counter: state.counter + 1 };

    case 'postId':
      let resultCart =   state.cart.filter(item=>item.id!==action.payload)
      console.log("RES CARt Red >>, ", resultCart)
      return {...state,cart:[...resultCart], counter : resultCart?.length};

      default:
        return state;
    }

  };
  
  export default addToCartReducer;
  
// const cart = [];

// const handleCart =(state = cart,action) =>{
//     const product = action.payload;
//     switch(action.type){
//         case "ADDITEM":
//             //Check if Product is Already Exist
//             const exist = state.find((x)=> x.id === product.id);
//             if(exist){
//                 return state.map((x)=>
//                 x.id === product.id ? {...x,qty: x.qty + 1} : x );
//             }else{
//                 const product = action.payload;
//                 return[
//                     ...state,
//                     {
//                         ...product,
//                         qty: 1,
//                     }
//                 ]
//                 }
//                 break;
//                 case "DELITEM":
//                     const exist1 = state.find((x)=> x.id === product.id);
//                     if(exist1.qty ===1){
//                         return state.filter((x)=>x.id !== exist1.id);

//                     }else{
//                         return state.map((x)=>
//                         x.id === product.id ? {...x,qty:x.qty-1}:x
//                         );
                        
//                     }
//                     break;
//                 default:
//                     return state;
//                     break;
//             }
//     }   


// cartReducer.js

const initialState = {
    cartItems: []
  };
  
  const handleCart = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        };
        case 'INCREMENT_QUANTITY':
            return {
              ...state,
              cartItems: state.cartItems.map(item => 
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
              )
            };
          case 'DECREMENT_QUANTITY':
            return {
              ...state,
              cartItems: state.cartItems.map(item => 
                item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
              )
            };
      default:
        return state;
    }
  };
  
  export default handleCart;
  
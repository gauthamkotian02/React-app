//For Add Item to Cart
// action.js

export const addCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product
    };
  };
  
//For Delete Item From Cart
export const delItem = (productId) => {
    return {
        type: "DELITEM",
        payload : productId
    };
};

export const incrementQuantity = (productId) => {
    return {
      type: 'INCREMENT_QUANTITY',
      payload: productId
    };
  };
  
  export const decrementQuantity = (productId) => {
    return {
      type: 'DECREMENT_QUANTITY',
      payload: productId
    };
  };
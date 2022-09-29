export const addCart = (payload) => {
    console.log(payload);
  return (dispatch) => {
    dispatch({ type: "ADD_CART", payload });
  };
};
export const updateCart = (payload) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_CART", payload });
  };
};
export const removeItem = (payload) => {
  return (dispatch) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };
};

export const increaseQuantity = (payload) => {
  return (dispatch) => {
    dispatch({ type: "INCREASE_QUANTITY", payload });
  };
};
export const decreaseQuantity = (payload) => {
  return (dispatch) => {
    dispatch({ type: "DECREASE_QUANTITY", payload });
  };
};

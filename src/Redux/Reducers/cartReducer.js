const initialState = {
  cart: [],
  numberCart: 0,
  message: "",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART": {
      const {product,amount} = action.payload;
      const index = state.cart.findIndex((x) => x.id === product.id);
      if (index >= 0) {
        state.cart[index].amount += 1;
      } else {
        // product.amount = 1;
        state.cart.push({product,amount});
      }
      console.log(state.cart);
      return {
        ...state,
        message: "Add to cart is successful",
        numberCart: state.numberCart + amount,
      };
    }
    case "INCREASE_QUANTITY": {
      const product = action.payload;
      const index = state.findIndex((x) => x.id === product.id);
      state.cart[index].amount++;
      return { ...state, numberCart: state.numberCart + 1 };
    }
    case "DECREASE_QUANTITY": {
      const product = action.payload;
      const index = state.findIndex((x) => x.id === product.id);
      state.cart[index].amount -= 1;
      return { ...state, numberCart: state.numberCart - 1 };
    }
    case "REMOVE_ITEM": {
      const product = action.payload;
      state.cart.filter((x) => x.id !== product.id);
      state.numberCart -= product.amount;
      return { ...state };
    }
    default:
      return state;
  }
};

export default cartReducer;

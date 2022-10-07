const initialState = {
  cart: [],
  numberCart: 0,
  total: 0,
  message: "",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART": {
      const { product, amount, size } = action.payload;
      const index = state.cart.findIndex((x) => x.product.id === product.id);
      const indexSize = state.cart.findIndex((x) => x.size.id === size.id);
      if (index >= 0 && indexSize >= 0) {
        state.cart[index].amount += amount;
      } else {
        state.cart.push({ product, amount, size });
      }
      return {
        ...state,
        message: "Add to cart is successful",
        numberCart: state.numberCart + amount,
        total: state.total + product.price_discounted * amount,
      };
    }
    case "INCREASE_QUANTITY": {
      const { product, size } = action.payload;
      const index = state.cart.findIndex(
        (x) => x.product.id === product.id && x.size.id === size.id
      );
      state.cart[index].amount++;
      return { ...state, numberCart: state.numberCart + 1, total: state.total + product.price_discounted };
    }
    case "DECREASE_QUANTITY": {
      const { product, size } = action.payload;
      const index = state.cart.findIndex(
        (x) => x.product.id === product.id && x.size.id === size.id
      );
      if (state.cart[index].amount > 1) {
        state.cart[index].amount -= 1;
        state.numberCart -= 1;
        state.total -= product.price_discounted 
      } else {
        state.cart[index].amount = 1;
      }
      return { ...state };
    }
    case "REMOVE_ITEM": {
      const { product, size, amount } = action.payload;
      const index = state.cart.findIndex(
        (x) => x.product.id === product.id && x.size.id === size.id
      );
      state.cart.splice(index, 1);
      state.numberCart -= amount;
      return { ...state, total: state.total - product.price_discounted*amount };
    }
    case "RESET_CART": {
      window.location.reload();
      return {...state}
    }
    default:
      return state;
  }
};

export default cartReducer;

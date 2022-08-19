const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_PRODUCTS_SUCCESS": {
      return { ...state, loading: false, products: action.payload.data };
    }
    case "GET_PRODUCTS_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "ADD_PRODUCT_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "ADD_PRODUCT_SUCCESS": {
      return { ...state, loading: false, error: null };
    }
    case "ADD_PRODUCT_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "UPDATE_PRODUCT_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "UPDATE_PRODUCT_SUCCESS": {
      return { ...state, loading: false, error: null };
    }
    case "UPDATE_PRODUCT_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "DELETE_PRODUCT_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "DELETE_PRODUCT_SUCCESS": {
      return { ...state, loading: false, error: null };
    }
    case "DELETE_PRODUCT_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
};

export default productReducer;

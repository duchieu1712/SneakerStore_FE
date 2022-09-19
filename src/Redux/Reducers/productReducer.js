const initialState = {
  products: [],
  product:{},
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_PRODUCTS_SUCCESS": {
      return { ...state, loading: false, products: action.payload.data.data };
    }
    case "GET_PRODUCTS_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }
    case "GET_PRODUCTBYID_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_PRODUCTBYID_SUCCESS": {
      return { ...state, loading: false, product: action.payload.data.data };
    }
    case "GET_PRODUCTBYID_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }
    case "FILTER_PRODUCTS_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "FILTER_PRODUCTS_SUCCESS": {
      return { ...state, loading: false, products: action.payload.data.data };
    }
    case "FILTER_PRODUCTS_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }
    case "ADD_PRODUCT_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "ADD_PRODUCT_SUCCESS": {
      return { ...state, loading: false, message: action.payload.data.message, error: null };
    }
    case "ADD_PRODUCT_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "UPDATE_PRODUCT_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "UPDATE_PRODUCT_SUCCESS": {
      return { ...state, loading: false, message: action.payload.data.message, error: null };
    }
    case "UPDATE_PRODUCT_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }
    case "DELETE_PRODUCT_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "DELETE_PRODUCT_SUCCESS": {
      return { ...state, loading: false, message: action.payload.data.message, error: null };
    }
    case "DELETE_PRODUCT_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
};

export default productReducer;

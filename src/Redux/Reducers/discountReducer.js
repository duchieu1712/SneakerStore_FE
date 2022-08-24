const initialState = {
  discounts: [],
  loading: false,
  error: null,
};

const discountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DISCOUNTS_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_DISCOUNTS_SUCCESS": {
      return { ...state, loading: false, discounts: action.payload.data };
    }
    case "GET_DISCOUNTS_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "ADD_DISCOUNT_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "ADD_DISCOUNT_SUCCESS": {
      return { ...state, loading: false, message: action.payload.data.message, error: null };
    }
    case "ADD_DISCOUNT_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "UPDATE_DISCOUNT_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "UPDATE_DISCOUNT_SUCCESS": {
      return { ...state, loading: false, message: action.payload.data.message, error: null };
    }
    case "UPDATE_DISCOUNT_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "DELETE_DISCOUNT_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "DELETE_DISCOUNT_SUCCESS": {
      return { ...state, loading: false, message: action.payload.data.message, error: null };
    }
    case "DELETE_DISCOUNT_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
};

export default discountReducer;

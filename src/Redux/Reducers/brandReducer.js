const initialState = {
  brands: [],
  message:"",
  loading: false,
  error: null,
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BRANDS_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_BRANDS_SUCCESS": {
      return { ...state, loading: false, brands: action.payload.data.data };
    }
    case "GET_BRANDS_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "ADD_BRAND_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "ADD_BRAND_SUCCESS": {
      return { ...state, loading: false, message: action.payload.data.message, error: null };
    }
    case "ADD_BRAND_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "UPDATE_BRAND_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "UPDATE_BRAND_SUCCESS": {
      return { ...state, loading: false, message: action.payload.data.message, error: null };
    }
    case "UPDATE_BRAND_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "DELETE_BRAND_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "DELETE_BRAND_SUCCESS": {
      return { ...state, loading: false, message: action.payload.data.message, error: null };
    }
    case "DELETE_BRAND_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
};

export default brandReducer;

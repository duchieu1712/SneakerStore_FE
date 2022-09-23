const initialState = {
  productSizeList: [],
  message: null,
  loading: false,
  error: null,
};

const productSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTSIZE_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_PRODUCTSIZE_SUCCESS": {
      return {
        ...state,
        loading: false,
        productSizeList: action.payload.data.data,
      };
    }
    case "GET_PRODUCTSIZE_FAILURE": {
      return { ...state, loading: false, error: action.payload.error.message };
    }

    case "ADD_PRODUCTSIZE_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "ADD_PRODUCTSIZE_SUCCESS": {
      return {
        ...state,
        loading: false,
        message: action.payload.data.message,
        error: null,
      };
    }
    case "ADD_PRODUCTSIZE_FAILURE": {
      return { ...state, loading: false, error: action.payload.error.message };
    }

    case "UPDATE_PRODUCTSIZE_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "UPDATE_PRODUCTSIZE_SUCCESS": {
      return {
        ...state,
        loading: false,
        message: action.payload.data.message,
        error: null,
      };
    }
    case "UPDATE_PRODUCTSIZE_FAILURE": {
      return { ...state, loading: false, error: action.payload.error.message };
    }

    case "DELETE_PRODUCTSIZE_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "DELETE_PRODUCTSIZE_SUCCESS": {
      return {
        ...state,
        loading: false,
        message: action.payload.data.message,
        error: null,
      };
    }
    case "DELETE_PRODUCTSIZE_FAILURE": {
      return { ...state, loading: false, error: action.payload.error.message };
    }
    default:
      return state;
  }
};

export default productSizeReducer;

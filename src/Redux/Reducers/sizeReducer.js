const initialState = {
  sizes: [],
  message: null,
  loading: false,
  error: null,
};

const sizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SIZES_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_SIZES_SUCCESS": {
      return { ...state, loading: false, sizes: action.payload.data.data };
    }
    case "GET_SIZES_FAILURE": {
      return { ...state, loading: false, error: action.payload.error.message };
    }

    case "ADD_SIZE_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "ADD_SIZE_SUCCESS": {
      return {
        ...state,
        loading: false,
        message: action.payload.data.message,
        error: null,
      };
    }
    case "ADD_SIZE_FAILURE": {
      return { ...state, loading: false, error: action.payload.error.message };
    }

    case "UPDATE_SIZE_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "UPDATE_SIZE_SUCCESS": {
      return {
        ...state,
        loading: false,
        message: action.payload.data.message,
        error: null,
      };
    }
    case "UPDATE_SIZE_FAILURE": {
      return { ...state, loading: false, error: action.payload.error.message };
    }

    case "DELETE_SIZE_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "DELETE_SIZE_SUCCESS": {
      return {
        ...state,
        loading: false,
        message: action.payload.data.message,
        error: null,
      };
    }
    case "DELETE_SIZE_FAILURE": {
      return { ...state, loading: false, error: action.payload.error.message };
    }
    default:
      return state;
  }
};

export default sizeReducer;

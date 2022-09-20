const initialState = {
  orderDetails: [],
  loading: false,
  error: null,
};

const orderDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDERDETAILS_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_ORDERDETAILS_SUCCESS": {
      return { ...state, loading: false, orderDetails: action.payload.data.data };
    }
    case "GET_ORDERDETAILS_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "ADD_ORDERDETAIL_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "ADD_ORDERDETAIL_SUCCESS": {
      return { ...state, loading: false, message: action.payload.data.message, error: null };
    }
    case "ADD_ORDERDETAIL_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "UPDATE_ORDERDETAIL_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "UPDATE_ORDERDETAIL_SUCCESS": {
      return { ...state, loading: false, message: action.payload.data.message, error: null };
    }
    case "UPDATE_ORDERDETAIL_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }

    case "DELETE_ORDERDETAIL_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "DELETE_ORDERDETAIL_SUCCESS": {
      return { ...state, loading: false, message: action.payload.data.message, error: null };
    }
    case "DELETE_ORDERDETAIL_FAILURE": {
      return { ...state, loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
};

export default orderDetailReducer;

const initialState = {
    orders: [],
    loading: false,
    error: null,
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ORDERS_REQUEST": {
        return { ...state, loading: true, error: null };
      }
      case "GET_ORDERS_SUCCESS": {
        return { ...state, loading: false, orders: action.payload.data };
      }
      case "GET_ORDERS_FAILURE": {
        return { ...state, loading: false, error: action.payload.error };
      }
  
      case "ADD_ORDER_REQUEST": {
        return { ...state, loading: true, error: null };
      }
      case "ADD_ORDER_SUCCESS": {
        return { ...state, loading: false, message: action.payload.data.message, error: null };
      }
      case "ADD_ORDER_FAILURE": {
        return { ...state, loading: false, error: action.payload.error };
      }
  
      case "UPDATE_ORDER_REQUEST": {
        return { ...state, loading: true, error: null };
      }
      case "UPDATE_ORDER_SUCCESS": {
        return { ...state, loading: false, message: action.payload.data.message, error: null };
      }
      case "UPDATE_ORDER_FAILURE": {
        return { ...state, loading: false, error: action.payload.error };
      }
  
      case "DELETE_ORDER_REQUEST": {
        return { ...state, loading: true, error: null };
      }
      case "DELETE_ORDER_SUCCESS": {
        return { ...state, loading: false, message: action.payload.data.message, error: null };
      }
      case "DELETE_ORDER_FAILURE": {
        return { ...state, loading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  };
  
  export default orderReducer;
  
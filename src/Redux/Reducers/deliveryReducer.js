const initialState = {
    deliveries: [],
    message: "",
    loading: false,
    error: null,
  };
  
  const deliveryReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_DELIVERIES_REQUEST": {
        return { ...state, loading: true, error: null };
      }
      case "GET_DELIVERIES_SUCCESS": {
        return { ...state, loading: false, deliveries: action.payload.data };
      }
      case "GET_DELIVERIES_FAILURE": {
          return {...state, loading: false, error: action.payload.error}
      }
  
      case "ADD_DELIVERY_REQUEST": {
          return {...state, loading: true, error: null}
      }
      case "ADD_DELIVERY_SUCCESS": {
          return {...state, loading: false, message: action.payload.data.message, error: null}
      }
      case "ADD_DELIVERY_FAILURE": {
          return {...state, loading: false, error: action.payload.error}
      }
  
      case "UPDATE_DELIVERY_REQUEST": {
          return {...state, loading: true, error: null}
      }
      case "UPDATE_DELIVERY_SUCCESS": {
          return {...state, loading: false, message: action.payload.data.message, error: null}
      }
      case "UPDATE_DELIVERY_FAILURE": {
          return {...state, loading: false, error: action.payload.error}
      }
  
      case "DELETE_DELIVERY_REQUEST": {
          return {...state, loading: true, error: null}
      }
      case "DELETE_DELIVERY_SUCCESS": {
          return {...state, loading: false, message: action.payload.data.message, error: null}
      }
      case "DELETE_DELIVERY_FAILURE": {
          return {...state, loading: false, error: action.payload.error}
      }
      default:
          return state;
    }
  };
  
  export default deliveryReducer;
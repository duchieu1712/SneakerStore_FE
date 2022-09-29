import deliveryAPI from "../../Services/deliveryAPI";

export const getDeliveries = () => {
    return (dispatch) => {
      dispatch({ type: "GET_DELIVERIES_REQUEST" });
      deliveryAPI
        .getDeliveries()
        .then((result) => {
          dispatch({
            type: "GET_DELIVERIES_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "GET_DELIVERIES_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
  
  export const addDelivery = (data) => {
    return (dispatch) => {
      dispatch({ type: "ADD_DELIVERY_REQUEST" });
      deliveryAPI
        .addDelivery(data)
        .then((result) => {
          dispatch({
            type: "ADD_DELIVERY_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "ADD_DELIVERY_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
  
  export const updateDelivery = (id,data) => {
    return (dispatch) => {
      dispatch({ type: "UPDATE_DELIVERY_REQUEST" });
      deliveryAPI
        .updateDelivery(id,data)
        .then((result) => {
          dispatch({
            type: "UPDATE_DELIVERY_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "UPDATE_DELIVERY_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
  
  export const deleteDelivery = (data) => {
    return (dispatch) => {
      dispatch({ type: "DELETE_DELIVERY_REQUEST" });
      deliveryAPI
        .deleteDelivery(data)
        .then((result) => {
          dispatch({
            type: "DELETE_DELIVERY_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "DELETE_DELIVERY_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
  
  export const searchDelivery = (value) => {
    return (dispatch) => {
      dispatch({ type: "SEARCH_DELIVERY_REQUEST" });
      deliveryAPI
        .searchDelivery(value)
        .then((result) => {
          dispatch({
            type: "SEARCH_DELIVERY_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "SEARCH_DELIVERY_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
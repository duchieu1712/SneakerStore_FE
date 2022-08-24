import orderAPI from "../../Services/orderAPI";

export const getOrders = () => {
  return (dispatch) => {
    dispatch({ type: "GET_ORDERS_REQUEST" });
      orderAPI
      .getOrders()
      .then((result) => {
        dispatch({
          type: "GET_ORDERS_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_ORDERS_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const addOrder = (data) => {
  return (dispatch) => {
    dispatch({ type: "ADD_ORDER_REQUEST" });
      orderAPI
      .addOrder(data)
      .then((result) => {
        dispatch({
          type: "ADD_ORDER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_ORDER_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const updateOrder = (id, data) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_ORDER_REQUEST" });
      orderAPI
      .updateOrder(id, data)
      .then((result) => {
        dispatch({
          type: "UPDATE_ORDER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_ORDER_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const deleteOrder = (id) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_ORDER_REQUEST" });
      orderAPI
      .deleteOrder(id)
      .then((result) => {
        dispatch({
          type: "DELETE_ORDER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_ORDER_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

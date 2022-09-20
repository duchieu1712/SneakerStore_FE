import orderDetailAPI from "../../Services/orderDetailAPI";

export const getOrderDetails = (value) => {
    return (dispatch) => {
      dispatch({ type: "GET_ORDERDETAILS_REQUEST" });
      orderDetailAPI
        .getOrderDetails(value)
        .then((result) => {
          dispatch({
            type: "GET_ORDERDETAILS_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "GET_ORDERDETAILS_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
  
  export const addOrderDetail = (data) => {
    return (dispatch) => {
      dispatch({ type: "ADD_ORDERDETAIL_REQUEST" });
      orderDetailAPI
        .addOrderDetail(data)
        .then((result) => {
          dispatch({
            type: "ADD_ORDERDETAIL_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "ADD_ORDERDETAIL_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
  
  export const updateOrderDetail = (id, data) => {
    return (dispatch) => {
      dispatch({ type: "UPDATE_ORDERDETAIL_REQUEST" });
      orderDetailAPI
        .updateOrderDetail(id, data)
        .then((result) => {
          dispatch({
            type: "UPDATE_ORDERDETAIL_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "UPDATE_ORDERDETAIL_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
  
  export const deleteOrderDetail = (id) => {
    return (dispatch) => {
      dispatch({ type: "DELETE_ORDERDETAIL_REQUEST" });
      orderDetailAPI
        .deleteOrderDetail(id)
        .then((result) => {
          dispatch({
            type: "DELETE_ORDERDETAIL_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "DELETE_ORDERDETAIL_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
  
import productSizeAPI from "../../Services/productSizeAPI";

export const getProductSizeList = () => {
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCTSIZE_REQUEST" });
    productSizeAPI
      .getProductSizeList()
      .then((result) => {
        dispatch({
          type: "GET_PRODUCTSIZE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_PRODUCTSIZE_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const addProductSize = (data) => {
  return (dispatch) => {
    dispatch({ type: "ADD_PRODUCTSIZE_REQUEST" });
    productSizeAPI
      .addProductSize(data)
      .then((result) => {
        dispatch({
          type: "ADD_PRODUCTSIZE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_PRODUCTSIZE_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const updateProductSize = (id,data) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_PRODUCTSIZE_REQUEST" });
    productSizeAPI
      .updateProductSize(id,data)
      .then((result) => {
        dispatch({
          type: "UPDATE_PRODUCTSIZE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_PRODUCTSIZE_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const deleteProductSize = (data) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_PRODUCTSIZE_REQUEST" });
    productSizeAPI
      .deleteProductSize(data)
      .then((result) => {
        dispatch({
          type: "DELETE_PRODUCTSIZE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_PRODUCTSIZE_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

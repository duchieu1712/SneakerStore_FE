import productAPI from "../../Services/productAPI";

export const getProducts = () => {
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" });
    productAPI
      .getProducts()
      .then((result) => {
        dispatch({
          type: "GET_PRODUCTS_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_PRODUCTS_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const getProductById = (id) => {
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCTBYID_REQUEST" });
    productAPI
      .getProductById(id)
      .then((result) => {
        dispatch({
          type: "GET_PRODUCTBYID_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_PRODUCTBYID_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const filterProducts = (data) => {
  return (dispatch) => {
    dispatch({ type: "FILTER_PRODUCTS_REQUEST" });
    productAPI
      .filterProducts(data)
      .then((result) => {
        dispatch({
          type: "FILTER_PRODUCTS_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "FILTER_PRODUCTS_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    dispatch({ type: "ADD_PRODUCT_REQUEST" });
    productAPI
      .addProduct(data)
      .then((result) => {
        dispatch({
          type: "ADD_PRODUCT_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_PRODUCT_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const updateProduct = (id, data) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_PRODUCT_REQUEST" });
    productAPI
      .updateProduct(id, data)
      .then((result) => {
        dispatch({
          type: "UPDATE_PRODUCT_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_PRODUCT_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_PRODUCT_REQUEST" });
    productAPI
      .deleteProduct(id)
      .then((result) => {
        dispatch({
          type: "DELETE_PRODUCT_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_PRODUCT_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

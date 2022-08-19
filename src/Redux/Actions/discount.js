import discountAPI from "../../Services/discountAPI";

export const getDiscounts = () => {
    return (dispatch) => {
      dispatch({ type: "GET_DISCOUNTS_REQUEST" });
        discountAPI
        .getDiscounts()
        .then((result) => {
          dispatch({
            type: "GET_DISCOUNTS_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "GET_DISCOUNTS_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
  
  export const addDiscount = (data) => {
    return (dispatch) => {
      dispatch({ type: "ADD_DISCOUNT_REQUEST" });
        discountAPI
        .addDiscount(data)
        .then((result) => {
          dispatch({
            type: "ADD_DISCOUNT_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "ADD_DISCOUNT_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
  
  export const updateDiscount = (id,data) => {
    return (dispatch) => {
      dispatch({ type: "UPDATE_DISCOUNT_REQUEST" });
        discountAPI
        .updateDiscount(id,data)
        .then((result) => {
          dispatch({
            type: "UPDATE_DISCOUNT_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "UPDATE_DISCOUNT_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
  
  export const deleteDiscount = (id) => {
    return (dispatch) => {
      dispatch({ type: "DELETE_DISCOUNT_REQUEST" });
        discountAPI
        .deleteDiscount(id)
        .then((result) => {
          dispatch({
            type: "DELETE_DISCOUNT_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "DELETE_DISCOUNT_FAILURE",
            payload: { error: error.response.data },
          });
        });
    };
  };
  
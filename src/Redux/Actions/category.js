import categoryAPI from "../../Services/categoryAPI";

export const getCategories = () => {
  return (dispatch) => {
    dispatch({ type: "GET_CATEGORIES_REQUEST" });
    categoryAPI
      .getCategories()
      .then((result) => {
        dispatch({
          type: "GET_CATEGORIES_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_CATEGORIES_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const addCategory = (data) => {
  return (dispatch) => {
    dispatch({ type: "ADD_CATEGORY_REQUEST" });
    categoryAPI
      .addCategory(data)
      .then((result) => {
        dispatch({
          type: "ADD_CATEGORY_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_CATEGORY_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const updateCategory = (id,data) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_CATEGORY_REQUEST" });
    categoryAPI
      .updateCategory(id,data)
      .then((result) => {
        dispatch({
          type: "UPDATE_CATEGORY_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_CATEGORY_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const deleteCategory = (data) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_CATEGORY_REQUEST" });
    categoryAPI
      .deleteCategory(data)
      .then((result) => {
        dispatch({
          type: "DELETE_CATEGORY_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_CATEGORY_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const searchCategory = (value) => {
  return (dispatch) => {
    dispatch({ type: "SEARCH_CATEGORY_REQUEST" });
    categoryAPI
      .searchCategory(value)
      .then((result) => {
        dispatch({
          type: "SEARCH_CATEGORY_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "SEARCH_CATEGORY_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

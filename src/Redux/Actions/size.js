import sizeAPI from "../../Services/sizeAPI";

export const getSizes = () => {
  return (dispatch) => {
    dispatch({ type: "GET_SIZES_REQUEST" });
    sizeAPI
      .getSizes()
      .then((result) => {
        dispatch({
          type: "GET_SIZES_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_SIZES_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const addSize = (data) => {
  return (dispatch) => {
    dispatch({ type: "ADD_SIZE_REQUEST" });
    sizeAPI
      .addSize(data)
      .then((result) => {
        dispatch({
          type: "ADD_SIZE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_SIZE_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const updateSize = (id,data) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_SIZE_REQUEST" });
    sizeAPI
      .updateSize(id,data)
      .then((result) => {
        dispatch({
          type: "UPDATE_SIZE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_SIZE_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const deleteSize = (data) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_SIZE_REQUEST" });
    sizeAPI
      .deleteSize(data)
      .then((result) => {
        dispatch({
          type: "DELETE_SIZE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_SIZE_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

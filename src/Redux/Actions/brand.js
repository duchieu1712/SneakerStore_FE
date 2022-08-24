import brandAPI from "../../Services/brandAPI";

export const getBrands = () => {
  return (dispatch) => {
    dispatch({ type: "GET_BRANDS_REQUEST" });
    brandAPI
      .getBrands()
      .then((result) => {
        dispatch({
          type: "GET_BRANDS_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_BRANDS_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const addBrand = (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return (dispatch) => {
    dispatch({ type: "ADD_BRAND_REQUEST" });
    brandAPI
      .addBrand(formData)
      .then((result) => {
        dispatch({
          type: "ADD_BRAND_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_BRAND_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const updateBrand = (id,data) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_BRAND_REQUEST" });
    brandAPI
      .updateBrand(id,data)
      .then((result) => {
        dispatch({
          type: "UPDATE_BRAND_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_BRAND_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const deleteBrand = (id) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_BRAND_REQUEST" });
    brandAPI
      .deleteBrand(id)
      .then((result) => {
        dispatch({
          type: "DELETE_BRAND_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_BRAND_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

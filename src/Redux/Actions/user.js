import TokenService from "../../Services/serviceToken";
import userAPI from "../../Services/userAPI";

export const signIn = (user) => {
  return (dispatch) => {
    dispatch({
      type: "SIGNIN_REQUEST",
    });
    userAPI
      .signIn(user)
      .then((result) => {
        TokenService.setUser(result.data.data);
        dispatch({
          type: "SIGNIN_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "SIGNIN_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const signUp = (user) => {
  return (dispatch) => {
    dispatch({ type: "SIGNUP_REQUEST" });
    userAPI
      .signUp(user)
      .then((result) => {
        TokenService.setUser(result.data);
        dispatch({
          type: "SIGNUP_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "SIGNUP_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const getUserList = () => {
  return (dispatch) => {
    dispatch({ type: "GET_USERLIST_REQUEST" });
    userAPI
      .getUserList()
      .then((result) => {
        dispatch({
          type: "GET_USERLIST_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_USERLIST_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const getUserById = (id) => {
  return (dispatch) => {
    dispatch({ type: "GET_USER_REQUEST" });
    userAPI
      .getUserById(id)
      .then((result) => {
        dispatch({
          type: "GET_USER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_USER_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const updateUser = (id,values) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_USERPROFILE_REQUEST" });
    userAPI
      .updateUser(id,values)
      .then((result) => {
        dispatch({
          type: "UPDATE_USERPROFILE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_USERPROFILE_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const deleteUser = (data) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_USER_REQUEST" });
    userAPI
      .deleteUser(data)
      .then((result) => {
        dispatch({
          type: "DELETE_USER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_USER_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};

export const changePassword = (userID, values) => {
  return (dispatch) => {
    dispatch({ type: "CHANGE_PASSWORD_REQUEST" });
    userAPI
      .changePassword(userID, values)
      .then((result) => {
        dispatch({
          type: "CHANGE_PASSWORD_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "CHANGE_PASSWORD_FAILURE",
          payload: { error: error.response.data },
        });
      });
  };
};
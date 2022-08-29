const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  currentUser: currentUser,
  userList: [],
  user:{},
  message: "",
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "SIGNIN_SUCCESS": {
      return { ...state, currentUser: action.payload.data.data, message: action.payload.data.message, loading: false };
    }
    case "SIGNIN_FAILURE": {
      return { ...state, loading: false, error: action.payload.error.message };
    }
    case "SIGNUP_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "SIGNUP_SUCCESS": {
      return { ...state, currentUser: action.payload.data, message: action.payload.data.message, loading: false };
    }
    case "SIGNUP_FAILURE": {
      return { ...state, loading: false, error: action.payload.error.message };
    }
    case "GET_USERLIST_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_USERLIST_SUCCESS": {
      return { ...state, userList: action.payload.data.data, loading: false };
    }
    case "GET_USERLIST_FAILURE": {
      return { ...state, error: action.payload.error.message, loading: false };
    }
    case "GET_USER_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_USER_SUCCESS": {
      return { ...state, user: action.payload.data.data, loading: false };
    }
    case "GET_USER_FAILURE": {
      return { ...state, error: action.payload.error.message, loading: false };
    }
    case "UPDATE_USERPROFILE_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "UPDATE_USERPROFILE_SUCCESS": {
      return { ...state, message: action.payload.data.message, loading: false };
    }
    case "UPDATE_USERPROFILE_FAILURE": {
      return { ...state, error: action.payload.error.message, loading: false };
    }
    case "CHANGE_PASSWORD_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "CHANGE_PASSWORD_SUCCESS": {
      return { ...state, message: action.payload.data.message, loading: false };
    }
    case "CHANGE_PASSWORD_FAILURE": {
      return { ...state, error: action.payload.error.message, loading: false };
    }
    case "FORGOT_PASSWORD_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "FORGOT_PASSWORD_SUCCESS": {
      return { ...state, message: action.payload.data.message, loading: false };
    }
    case "FORGOT_PASSWORD_FAILURE": {
      return { ...state, error: action.payload.error.message, loading: false };
    }
    case "DELETE_USER_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "DELETE_USER_SUCCESS": {
      return { ...state, message: action.payload.data.message, loading: false };
    }
    case "DELETE_USER_FAILURE": {
      return { ...state, error: action.payload.error.message, loading: false };
    }
    default:
      return state;
  }
};

export default userReducer;

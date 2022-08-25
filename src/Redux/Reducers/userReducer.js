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
      return { ...state, loading: false, error: action.payload.error };
    }
    case "GET_USERLIST_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_USERLIST_SUCCESS": {
      return { ...state, userList: action.payload.data.data, loading: false };
    }
    case "GET_USERLIST_FAILURE": {
      return { ...state, error: action.payload.error, loading: false };
    }
    case "GET_USER_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_USER_SUCCESS": {
      return { ...state, user: action.payload.data.data, loading: false };
    }
    case "GET_USER_FAILURE": {
      return { ...state, error: action.payload.error, loading: false };
    }
    default:
      return state;
  }
};

export default userReducer;

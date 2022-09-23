const initialState = {
  categories: [],
  message: null,
  loading: false,
  error: null,
  searchCategories: null
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORIES_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_CATEGORIES_SUCCESS": {
      return { ...state, loading: false, categories: action.payload.data.data };
    }
    case "GET_CATEGORIES_FAILURE": {
        return {...state, loading: false, error: action.payload.error.message}
    }

    case "ADD_CATEGORY_REQUEST": {
        return {...state, loading: true, error: null}
    }
    case "ADD_CATEGORY_SUCCESS": {
        return {...state, loading: false, message: action.payload.data.message, error: null}
    }
    case "ADD_CATEGORY_FAILURE": {
        return {...state, loading: false, error: action.payload.error.message}
    }

    case "UPDATE_CATEGORY_REQUEST": {
        return {...state, loading: true, error: null}
    }
    case "UPDATE_CATEGORY_SUCCESS": {
        return {...state, loading: false, message: action.payload.data.message, error: null}
    }
    case "UPDATE_CATEGORY_FAILURE": {
        return {...state, loading: false, error: action.payload.error.message}
    }

    case "DELETE_CATEGORY_REQUEST": {
        return {...state, loading: true, error: null}
    }
    case "DELETE_CATEGORY_SUCCESS": {
        return {...state, loading: false, message: action.payload.data.message, error: null}
    }
    case "DELETE_CATEGORY_FAILURE": {
        return {...state, loading: false, error: action.payload.error.message}
    }
    case "SEARCH_CATEGORY_REQUEST": {
        return { ...state, loading: true, error: null };
      }
      case "SEARCH_CATEGORY_SUCCESS": {
        return { ...state, searchCategories: action.payload.data.data, loading: false, message: action.payload.data.message, error: null };
      }
      case "SEARCH_CATEGORY_FAILURE": {
        return { ...state, loading: false, error: action.payload.error };
      }
    default:
        return state;
  }
};

export default categoryReducer;
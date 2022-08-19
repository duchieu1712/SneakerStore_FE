const initialState = {
  categories: [],
  loading: false,
  error: null,
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
        return {...state, loading: false, error: action.payload.error}
    }

    case "ADD_CATEGORY_REQUEST": {
        return {...state, loading: true, error: null}
    }
    case "ADD_CATEGORY_SUCCESS": {
        return {...state, loading: false, error: null}
    }
    case "ADD_CATEGORY_FAILURE": {
        return {...state, loading: false, error: action.payload.error}
    }

    case "UPDATE_CATEGORY_REQUEST": {
        return {...state, loading: true, error: null}
    }
    case "UPDATE_CATEGORY_SUCCESS": {
        return {...state, loading: false, error: null}
    }
    case "UPDATE_CATEGORY_FAILURE": {
        return {...state, loading: false, error: action.payload.error}
    }

    case "DELETE_CATEGORY_REQUEST": {
        return {...state, loading: true, error: null}
    }
    case "DELETE_CATEGORY_SUCCESS": {
        return {...state, loading: false, error: null}
    }
    case "DELETE_CATEGORY_FAILURE": {
        return {...state, loading: false, error: action.payload.error}
    }
    default:
        return state;
  }
};

export default categoryReducer;
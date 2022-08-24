import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import categoryReducer from "./Reducers/categoryReducer";
import brandReducer from "./Reducers/brandReducer";
import deliveryReducer from "./Reducers/deliveryReducer";
import discountReducer from "./Reducers/discountReducer";
import orderReducer from "./Reducers/orderReducer";
import orderDetailReducer from "./Reducers/orderDetailReducer";
import productReducer from "./Reducers/productReducer";
import userReducer from "./Reducers/userReducer";
import thunk from "redux-thunk";

const enhanceCompose = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = combineReducers({
  categoryReducer,
  brandReducer,
  deliveryReducer,
  discountReducer,
  orderDetailReducer,
  orderReducer,
  productReducer,
  userReducer
});

const store = legacy_createStore(
  rootReducer,
  enhanceCompose
  // applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

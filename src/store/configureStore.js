import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const middleWears = [thunk];
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWears))
  );
}

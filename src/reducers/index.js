import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  toastr: toastrReducer,
  user: userReducer,
  product: productReducer,
});
export default rootReducer;

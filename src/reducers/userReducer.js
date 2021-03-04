import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../constants/Action_Constants";
const cartItem = localStorage.getItem("cart");
const initialState = {
  cart: cartItem ? JSON.parse(cartItem) : [],
};
export default function adminReducer(state = initialState, action) {
  const { type, payload } = action;
  let result;
  switch (type) {
    case ADD_TO_CART:
      result = [...state.cart, payload];
      return {
        ...state,
        cart: result,
      };
    case REMOVE_FROM_CART:
      result = state.cart.filter((item) => item.id !== payload.id);
      return {
        ...state,
        cart: result,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}

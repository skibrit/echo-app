import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../constants/Action_Constants";
import { toastr } from "react-redux-toastr";

export const addToCart = (data) => (dispatch) => {
  try {
    let userCart = localStorage.getItem("cart");
    if (userCart) {
      userCart = JSON.parse(userCart);
      userCart.push(data);
    } else {
      userCart = [data];
    }
    localStorage.setItem("cart", JSON.stringify(userCart));
    dispatch({
      type: ADD_TO_CART,
      payload: data,
    });
  } catch (e) {
    console.log(e);
    toastr.error(e.toString());
  }
};
export const removeFromCart = (data) => (dispatch) => {
  try {
    let userCart = localStorage.getItem("cart");
    if (userCart) {
      userCart = JSON.parse(userCart);
      userCart = userCart.filter((item) => item.id !== data.id);
      localStorage.setItem("cart", JSON.stringify(userCart));
    }
    dispatch({
      type: REMOVE_FROM_CART,
      payload: data,
    });
  } catch (e) {
    console.log(e);
    toastr.error(e.toString());
  }
};

export const clearCart = () => (dispatch) => {
  try {
    localStorage.removeItem("cart");
    dispatch({
      type: CLEAR_CART,
      payload: null,
    });
  } catch (e) {
    console.log(e);
    toastr.error(e.toString());
  }
};

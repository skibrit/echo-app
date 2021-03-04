import React from "react";
import "./style.scss";
import CartIcon from "../../../assets/images/icons/carts.png";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const CartView = () => {
  const history = useHistory();
  let carItems = useSelector((state) => state.user.cart.length);
  return (
    <div
      className="cart-view-wrapper"
      onClick={() => {
        history.push("/checkout");
      }}
    >
      <div className="cart-view-left">
        <span className="cart-item-title">My Cart</span>
        <span className="cart-item-count">{carItems}</span>
      </div>
      <div className="cart-view-right">
        <div className="cart-view-icon-wrapper">
          <img src={CartIcon} className="cart-view-icon" />
        </div>
      </div>
    </div>
  );
};

export default CartView;

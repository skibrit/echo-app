import React from "react";
import "./style.scss";
import CartIcon from "../../../assets/images/icons/carts.png";

const CartView = () => {
  return (
    <div className="cart-view-wrapper">
      <div className="cart-view-left">
        <span className="cart-item-title">My Cart</span>
        <span className="cart-item-count">5</span>
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

import React from "react";
import "./style.scss";

const CartView = () => {
  return (
    <div className="cart-view-wrapper">
      <div className="cart-view-left">
        <div className="cart-item-count">5</div>
      </div>
      <div className="cart-view-right">
        <div className="cart-view-icon-wrapper">
          <img
            src="https://mpng.subpng.com/20190404/ojo/kisspng-computer-icons-portable-network-graphics-scalable-shopping-cart-svg-png-icon-free-download-19-184-5ca6a1e6ab9a82.8989698815544242947029.jpg"
            className="cart-view-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default CartView;

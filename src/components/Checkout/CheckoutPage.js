import React from "react";
import PageWrapper from "../Layouts/PageWrapper/PageWrapper";
import { Table, Form, Button } from "react-bootstrap";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import DefaultBody from "../Layouts/DefaultBody/DefaultBody";
import CheckoutItem from "./CheckoutItem";
import { removeFromCart, clearCart } from "../../actions/userAction";
import { toastr } from "react-redux-toastr";

const CheckOut = () => {
  const cartItems = useSelector((state) => state.user.cart);
  const totalAmount = cartItems
    .map((item) => parseInt(item.price))
    .reduce((ac, c) => ac + c);
  const dispatch = useDispatch();

  const removeFromCartHandler = (pItem) => {
    dispatch(removeFromCart(pItem));
  };

  const confirmPurchaseHandler = () => {
    try {
      dispatch(clearCart());
      toastr.success("Thank you for your purchase");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PageWrapper>
      <div className="checkout-page">
        <div className="checkout-header">
          <h3 className="checkout-header-title">Checkout</h3>
        </div>
        <div className="checkout-body">
          {cartItems && cartItems.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  return (
                    <CheckoutItem
                      item={item}
                      key={item.id}
                      index={index + 1}
                      remove={removeFromCartHandler}
                    />
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <DefaultBody content="Your cart is empty" />
          )}
        </div>
        {cartItems && cartItems.length > 0 && (
          <div className="checkout-footer">
            <div className="cart-item-total-wrapper">
              <div className="cart-item-total-left">
                <div className="cart-item-total-text">Total</div>
              </div>
              <div className="cart-item-total-right">
                <div className="cart-item-total-value">${totalAmount}</div>
              </div>
            </div>
            <div className="checkout-footer-btn-wrapper">
              <Button variant="success" onClick={confirmPurchaseHandler}>
                Confirm Purchase
              </Button>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default CheckOut;

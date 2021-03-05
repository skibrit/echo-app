import React from "react";
import "./style.scss";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/userAction";
import { withOptimizely } from "@optimizely/react-sdk";

const ProductPage = ({ pageTitle, dataList, optimizely }) => {
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.user.cart);

  const addToCartHandler = (pItem) => {
    dispatch(addToCart(pItem));
    optimizely.track(`add_to_cart`);
  };
  const removeFromCartHandler = (pItem) => {
    dispatch(removeFromCart(pItem));
    optimizely.track(`remove_from_cart`);
  };

  const onProductViewHandler = (product) => {
    console.log(`Product Viewed `, product);
    optimizely.track(`product_viewed`);
  };

  return (
    <div className="product-page">
      <div className="product-page-header">
        <h2 className="product-page-title">{pageTitle}</h2>
      </div>
      <div className="product-list">
        {dataList &&
          dataList.map((pItem, index) => {
            let result = userCart.filter((item) => item.id === pItem.id);
            let inCart = false;
            if (result[0]) {
              inCart = true;
            }
            return (
              <ProductItem
                key={pItem.id}
                product={pItem}
                add={addToCartHandler}
                remove={removeFromCartHandler}
                inCart={inCart}
                onMouseOut={onProductViewHandler}
              />
            );
          })}
      </div>
    </div>
  );
};

export default withOptimizely(ProductPage);

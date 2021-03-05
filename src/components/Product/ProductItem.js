import React from "react";
import { Button } from "react-bootstrap";
import ImageLoader from "../Layouts/ImageLoader/ImageLoader";

const ProductItem = ({ product, add, remove, inCart, onMouseOut }) => {
  const { title, price, image } = product;
  return (
    <div
      className="product-item"
      onMouseLeave={() => {
        onMouseOut(product);
      }}
    >
      <div className="p-item-header">
        <div className="product-img-wrapper">
          <ImageLoader src={image} className="product-img" />
        </div>
      </div>
      <div className="p-item-body">
        <h4 className="p-item-title">{title}</h4>
        <h4 className="p-item-price">${price}</h4>
      </div>
      <div className="p-item-footer">
        {inCart ? (
          <Button
            variant="danger"
            className="p-item-btn"
            onClick={() => {
              remove(product);
            }}
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            variant="success"
            className="p-item-btn"
            onClick={() => {
              add(product);
            }}
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;

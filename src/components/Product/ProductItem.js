import React from "react";
import { Button } from "react-bootstrap";
import ImageLoader from "../Layouts/ImageLoader/ImageLoader";

const ProductItem = () => {
  return (
    <div className="product-item">
      <div className="p-item-header">
        <div className="product-img-wrapper">
          <ImageLoader
            src="https://i.pinimg.com/originals/20/79/03/2079033abc8314be554f9d24f562a199.jpg"
            className="product-img"
          />
        </div>
      </div>
      <div className="p-item-body">
        <h4 className="p-item-title">MacBook Pro</h4>
        <h4 className="p-item-price">$2000</h4>
      </div>
      <div className="p-item-footer">
        <Button variant="success" className="p-item-btn">
          Add to cart
        </Button>{" "}
      </div>
    </div>
  );
};

export default ProductItem;

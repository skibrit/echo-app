import React from "react";
import "./style.scss";
import ProductItem from "./ProductItem";

const ProductPage = ({ pageTitle }) => {
  return (
    <div className="product-page">
      <div className="product-page-header">
        <h2 className="product-page-title">{pageTitle}</h2>
      </div>
      <div className="product-list">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductPage;

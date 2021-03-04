import React from "react";
import { useHistory } from "react-router-dom";
import ClothIcon from "../../assets/images/icons/cloths.png";
import FoodIcon from "../../assets/images/icons/foods.png";

const Description = () => {
  const history = useHistory();
  const goToPage = (url) => {
    history.push(url);
  };

  return (
    <div className="description-section">
      <h3 className="desc-title">Find Best Products</h3>
      <ul className="desc-list">
        <li
          className="desc-item"
          onClick={() => {
            goToPage("/category/electronics");
          }}
        >
          <div className="desc-item-icon-wrapper">
            <img
              src="https://icon-library.com/images/electronics-icon/electronics-icon-15.jpg"
              className="desc-item-icon"
            />
          </div>
          <h4 className="desc-item-title">Electronics</h4>
        </li>
        <li
          className="desc-item"
          onClick={() => {
            goToPage("/category/cloths");
          }}
        >
          <div className="desc-item-icon-wrapper">
            <img src={ClothIcon} className="desc-item-icon" />
          </div>
          <h4 className="desc-item-title">Cloths</h4>
        </li>
        <li
          className="desc-item"
          onClick={() => {
            goToPage("/category/foods");
          }}
        >
          <div className="desc-item-icon-wrapper">
            <img src={FoodIcon} className="desc-item-icon" />
          </div>
          <h4 className="desc-item-title">Food</h4>
        </li>
      </ul>
    </div>
  );
};

export default Description;

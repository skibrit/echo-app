import React from "react";

const Description = () => {
  return (
    <div className="description-section">
      <h3 className="desc-title">Find Best Products</h3>
      <ul className="desc-list">
        <li className="desc-item">
          <div className="desc-item-icon-wrapper">
            <img
              src="https://icon-library.com/images/electronics-icon/electronics-icon-15.jpg"
              className="desc-item-icon"
            />
          </div>
          <h4 className="desc-item-title">Electronics</h4>
        </li>
        <li className="desc-item">
          <div className="desc-item-icon-wrapper">
            <img
              src="https://www.clipartmax.com/png/middle/354-3549816_dress-dress-dress-love-icon-dress-icon-png.png"
              className="desc-item-icon"
            />
          </div>
          <h4 className="desc-item-title">Cloths</h4>
        </li>
        <li className="desc-item">
          <div className="desc-item-icon-wrapper">
            <img
              src="https://www.pngfind.com/pngs/m/5-58824_png-file-svg-food-and-drink-icon-png.png"
              className="desc-item-icon"
            />
          </div>
          <h4 className="desc-item-title">Food</h4>
        </li>
      </ul>
    </div>
  );
};

export default Description;

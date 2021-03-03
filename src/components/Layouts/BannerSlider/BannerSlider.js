import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.scss";

const BannerSlider = () => {
  return (
    <div className="banner-slider">
      <div className="banner-slider-wrapper">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://9to5mac.com/wp-content/uploads/sites/6/2020/01/Every-Mac-wallpaper.jpeg?quality=82&strip=all"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default BannerSlider;

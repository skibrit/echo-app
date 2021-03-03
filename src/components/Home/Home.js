import React from "react";
import PageWrapper from "../Layouts/PageWrapper/PageWrapper";
import BannerSlider from "../Layouts/BannerSlider/BannerSlider";
import Description from "./Description";
import ProductPage from "../Product/ProductPage";
import RowButton from "../Layouts/RowButton/RowButton";
import "./home.scss";

const Home = () => {
  return (
    <PageWrapper>
      <div className="home-page">
        <BannerSlider />
        <Description />
        <div className="home-body">
          <ProductPage pageTitle={"Electronics"} />
          <RowButton title="View More" url="/category/electronics" />
          <ProductPage pageTitle={"Cloths"} />
          <RowButton title="View More" url="/category/cloths" />
          <ProductPage pageTitle={"Food"} />
          <RowButton title="View More" url="/category/food" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;

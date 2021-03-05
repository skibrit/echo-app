import React from "react";
import PageWrapper from "../Layouts/PageWrapper/PageWrapper";
import BannerSlider from "../Layouts/BannerSlider/BannerSlider";
import Description from "./Description";
import ProductPage from "../Product/ProductPage";
import RowButton from "../Layouts/RowButton/RowButton";
import "./home.scss";
import { useSelector } from "react-redux";
import {
  OptimizelyExperiment,
  OptimizelyVariation,
} from "@optimizely/react-sdk";

const Home = () => {
  // get products
  const elList = useSelector((state) =>
    state.product.store.electronics.slice(0, 3)
  );
  const clList = useSelector((state) => state.product.store.cloths.slice(0, 3));
  const flList = useSelector((state) => state.product.store.foods.slice(0, 3));

  return (
    <PageWrapper>
      <OptimizelyExperiment experiment="echo-commerce-test">
        <OptimizelyVariation variation="without_slider">
          <div className="home-page">
            <Description />
            <div className="home-body">
              <ProductPage pageTitle={"Electronics"} dataList={elList} />
              <RowButton title="View More" url="/category/electronics" />
              <ProductPage pageTitle={"Cloths"} dataList={clList} />
              <RowButton title="View More" url="/category/cloths" />
              <ProductPage pageTitle={"Food"} dataList={flList} />
              <RowButton title="View More" url="/category/foods" />
            </div>
          </div>
        </OptimizelyVariation>
        <OptimizelyVariation default>
          <div className="home-page">
            <BannerSlider />
            <Description />
            <div className="home-body">
              <ProductPage pageTitle={"Electronics"} dataList={elList} />
              <RowButton title="View More" url="/category/electronics" />
              <ProductPage pageTitle={"Cloths"} dataList={clList} />
              <RowButton title="View More" url="/category/cloths" />
              <ProductPage pageTitle={"Food"} dataList={flList} />
              <RowButton title="View More" url="/category/foods" />
            </div>
          </div>
        </OptimizelyVariation>
      </OptimizelyExperiment>
    </PageWrapper>
  );
};

export default Home;

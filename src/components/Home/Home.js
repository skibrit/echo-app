import React from "react";
import PageWrapper from "../Layouts/PageWrapper/PageWrapper";
import BannerSlider from "../Layouts/BannerSlider/BannerSlider";
import Description from "./Description";
import ProductPage from "../Product/ProductPage";
import RowButton from "../Layouts/RowButton/RowButton";
import "./home.scss";
import { useSelector } from "react-redux";

const Home = () => {
  // get products
  const elList = useSelector((state) =>
    state.product.store.electronics.slice(0, 3)
  );
  const clList = useSelector((state) => state.product.store.cloths.slice(0, 3));
  const flList = useSelector((state) => state.product.store.foods.slice(0, 3));

  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default Home;

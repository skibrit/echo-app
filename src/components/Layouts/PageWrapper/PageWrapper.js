import React from "react";
import "./style.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useRouteTracker from "../../../hooks/useRouteTracker";
import { withOptimizely } from "@optimizely/react-sdk";

const PageWrapper = ({ children, optimizely }) => {
  useRouteTracker(optimizely);
  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-header">
          <div className="container page-inner-header">
            <Header />
          </div>
        </div>
        <div className="page-body">{children}</div>
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default withOptimizely(PageWrapper);

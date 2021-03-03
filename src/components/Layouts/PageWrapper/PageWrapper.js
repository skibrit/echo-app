import React from "react";
import "./style.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PageWrapper = ({ children }) => {
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

export default PageWrapper;

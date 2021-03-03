import React from "react";
import ProductPage from "../Product/ProductPage";
import PageWrapper from "../Layouts/PageWrapper/PageWrapper";
import "./style.scss";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";

const CategoryPage = ({}) => {
  return (
    <PageWrapper>
      <div className="category-page">
        <div className="category-page-header">
          <div className="search-section">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
        </div>
        <div className="category-page-body">
          <ProductPage pageTitle="Electronics" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default CategoryPage;

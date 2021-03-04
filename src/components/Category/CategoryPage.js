import React, { useEffect, useState } from "react";
import ProductPage from "../Product/ProductPage";
import PageWrapper from "../Layouts/PageWrapper/PageWrapper";
import "./style.scss";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const CategoryPage = ({ match: { params } }) => {
  const [catId, setCatId] = useState(null);
  const productList = useSelector((state) => state.product.store[catId]);

  useEffect(() => {
    let catId = params.id;
    setCatId(catId);
  }, []);

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
          <ProductPage pageTitle={catId} dataList={productList} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default CategoryPage;

import React, { useEffect, useState } from "react";
import ProductPage from "../Product/ProductPage";
import PageWrapper from "../Layouts/PageWrapper/PageWrapper";
import "./style.scss";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import DefaultBody from "../Layouts/DefaultBody/DefaultBody";

const CategoryPage = ({ match: { params } }) => {
  const [catId, setCatId] = useState(null);
  const [searchKeyword, updateSearchKeyword] = useState("");
  const [list, updateList] = useState([]);
  const productList = useSelector((state) => state.product.store[catId]);

  useEffect(() => {
    let catId = params.id;
    setCatId(catId);
  }, []);

  useEffect(() => {
    if (productList) updateList(productList);
  }, [productList]);

  const onChangeKeywordHandler = (e) => {
    let val = e.target.value;
    updateSearchKeyword(val);
    if (val === "") {
      updateList(productList);
    }
  };

  const onSearchHandler = () => {
    try {
      if (!searchKeyword || searchKeyword === "") return;
      const searchList = productList.filter((item) =>
        item.title.toLowerCase().startsWith(searchKeyword.toLowerCase())
      );
      updateList(searchList);
    } catch (e) {
      console.log(e);
    }
  };

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
                value={searchKeyword}
                onChange={onChangeKeywordHandler}
              />
              <Button variant="outline-success" onClick={onSearchHandler}>
                Search
              </Button>
            </Form>
          </div>
        </div>
        <div className="category-page-body">
          {list && list.length > 0 ? (
            <ProductPage pageTitle={catId} dataList={list} />
          ) : (
            <DefaultBody content="No product found" />
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default CategoryPage;

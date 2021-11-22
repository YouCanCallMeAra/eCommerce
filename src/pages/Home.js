import React from "react";
import TheCarousel from "../components/TheCarousel";
// import Category from "../uselessComps/Category";

import ProductsComp from "../components/ProductsComp";
import CategoriesComp from "../components/CategoriesComp";
import { Container } from "react-bootstrap";
import ShoppingCart from "./ShoppingCart";

export default function Home() {
  return (
    <div className="main-home-div">
      <TheCarousel />

      <Container className="home-items-container">
        {/* CAtegory Comp Called back in Home Page */}
        <div className="category-container">
          <div className="category">
            <CategoriesComp />
          </div>
        </div>
      </Container>

      <Container className="home-items-container">
        {/* Product Comp Called back in Home Page */}
        <div className="card-div">
          <ProductsComp />
        </div>
      </Container>

      {/* <ShoppingCart /> */}
    </div>
  );
}

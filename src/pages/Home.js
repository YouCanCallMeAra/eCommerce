import React from "react";
// import TheCarousel from "../components/TheCarousel";

import ProductsComp from "../components/ProductsComp";
import CategoriesComp from "../components/CategoriesComp";

import ScrollAnimation from "react-animate-on-scroll";
import HeroComp from "../components/HeroComp";
import BrandsComp from "../components/BrandsComp";

export default function Home() {
  return (
    <div className="main-home-div">
      <HeroComp />

      <div className="home-items-container">
        <h1 style={{ color: "rgb(49, 49, 59)" }}>CATEGORIES</h1>

        <div className="category">
          <CategoriesComp />
        </div>
        <div className="category">
          <BrandsComp />
        </div>
      </div>
      <hr />

      <div className="home-items-container">
        <h1
          style={{
            color: "rgb(49, 49, 59)",
          }}
        >
          OUR PRODUCTS
        </h1>

        <div className="card-div">
          <ProductsComp />
        </div>
      </div>
    </div>
  );
}

import React from "react";
// import TheCarousel from "../components/TheCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProductsComp from "../components/ProductsComp";
import CategoriesComp from "../components/CategoriesComp";
import GendersComp from "../components/GendersComp";
// import ScrollAnimation from "react-animate-on-scroll";
import HeroComp from "../components/HeroComp";
import BrandsComp from "../components/BrandsComp";

export default function Home() {
  return (
    <div className="main-home-div">
      <HeroComp />

      <div className="home-items-container">
        {/* <h1 style={{ color: "rgb(49, 49, 59)" }}>CATEGORIES</h1> */}
        <div
          class="divider"
          style={{ paddingTop: "-40px", paddingBottom: "20px" }}
        >
          <span></span>
          <span>CATEGORIES</span>
          <span></span>
        </div>
        <div className="category">
          <CategoriesComp />
        </div>
        <div
          class="divider"
          style={{ paddingTop: "200px", paddingBottom: "-100px" }}
        >
          <span></span>
          <span>COLLECTIONS</span>
          <span></span>
        </div>
        <div className="category">
          <GendersComp />
        </div>
      </div>

      <div className="home-items-container">
        {/* <h1
          style={{
            color: "rgb(49, 49, 59)",
          }}
        >
          OUR PRODUCTS
        </h1> */}
        <div
          class="divider"
          style={{ paddingTop: "-100px", paddingBottom: "-100px" }}
        >
          <span></span>
          <span>PRODUCTS</span>
          <span></span>
        </div>
        <div className="card-div">
          <ProductsComp />
        </div>

        <div
          class="divider"
          style={{ paddingTop: "250px", paddingBottom: "50px" }}
        >
          <span></span>
          <span>BRANDS</span>
          <span></span>
        </div>
        <div className="category">
          <BrandsComp />
        </div>
      </div>
    </div>
  );
}

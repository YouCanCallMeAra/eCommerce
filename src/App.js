import React from "react";

import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Categories from "./pages/Categories";
import Register from "./pages/Register";
import { Switch } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./ProductCard.css";
import "../node_modules/antd/dist/antd.css";
import ProductsComp from "./components/ProductsComp";
import ProductsPage from "./pages/ProductsPage";
import ItemsOfSingleCategory from "./pages/ItemsOfSingleCategory";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoriesComp from "./components/CategoriesComp";
// import ItemByCategoryPage from "./pages/ItemByCategoryPage";

function App() {
  return (
    <div className="App">
      <TheNavbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/categories"
          element={
            <div className="category-container">
              <div className="category">
                <CategoriesComp />
              </div>
            </div>
          }
        />
        <Route
          path="/products"
          element={
            <div className="card-div">
              <ProductsPage />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route
          path="/products/filter/:category"
          element={
            <div className="card-div">
              <ItemsOfSingleCategory />
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

import { React, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./ProductCard.css";
import "../node_modules/antd/dist/antd.css";
import ProductsPage from "./pages/ProductsPage";
import ItemsOfSingleCategory from "./pages/ItemsOfSingleCategory";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoriesComp from "./components/CategoriesComp";
import ShoppingCart from "./pages/ShoppingCart";
import FooterComp from "./components/FooterComp";
import NotFound from "./pages/NotFound";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <TheNavbar />

      <Routes>
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
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      <FooterComp />
    </div>
  );
}

export default App;

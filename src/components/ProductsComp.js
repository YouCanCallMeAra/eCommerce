import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useGetProductsQuery } from "../services/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/CartSlice";
import { Link } from "react-router-dom";

// import { Card } from "antd";

export default function Product() {
  const { data = [], isLoading } = useGetProductsQuery();
  // const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return data.map((products, index) => {
    return (
      <>
        <div className="product-card" key={index}>
          {/* <div className="badge">Hot</div> */}
          <div className="product-tumb">
            <img src={products.image} alt="" />
          </div>
          <div className="product-details">
            <span className="product-catagory">{products.category}</span>
            <h5>
              <Link to={`/products/${products._id}`}>{products.name}</Link>
            </h5>

            <div className="product-bottom-details">
              <div className="product-price">{products.price}$</div>
              <div className="product-links">
                <a className="">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    onClick={() => {
                      dispatch(addToCart(products));
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
}

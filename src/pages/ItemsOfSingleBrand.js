import React from "react";
import { useParams } from "react-router-dom";
import { useGetBrandsbyBrandQuery } from "../services/productsApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../features/CartSlice";

export default function ItemsOfSingleCategory() {
  let { brand } = useParams();
  const dispatch = useDispatch();

  const { data = [], isLoading, error } = useGetBrandsbyBrandQuery(brand);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return data.map((products, index) => {
    return (
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
          {/* <p>{products.description}</p> */}
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
    );
  });
}

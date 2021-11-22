import React from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryByCategoryQuery } from "../services/productsApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ItemsOfSingleCategory() {
  let { category } = useParams();

  const {
    data = [],
    isLoading,
    error,
  } = useGetCategoryByCategoryQuery(category);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return data.map((products, index) => {
    return (
      <div className="product-card" key={index}>
        <div className="badge">Hot</div>
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
              <a href="">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

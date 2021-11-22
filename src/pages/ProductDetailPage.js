import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../services/productsApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetailPage() {
  let { id } = useParams();
  const { data = [], isLoading } = useGetProductByIdQuery(id);
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={data.image} />
      </div>
      <div className="product-details">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div className="product-bottom-details">
          <div className="product-price">{data.price}</div>
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
}

import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../services/productsApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetailPage() {
  let { id } = useParams();
  const { data = [], isLoading } = useGetProductByIdQuery(id);
  // const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={data.image} />
      </div>
      <div className="product-details">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div className="product-bottom-details">
          <div className="product-price">{data.price}$</div>
          <div className="product-links">
            <a className="">
              <FontAwesomeIcon
                icon={faShoppingCart}
                onClick={() => {
                  dispatch(addToCart(data));
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

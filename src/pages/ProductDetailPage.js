import React, { useState } from "react";
import "../styles/productDetail.css";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../services/productsApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

export default function ProductDetailPage() {
  let { id } = useParams();
  const { data = [], isLoading } = useGetProductByIdQuery(id);
  const [color, setColor] = useState();
  const [size, setSize] = useState();

  // const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <Container className="product-container">
      <div className="product-image">
        <img src={data.image} />
      </div>
      <div className="product-details">
        <h1>{data.name}</h1>
        <h4>{data.description}</h4>
        <p style={{ color: "grey" }}>in stock</p>
        {/* <select>
          {data.size?.map((sizee) => {
            return <option value={`${sizee}`}>{sizee} </option>;
          })}
        </select>
        <div>
          {data.color?.map((c) => {
            return (
              <button
                onClick={() => {
                  setColor(c);
                }}
                className="colors-button"
                style={{
                  backgroundColor: `${c}`,
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  border: "0px",
                  margin: "5px",
                }}
              ></button>
            );
          })}
        </div> */}

        <div className="product-bottom-details">
          <div className="product-price">Price: {data.price}$</div>
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
    </Container>
  );
}

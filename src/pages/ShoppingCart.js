import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/shoppingCartNew.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
import {
  // addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);
  let navigate = useNavigate();
  var totalPrice = 0;
  return (
    // <div className="main-main-shopping-cart-container">
    <div className="main-shopping-cart-container">
      {cart.map((product, index) => {
        totalPrice += product.price;
        return (
          <div className="shopping-cart-container">
            <div className="shopping-cart-item-img">
              <img src={product.image} />
            </div>
            <div className="shopping-cart-item-details">
              <h4>{product.name}</h4>

              <p>Price: {product.price}$</p>
              <div className="product-links">
                <a className="">
                  <FontAwesomeIcon
                    icon={faMinus}
                    onClick={() => {
                      dispatch(decrementQuantity(product._id));
                      alert("Not Implemented yet!");
                    }}
                  />
                </a>
                <a className="">
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => {
                      dispatch(removeFromCart(product._id));
                    }}
                  />
                </a>
                <a className="">
                  <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => {
                      alert("Not Implemented yet!");
                      dispatch(incrementQuantity(product._id));
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
      {/* </div> */}
      <div className="shopping-cart-total">
        <h1>TOTAL:{totalPrice.toFixed(2)}$</h1>

        <Button
          variant="outline-primary"
          onClick={() => {
            if (isAuth) {
              alert("Your order was successful!!");
            }
            if (!isAuth) {
              alert("please login first if you have an account. or register!!");
              navigate("/login");
            }
          }}
        >
          check out
        </Button>
      </div>
    </div>
    // <div className="main-div">
    //   <div className="img-div">
    //     <img src="https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png" />
    //   </div>
    //   <div className="details-div">
    //     <div className="detail-titles">
    //       <h3>price</h3>
    //       <h3>price</h3>
    //       <h3>price</h3>
    //     </div>
    //     <div className="detail-detail">
    //       <h4>100</h4>
    //       <h4>100</h4>
    //       <h4>100</h4>
    //     </div>
    //   </div>
    //   <div className="buttons-div"></div>
    // </div>
  );
}

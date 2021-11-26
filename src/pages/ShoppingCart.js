import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ProductsComp from "../components/ProductsComp";
// import { useGetProductsQuery } from "../services/productsApi";
import { addToCart, removeFromCart } from "../features/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import {
  faTrash,
  // faShoppingCart,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function ShoppingCart() {
  // const { data = [], isLoading } = useGetProductsQuery();
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  function addQuantity() {
    setQuantity(quantity + 1);
  }

  function decQuantity() {
    setQuantity(quantity - 1);
  }

  var totalPrice = 0;
  var itemsTotalPrice = 0;
  return (
    <div className="main-main-shopping-cart-container">
      <div className="main-shopping-cart-container">
        {cart.map((product, index) => {
          itemsTotalPrice = product.price * quantity;
          totalPrice += itemsTotalPrice;
          if (quantity === 0) {
            dispatch(removeFromCart(product._id));
          }
          return (
            <div className="shopping-cart-container">
              <div className="shopping-cart-item-img">
                <img src={product.image} />
              </div>
              <div className="shopping-cart-item-details">
                <h3>{product.name}</h3>
                <p>Quantity: {quantity}</p>
                <p>{itemsTotalPrice}$</p>
                <div className="product-links">
                  <a className="">
                    <FontAwesomeIcon icon={faMinus} onClick={decQuantity} />
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
                    <FontAwesomeIcon icon={faPlus} onClick={addQuantity} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="shopping-cart-total">
        <h1>TOTAL:{totalPrice.toFixed(2)}$</h1>
        <Button
          variant="outline-primary"
          onClick={() => {
            alert("Piroza!!");
          }}
        >
          check out
        </Button>
      </div>
    </div>
  );
}

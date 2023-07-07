import React, { useState } from 'react';
import './MyCart.css';
import back_btn from './assets/icons-8-back-501.png';
import cart_icon from './assets/icons-8-cart-5011.png';
import minus_sign from './assets/icons-8-minus-5011.png';
import plus_sign from './assets/plus.png';
import { Helmet } from 'react-helmet';
import {initializeApp} from 'firebase/app';
import { getDatabase, ref, push } from "firebase/database";

const appSettings = {
  databaseURL: "https://connoisseur-fd354-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const cart = ref(database,'cartItems');

export default function MyCart({ foodItems }) {
  const [cartItems, setCartItems] = useState(foodItems);
  const handleCheckout = () => {
    push(cart, foodItems);
  };

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index]['food-item-qty'] += 1;
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index]['food-item-qty'] > 1) {
      updatedCartItems[index]['food-item-qty'] -= 1;
    }
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="top_yellow_margin">
        <div className="back-btn">
          <img src={back_btn} alt="Back Button" />
        </div>
        <div className="cart">
          <img src={cart_icon} className="cart-icon" alt="Cart Icon" />
          <div className="my-cart-text">My Cart</div>
        </div>
      </div>

      {foodItems.map((item, index) => (
        <div className="item-card" key={index}>
          <div className="food-img">
            <img src={item["food-item-image"]} alt={item["food-item-txt"]} />
          </div>
          <div className="section-2">
            <div className="food-item-txt">
              <b>{item["food-item-txt"]}</b>
            </div>
            <div className="qty">Qty: {item["food-item-qty"]}</div>
          </div>
          <div className="section-3">
            <div className="plus-minus">
              <div className="minus" onClick={() => decreaseQuantity(index)}>
                <img src={minus_sign} alt="Minus Sign" />
              </div>
              <div className="plus-qty-minus">{item["food-item-qty"]}</div>
              <div className="plus" onClick={() => increaseQuantity(index)}>
                <img src={plus_sign} alt="Plus Sign" />
              </div>
            </div>
            <div className="price">
              Total: <b className="bold-price">Rs. {item["food-item-price"]}</b>
            </div>
          </div>
        </div>
      ))}

      <div className="checkout">
      <button className="checkout-btn" onClick={handleCheckout}>
        <font className="checkout-txt">PROCEED TO CHECKOUT</font>
      </button>
      </div>
    </div>
  );
}

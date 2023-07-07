import React from 'react';
import './MyCart.css';
import back_btn from './assets/icons-8-back-501.png';
import order_icon from './assets/order-icon.png';
import { Helmet } from 'react-helmet';

export default function MyCart({ foodItems }) {
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
          <img src={order_icon} className="cart-icon" alt="Cart Icon" />
          <div className="my-cart-text">My Orders</div>
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
          <div className="price">
            Total: <b className="bold-price">Rs. {item["food-item-price"]}</b>
          </div>
        </div>
      ))}
    </div>
  );
}

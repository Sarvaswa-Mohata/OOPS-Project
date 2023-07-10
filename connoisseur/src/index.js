import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import MyCart from './MyCart.js';
import MyOrders from './MyOrders.js';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/menu",
    element: <LandingPage />,
  },
  {
    path: "/cart",
    element: <MyCart />,
  },
  {
    path: "/orders",
    element: <MyOrders />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router} />
);



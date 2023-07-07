import './App.css';
import LandingPage from './LandingPage';
import MyCart from './MyCart.js';
import MyOrders from './MyOrders.js';
import cart_order from './cart_order.json';
import my_orders from './my_order_history.json';
import New from './new.js';
import LoginPage from './LoginPage';
import Popup from './popup';
const cart_order_details = cart_order;
const my_order = my_orders;


function App() {
  return (
    <div>
      {/* <MyCart foodItems={cart_order_details} /> */}
      {/* <MyOrders foodItems = {my_order} /> */}
      {/* <New /> */}
      {/* <LoginPage /> */}
      <LandingPage />
    </div>
  );
}

export default App;

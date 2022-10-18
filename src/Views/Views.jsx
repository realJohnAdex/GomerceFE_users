import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Cart from "../pages/Cart";
import CheckoutAddress from "../pages/CheckoutAddress";
import CheckoutPayment from "../pages/CheckoutPayment";
import ItemPage from "../pages/ItemPage";
import LogIn from "../pages/LogIn";
import OrdersDetail from "../pages/OrdersDetail";
import OrdersHistory from "../pages/OrdersHistory";
import SearchPage from "../pages/SearchPage";
import SignUp from "../pages/SignUp";
import PageNotFound from "../pages/PageNotFound";
const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout-address" element={<CheckoutAddress />} />
      <Route path="/checkout-payment" element={<CheckoutPayment />} />
      <Route path="/item-page" element={<ItemPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/order-detail" element={<OrdersDetail />} />
      <Route path="/order-history" element={<OrdersHistory />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Views;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Menu from "../Pages/AllPages.jsx/Menu";
import Navbar from "./Navbar";
import PaymentPage from "../Pages/AllPages.jsx/PaymentPage";

function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payment-page" element={<PaymentPage />} />
        <Route path="/admin" element={<h1>hello</h1>} />
      </Routes>
    </>
  );
}

export default AllRoutes;

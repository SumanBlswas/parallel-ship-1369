import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Menu from "../Pages/AllPages.jsx/Menu";
// import Navbar from "./Navbar";
import PaymentPage from "../Pages/AllPages.jsx/PaymentPage";
import AdminLogin from "../Pages/Admin/AdminLogin";
import Admin from "../Pages/Admin/Admin";
// import AdminProduct from "../Pages/Admin/AdminProduct";
import MainPage from "../Pages/Admin/Main";
import AdminCustomer from "../Pages/Admin/AdminCustomer";
import Post from "../Pages/Admin/Post";
import Put from "../Pages/Admin/Put";

function AllRoutes() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payment-page" element={<PaymentPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-login/admin" element={<Admin />} />
        <Route path="/admin-login/admin/admin-product" element={<MainPage />} />
        <Route
          path="/admin-login/admin/admin-customer"
          element={<AdminCustomer />}
        />
        <Route
          path="/admin-login/admin/admin-product/post"
          element={<Post />}
        />
        <Route path="/admin-login/admin/admin-product/put" element={<Put />} />
      </Routes>
    </>
  );
}

export default AllRoutes;

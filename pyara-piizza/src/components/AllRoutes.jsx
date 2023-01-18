import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Menu from "../Pages/AllPages.jsx/Menu";
import Navbar from "./Navbar";

function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default AllRoutes;

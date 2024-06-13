import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex flex-col  justify-between">
      <div className="container mt-10 flex-grow m-auto">
        <Navbar />
        <div className="mt-10 flex-grow">
          <Outlet />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

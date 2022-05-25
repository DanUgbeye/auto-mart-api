import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const SecondaryLayout = () => {
  return (
    <section className=" bg-primary-light-30 grid grid-cols-[200px_auto] ">
      
      <Navbar extraStyle=" col-start-1 col-end-2 bg-primary-red-60 " />

      <div className=" col-start-2 col-end-3 ">
        <Outlet />
      </div>
      
    </section>
  );
};

export default SecondaryLayout;

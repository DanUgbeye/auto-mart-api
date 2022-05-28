import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Heading from "../components/heading";

const Adverts = () => {
  return (
    <section>
      <Heading
        heading={"Adverts"}
        supportText={"find created adverts or create a new one"}
        extraStyle={
          " px-8 py-2 text-primary-red-60 sticky top-0 left-0 right-0 z-[1000] bg-primary-light-30 shadow-black/10 shadow-md relative "
        }
        headingStyle={" text-5xl mb-2  "}
        supportTextStyle={" text-lg "}
      />

      {/* <div className=" w-full my-4 text-xl ">
        <NavLink
          to=""
          className={({ isActive }) =>
            `  mb-8 px-4 py-2   ${
              isActive
                ? "text-primary-red-60 bg-primary-light-30 rounded-l-lg font-semibold "
                : " bg-primary-red-30 text-primary-light-30 rounded-lg mr-2 hover:bg-white/40 "
            }  `
          }
        >
          Adverts
        </NavLink>

        <NavLink
          to="create"
          className={({ isActive }) =>
            `  mb-8 px-4 py-2   ${
              isActive
                ? "text-primary-red-60 bg-primary-light-30 rounded-l-lg font-semibold "
                : " bg-primary-red-30 text-primary-light-30 rounded-lg mr-2 hover:bg-white/40 "
            }  `
          }
        >
          Create
        </NavLink>
      </div> */}

      <Outlet />
    </section>
  );
};

export default Adverts;

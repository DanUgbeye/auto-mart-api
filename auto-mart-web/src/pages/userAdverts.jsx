import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";

const UserAdverts = () => {
  return (
    <div className=" mt-8 mx-8 ">
      <div className=" flex gap-12 items-center mb-8 ">
        <h3 className=" text-3xl md:mx-8 lg:mx-12  text-center w-full text-primary-red-60 ">
          Your Adverts
        </h3>
        <Link
          to="create"
          className={` flex gap-2 text-sm w-fit min-w-[8rem]  bg-primary-red-60 hover:bg-primary-red-90 py-3 h-fit rounded-md text-primary-light-30 justify-center items-center tracking-wider px-2 `}
        >
          <i className=" fa fas fa-plus " />
          <span className="w-fit">New &nbsp;Advert</span>
        </Link>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center my-8 ">
        <Card
          car={{
            id: "somerandomid",
            model: "camry",
            year: "2010",
            manufacturer: "Toyota",
            price: 500000,
          }}
        />

        <Card
          car={{
            id: "somerandomid",
            model: "camry",
            year: "2010",
            manufacturer: "Toyota",
            price: 500000,
          }}
        />
      </div>
    </div>
  );
};

export default UserAdverts;

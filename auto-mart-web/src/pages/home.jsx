import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/heading";
import vehicleHero from "../assets/svg/vehicle_sale.svg";

const Home = () => {
  return (
    <main className=" bg-primary-light-30 text-primary-red-60 min-h-[100vh] h-fit flex flex-col relative ">
      <header className=" flex justify-between px-4 py-4 items-center relative ">
        <h1 className=" text-3xl text-base-blue px-2 ">
          Auto <span className="  "> Mart</span>
        </h1>
        {/* <Link to={"/login"} className={" h-8 grid place-items-center hover:bg-primary-red-90 px-4 bg-primary-red-60 text-white rounded "}>
          Login
        </Link> */}
      </header>

      <section className=" absolute mx-8 mt-12 left-0 right-0 top-[50%] translate-y-[-50%] flex flex-col lg:flex-row gap-8 justify-center items-center ">
        <Heading
          heading={"The trusted platform for buying and selling cars"}
          supportText={
            "Buy and sell automobiles on your device. We offer deliveries anywhere in the world, Literally!"
          }
          extraStyle={"max-w-md w-full order-2 lg:order-1 "}
          headingStyle={"text-4xl lg:text-5xl text-left "}
          supportTextStyle={"text-left text-primary-red-60 text-lg"}
        >
          <div className=" flex gap-8 mt-8 ">
            <Link
              to="/signup"
              className=" px-4 py-2 grid place-items-center bg-primary-red-60 rounded-md text-white hover:bg-primary-red-90 "
            >
              Sign Up
            </Link>
            
            <Link
              to="/login"
              className=" px-4 py-2 text-lg grid place-items-center rounded-md hover:underline hover:underline-offset-4 "
            >
              Login
            </Link>
          </div>
        </Heading>

        <img
          src={vehicleHero}
          alt="car sale"
          className=" max-w-md w-full mt-8 order-1 lg:order-2 "
        />
      </section>
    </main>
  );
};

export default Home;

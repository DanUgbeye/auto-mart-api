import { useState } from "react";
import Card from "../components/card";
import Heading from "../components/heading";
import Loading from "../layouts/loading";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className=" relative min-h-[100vh] ">
      <Heading
        heading={"Market Place"}
        supportText={"find cars listed for sale here"}
        extraStyle={
          " px-8 py-2 text-primary-red-60 sticky top-0 left-0 right-0 z-[1000] bg-primary-light-30 shadow-black/10 shadow-md relative "
        }
        headingStyle={" text-5xl mb-2  "}
        supportTextStyle={" text-lg "}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 gap-8 place-items-center my-8 ">
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
      )}
    </section>
  );
};

export default Dashboard;

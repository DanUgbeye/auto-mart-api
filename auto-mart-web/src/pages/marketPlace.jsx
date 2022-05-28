import { useEffect, useState } from "react";
import Card from "../components/card";
import Heading from "../components/heading";
import Loading from "../layouts/loading";
import API from "../utils/api";

const MarketPlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [cars, setCars] = useState([]);

  function loadCars() {
    setIsLoading(true);
    API.getAllCars()
      .then((carsData) => {
        setCars(carsData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("an error occured, please refresh the page");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadCars();
  }, []);

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

      {error && (
        <div className=" absolute text-2xl text-primary-red-60 border-solid border-primary-red-60 border p-4 top-[50%] translate-y-[-50%] flex flex-col left-[50%] translate-x-[-50%] rounded-md  max-w-xl min-w-[20rem] ">
          {error}
          <span className="  text-lg font-semibold ">If error persists try to logout and log back in</span>
        </div>
      )}

      {!error &&
        (isLoading ? (
          <Loading />
        ) : cars.length > 0 ? (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 gap-8 place-items-center my-8 ">
            {cars.map((car) => (
              <Card
                car={{
                  id: car._id,
                  model: car.model,
                  year: car.year,
                  manufacturer: car.manufacturer,
                  price: car.price,
                  image: car.image
                }}
                key={car._id}
              />
            ))}
          </div>
        ) : (
          <div className=" absolute text-2xl text-primary-red-60 border-solid border-primary-red-60 border p-4 top-[50%] translate-y-[-50%] text-center left-[50%] translate-x-[-50%] rounded-md  max-w-md ">
            No data to display
          </div>
        ))
      }
    </section>
  );
};

export default MarketPlace;

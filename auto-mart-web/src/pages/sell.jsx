import { useState } from "react";
import Heading from "../components/heading";

const Sell = () => {
  const [model, setModel] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();

  function handleImageChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files.length > 1) {
        // throw error that files cannot be more than one
      }
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  }

  function resetValues() {
    setModel("");
    setManufacturer("");
    setYear("");
    setPrice("");
    setImage();
  }

  function listCarForSale(e) {
    e.preventDefault();
    const body = {
      model,
      manufacturer,
      year,
      price,
      image,
    };
    // validate data

    //make api call

    resetValues();
  }

  return (
    <section className="  ">
      <Heading
        heading={"Sell a Car"}
        supportText={"supply the datails of the car you wish to sell"}
        extraStyle={
          " px-8 py-2 text-primary-red-60 sticky top-0 left-0 right-0 z-[1000] bg-primary-light-30 shadow-black/10 shadow-md relative "
        }
        headingStyle={" text-5xl mb-2  "}
        supportTextStyle={" text-lg "}
      />

      <div className=" my-8 mx-4 ">
        <form className=" w-full max-w-lg text-primary-red-30 mx-auto lg:max-w-none ">

          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 md:mx-8 lg:mx-12 justify-center ">
            <div className="w-full">
              <fieldset className=" relative mb-8 flex justify-center flex-col ">
                <label className=" w-[11rem] text-lg  ">Model</label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value);
                  }}
                  placeholder="enter car model"
                  className=" w-full p-2 outline-none h-12 overflow-hidden "
                />
              </fieldset>

              <fieldset className=" relative mb-8 flex justify-center flex-col ">
                <label className=" w-[11rem] text-lg  ">Manufacturer</label>
                <input
                  type="text"
                  name="manufacturer"
                  id="manufacturer"
                  value={manufacturer}
                  onChange={(e) => {
                    setManufacturer(e.target.value);
                  }}
                  placeholder="enter car manufacturer"
                  className=" w-full p-2 outline-none h-12 overflow-hidden "
                />
              </fieldset>

              <fieldset className=" relative mb-8 flex justify-center flex-col ">
                <label className=" w-[11rem] text-lg  ">Year</label>
                <input
                  type={"text"}
                  name="year"
                  id="year"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                  placeholder="enter year of manufacture"
                  className=" w-full  p-2 outline-none h-12 overflow-hidden border-b "
                />
              </fieldset>

              <fieldset className=" relative mb-8 flex justify-center flex-col ">
                <label className=" w-[11rem] text-lg  ">Price</label>
                <input
                  type={"text"}
                  name="price"
                  id="price"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  placeholder="enter price of sale"
                  className=" w-full  p-2 outline-none h-12 overflow-hidden border-b "
                />
              </fieldset>
            </div>

            <div className=" w-full ">
              <fieldset className=" relative mb-8 flex items-center justify-center ">
                <label htmlFor="image" className=" text-primary-red-60 hover:text-primary-red-90 text-lg cursor-pointer border-solid border-primary-red-60 border rounded-sm px-4 py-2 ">
                  <span className=" flex gap-4 items-center ">
                    <i className="fa fa-2x fa-camera"/>
                    {!image ? "select car image" : "choose another image"}
                  </span>

                  <input
                    type={"file"}
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e)}
                    placeholder=""
                    className=" w-full hidden p-2 outline-none h-12 overflow-hidden border-b "
                  />
                </label>
              </fieldset>

              {image && (
                <div className=" grid place-items-center mb-12 ">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="car"
                    className=" max-w-sm w-full "
                  />
                </div>
              )}
            </div>
          </div>

          <button
            className=" w-[7rem] mx-auto flex justify-center items-center gap-2 py-2 h-12 bg-primary-red-60 hover:bg-primary-red-90 text-white rounded-md text-base-blue text-lg tracking-wider hover:tracking-widest "
            onClick={(e) => listCarForSale(e)}
          >
            <i className=" fa far fa-save text-xl " />
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default Sell;

import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ car }) => {
  return (
    <Link to={`buy/${car.id}`} className=" relative bg-primary-light-60 w-full h-fit overflow-hidden flex flex-col rounded-md hover:shadow-lg hover:shadow-gray-600/30 card ">
        {
            car.image ?
            <img src={car.image} alt={`${car.manufacturer} ${car.model}`} className=" w-full h-[10rem] " /> :
            <div className=" bg-primary-red-60 w-full h-[10rem] "></div>            
        }

        <div className=" absolute w-full h-full hidden bg-slate-600/30 text-white/80 tracking-widest text-3xl place-items-center buy ">BUY</div>
        
        <div id="car-desc" className=" m-4 text-primary-red-90 ">
        <div className=" flex justify-between  ">
            <div className=' text-lg font-semibold '>
                <span className="  ">{car.manufacturer}</span>{" "}
                <span className="  ">{car.model.toUpperCase()}</span>{" "}
            </div>
            <span className="  ">{car.year}</span>
        </div>
        <p className="  ">{car.price.toLocaleString() + " NGN"}</p>
        </div>
    </Link>
  )
}

export default Card;
import React from "react";
import value from "./images/value1.png";
import { TbToolsKitchen } from "react-icons/tb";
import { GiTomato } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";

const Value = () => {
 
  return (
    <div
    s
      id="value"
      
      className="mt-12 p-8 bg-[#EDF7F8]  h-full flex md:flex-row
      flex-col justify-around"
    >
      <div className="flex flex-col gap-4">
        <p className="text-[#FFA300] delicious text-3xl md:text-5xl ">
          Why choose us ?
        </p>
        <h1 className="md:text-5xl text-3xl text-[#16B97A] signika font-bold">
          Healthy & Tasty Foods
        </h1>
        <h1 className="md:text-5xl text-5xl alata font-bold">
          Timely Delivery
        </h1>

        <p className="text-gray-400 quicksand">
          Meal prep allows individuals to eat healthier.
        </p>
        <p className="text-gray-400 quicksand">
          It save time during busy weekdays by preparing meals ahead of time.
        </p>
        <p className="text-gray-400 quicksand">
          We ensure you get timely delivery in Nairobi and its environs.
        </p>
        <p className="text-gray-400 quicksand">
          There is also an option of me cooking for you at your home.
        </p>

        <div className="flex hover:scale-105 cursor-pointer transition-all duration-500 p-4 gap-4 shadow-gray-200 my-4 shadow-xl bg-white rounded-2xl">
          <TbToolsKitchen className="text-[#16B97A]" size={30} />
          <p className="text-xl alata font-bold">
            {" "}
            All menu recipe made by the best .
          </p>
        </div>

        <div className="flex hover:scale-105 cursor-pointer transition-all duration-500 p-4 gap-4 shadow-gray-200 my-4 shadow-xl bg-white rounded-2xl">
          <GiTomato className="text-[#16B97A]" size={30} />
          <p className="text-xl alata font-bold">
            {" "}
            Fresh and locally grown products
          </p>
        </div>

        <div className="flex p-4 hover:scale-105 cursor-pointer transition-all duration-500 gap-4 shadow-gray-200 my-4 shadow-xl bg-white rounded-2xl">
          <CiDeliveryTruck className="text-[#16B97A]" size={30} />
          <p className="text-xl alata font-bold"> Fast delivery .</p>
        </div>
      </div>
      <div>
        <div className="bg-white md:w-[550px] w-[90%] mx-auto rounded-tl-3xl h-[52vh] md:h-[77vh]  rounded-br-3xl flex items-center">
          <div
            className=" bg-gradient-to-t from-[#FFA300] flex justify-center my-auto mx-auto  h-[50vh] md:h-[75vh]  overflow-hidden  w-[95%]"
            style={{
              borderBottomRightRadius: "70px",
              borderTopLeftRadius: "70px",
            }}
          >
            <img src={value} alt="value" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;

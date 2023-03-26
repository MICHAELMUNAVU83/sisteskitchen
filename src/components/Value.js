import React from "react";
import value from "./images/value1.png";
import { TbToolsKitchen } from "react-icons/tb";
import { GiTomato } from "react-icons/gi";

import { CiDeliveryTruck } from "react-icons/ci";

const Value = () => {
  return (
    <div id="value" className="mt-12 p-8  bg-[#EDF7F8] md:h-[80vh] h-full flex md:flex-row flex-col justify-around">
      <div className="flex flex-col gap-2">
        <p className="text-[#FFA300] ">Why choose us</p>
        <h1 className="text-5xl font-bold">Our Value To Help You</h1>

        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
        </p>
        <p className="text-gray-400">
          commodo justo, in lacinia libero maximus ut. Pellentesque accumsan
        </p>
        <p className="text-gray-400">
          lacus faucibus, gravida ligula ut, gravida magna.
        </p>

        <div className="flex hover:scale-105 cursor-pointer transition-all duration-500 p-4 gap-4 shadow-gray-200 my-4 shadow-xl bg-white rounded-2xl">
          <TbToolsKitchen className="text-[#16B97A]" size={30} />
          <p className="text-xl font-bold">
            {" "}
            All menu recipe made by specialists
          </p>
        </div>

        <div className="flex hover:scale-105 cursor-pointer transition-all duration-500 p-4 gap-4 shadow-gray-200 my-4 shadow-xl bg-white rounded-2xl">
          <GiTomato className="text-[#16B97A]" size={30} />
          <p className="text-xl font-bold"> Fresh and locally grown products</p>
        </div>

        <div className="flex p-4 hover:scale-105 cursor-pointer transition-all duration-500 gap-4 shadow-gray-200 my-4 shadow-xl bg-white rounded-2xl">
          <CiDeliveryTruck className="text-[#16B97A]" size={30} />
          <p className="text-xl font-bold"> Fast delivery and easy returns</p>
        </div>
      </div>

      <div>
        <div className="bg-white md:w-[550px] w-[90%] mx-auto rounded-tl-3xl h-[52vh] md:h-[85vh]  rounded-br-3xl flex items-center">
          <div
            className=" bg-gradient-to-t from-[#FFA300] flex justify-center my-auto mx-auto  h-[50vh] md:h-[82vh]  overflow-hidden  w-[95%]"
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

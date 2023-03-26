import React from "react";
import value from "./images/value1.png";
import { TbToolsKitchen } from "react-icons/tb";
import { GiTomato } from "react-icons/gi";

import {GrDeliver} from "react-icons/gr"

const Value = () => {
  return (
    <div className="mt-12 p-8  bg-[#EDF7F8] h-[80vh] flex justify-around">
      <div className="flex flex-col gap-2">
        <p>Why choose us</p>
        <h1>Our Value To Help You</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
        </p>
        <p>
          commodo justo, in lacinia libero maximus ut. Pellentesque accumsan
        </p>
        <p>lacus faucibus, gravida ligula ut, gravida magna.</p>

        <div className="flex p-4 gap-4 shadow-gray-200 my-4 shadow-xl bg-white rounded-2xl">
          <TbToolsKitchen className="text-[#16B97A]" size={30} />
          <p className="text-xl font-bold">
            {" "}
            All menu recipe made by specialists
          </p>
        </div>

        <div className="flex p-4 gap-4 shadow-gray-200 my-4 shadow-xl bg-white rounded-2xl">
          <GiTomato className="text-[#16B97A]" size={30} />
          <p className="text-xl font-bold"> Fresh and locally grown products</p>
        </div>

        <div className="flex p-4 gap-4 shadow-gray-200 my-4 shadow-xl bg-white rounded-2xl">
          <GrDeliver className="text-[#16B97A]" size={30} />
          <p className="text-xl font-bold"> Fast delivery and easy returns</p>
        </div>
      </div>

      <div>
        <div className="bg-white w-[550px] rounded-tl-3xl h-[68vh] rounded-br-3xl flex items-center">
          <div className=" bg-gradient-to-t from-[#FFA300] flex justify-center my-auto mx-auto  bg- h-[82vh] from-blue-500 overflow-hidden rounded-tl-3xl rounded-br-3xl  w-[95%]">
            <img src={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;

import React from "react";
import about from "./images/about.jpeg";
import { BsArrowRight } from "react-icons/bs";
const About = () => {
  return (
    <div className="mt-24 flex justify-center">
      <div>
        <img src={about} className="w-[800px] h-[650px]" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">About Us</h1>
        <h1>Healthy & Tasty Foods</h1>
        <h1>Healthy & Tasty Foods</h1>
        <p>
          Lorem ipsum do lor sit amet, consectetur adipiscing elit. Nullam vel
          commodo dolor. Vivamus eu nunc convallis, finibus arcu quis, ultrices
          purus
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          commodo dolor. Vivamus eu nunc convallis, finibus arcu quis, ultrices
          purus
        </p>
        <div className="flex justify-center gap-16">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold">100+</h1>
            <p>Happy Customers</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold">100+</h1>
            <p>Happy Customers</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold">100+</h1>
            <p>Happy Customers</p>
          </div>
        </div>
        <button className="bg-[#FFA300] gap-2 text-2xl flex w-[200px] h-[70px] font-bold cursor-pointer rounded-tl-xl rounded-br-3xl hover:bg-[#16B97A] transition-all duration-300 text-white px-4 py-4 ">
          <p>Read More</p>
          <BsArrowRight className="text-white" size={35} />
        </button>
      </div>
    </div>
  );
};

export default About;

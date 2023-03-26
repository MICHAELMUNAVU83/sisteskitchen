import React from "react";
import about from "./images/about.jpeg";
import { BsArrowRight } from "react-icons/bs";
const About = () => {
  return (
    <div id="about" className="md:mt-24 mt-4 flex md:flex-row flex-col gap-4 md:gap-24 justify-center">
      <div>
        <img src={about} className="md:w-[700px] w-[80%] mx-auto h-[360px] md:h-[650px]" alt="about"/>
      </div>
      <div className="flex md:p-0 p-4 flex-col gap-2 md:gap-8">
        <h1 className="text-md text-[#FFA300]">About Us</h1>
        <h1 className="md:text-5xl text-xl font-bold">Healthy & Tasty Foods</h1>
        <h1  className="md:text-5xl text-xl font-bold">Healthy & Tasty Foods</h1>
        <p className="md:w-[600px]  text-gray-400">
          Lorem ipsum do lor sit amet, consectetur adipiscing elit. Nullam vel
          commodo dolor. Vivamus eu nunc convallis, finibus arcu quis, ultrices
          purus
        </p>
        <p className="md:w-[600px] text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          commodo dolor. Vivamus eu nunc convallis, finibus arcu quis, ultrices
          purus
        </p>
        <div className="flex justify-center gap-4 md:gap-16">
          <div className="flex flex-col items-center gap-2">
            <h1 className="md:text-4xl text-2xl font-bold text-[#16B97A]">100+</h1>
            <p className="text-sm md:text-md ">Happy Customers</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="md:text-4xl text-2xl font-bold text-[#16B97A]">100+</h1>
            <p className="text-sm md:text-md ">Happy Customers</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="md:text-4xl text-2xl font-bold text-[#16B97A]">100+</h1>
            <p className="text-sm md:text-md ">Happy Customers</p>
          </div>
        </div>
        <button className="bg-[#FFA300] md:mt-0 mt-4 gap-2 md:text-2xl text-xl flex w-[200px] h-[70px] font-bold cursor-pointer rounded-tl-xl rounded-br-3xl hover:bg-[#16B97A] transition-all duration-300 text-white px-4 py-4 ">
          <p>Read More</p>
          <BsArrowRight className="text-white text-3xl"  />
        </button>
      </div>
    </div>
  );
};

export default About;

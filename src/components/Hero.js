import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import reviewphoto from "./images/review-photo.png";
import { AiTwotoneStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import hero from "./images/hero.png";
const Hero = () => {
  return (
    <div
      id="about"
      className="bg-[#EDF7F8] p-4  md:p-16 flex md:flex-row flex-col justify-center"
    >
      <div className="flex flex-col pl-2 md:pl-24  gap-2 ">
        <h1 className="text-[#FFA300] text-sm md:text-md">
          Professional Nutritionist
        </h1>

        <p className="text-[#16B97A] font-bold text-xl md:text-6xl">
          MAKE HEALTHY LIFE
        </p>
        <p className="font-bold text-md md:text-5xl">WITH SISTE'S KITCHEN</p>
        <p className="text-gray-400 my-4 text-sm md:text-md   w-[90%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus,
        </p>
        <div className="flex md:gap-24 gap-8">
          <button className="bg-[#FFA300] flex gap-2 font-normal md:font-semibold cursor-pointer rounded-tl-xl rounded-br-3xl hover:bg-[#16B97A] transition-all duration-300 text-white md:text-md text-sm py-2  px-4 md:px-8 md:py-4 ">
            <p>Read More</p>
            <BsArrowRight className="text-white text-xl" />
          </button>

          <div className="flex items-center gap-2">
            <BsPlayCircle className="text-[#FFA300] text-xl md:text-5xl cursor-pointer hover:text-[#16B97A] transition-all duration-300" />
            <p>Watch Video</p>
          </div>
        </div>
        <div className="flex  gap-4 mt-8">
          <img src={reviewphoto} className=" md:h-[70px] h-[50px] w-[100px]" alt="reviewphoto" />
          <div className="flex flex-col gap-2">
            <p className="text-[#16B97A] font-semibold">Our Happy Customers</p>
            <p className="flex md:gap-2 gap-1 text-md ">
              <AiTwotoneStar className="text-[#FFA300]" size={25} />5 Star rated
              
            </p>
          </div>
        </div>
      </div>
      <div className="md:pr-24 md:mt-0 mt-4">
        <div
          className="bg-[#FFA300] md:w-[600px] w-[90%] mx-auto h-[40vh]  md:h-[60vh] flex flex-col items-center"
          style={{
            borderBottomRightRadius: "70px",

            borderTopLeftRadius: "70px",
          }}
        >
          <img src={hero} alt="hero" className=" md:w-[550px] h-[40vh]  md:h-[60vh] my-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

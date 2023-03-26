import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import reviewphoto from "./images/review-photo.png";
import { AiTwotoneStar } from "react-icons/ai";
import hero from "./images/hero.png";
const Hero = () => {
  return (
    <div className="bg-[#EDF7F8] h-[65vh] p-16 flex justify-center">
      <div className="flex flex-col pl-24  gap-2 ">
        <h1 className="text-[#FFA300]">Professional Nutritionist</h1>

        <p className="text-[#16B97A]">MAKE HEALTHY EATING A HABIT</p>
        <p>WITH SISTES KITCHEN</p>
        <p className="text-gray-400 w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus,
        </p>
        <div className="flex gap-24">
          <button className="bg-[#FFA300] cursor-pointer rounded-tl-xl rounded-br-3xl hover:bg-[#16B97A] transition-all duration-300 text-white px-4 py-2 ">
            Get Started
          </button>

          <div className="flex items-center gap-2">
            <BsPlayCircle
              className="text-[#FFA300] cursor-pointer hover:text-[#16B97A] transition-all duration-300"
              size={50}
            />
            <p>Watch Video</p>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <img src={reviewphoto} className=" h-[70px]" />
          <div className="flex flex-col gap-2">
            <p className="text-[#16B97A]">Our Happy Customers</p>
            <p className="flex gap-2">
              <AiTwotoneStar className="text-[#FFA300]" size={25} />
              8,5 (12K+ Review)
            </p>
          </div>
        </div>
      </div>
      <div className="pr-24">
        <div
          className="bg-[#FFA300] w-[500px] h-[60vh] flex flex-col items-center"
          style={{
            borderBottomRightRadius: "70px",

            borderTopLeftRadius: "70px",
          }}
        >
          <img src={hero} className=" w-[450px] h-[60vh] my-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

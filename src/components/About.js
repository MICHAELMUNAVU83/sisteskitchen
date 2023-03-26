import React from "react";
import about from "./images/about.jpeg";
import { BsTelephoneFill } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div
        id="about"
       
        className="md:mt-24 mt-4 flex md:flex-row flex-col gap-4 md:gap-24 justify-center"
      >
        <div>
          <img
            src={about}
            className="md:w-[700px] w-[80%] mx-auto h-[360px] md:h-[650px]"
            alt="about"
          />
        </div>
        <div className="flex md:p-0 p-4 flex-col gap-2 md:gap-8">
          <h1 className="md:text-5xl text-3xl delicious text-[#FFA300]">
            About Us
          </h1>
          <h1 className="md:text-7xl text-5xl text-[#16B97A] signika font-bold">
            Meal Prep
          </h1>
          <h1 className="md:text-5xl text-3xl alata font-bold">
            Indoor & Outdoor Catering
          </h1>
          <p className="md:w-[600px] quicksand  text-gray-400">
            I make amazing food ranging from African to American and everything
            in between. I have been cooking for over 10 years and I love to
            share my passion with others.
          </p>
          <p className="md:w-[600px] quicksand text-gray-400">
            I have services ranging from meal prep, in house and outdoor
            catering and cooking classes. I am also available for private events
            and parties.
          </p>
          <div className="flex justify-center gap-4 md:gap-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="md:text-7xl text-2xl signika font-bold text-[#16B97A]">
                500+
              </h1>
              <p className="text-sm md:text-md alata ">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="md:text-7xl text-2xl signika font-bold text-[#16B97A]">
                2k+
              </h1>
              <p className="text-sm md:text-md alata">Meals Served</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="md:text-7xl text-2xl signika font-bold text-[#16B97A]">
                20+
              </h1>
              <p className="text-sm md:text-md alata ">Events</p>
            </div>
          </div>
          <button className="bg-[#FFA300] md:mt-0 mt-4 gap-2 md:text-2xl text-md flex w-[160px] md:h-[70px] h-[50px] font-bold cursor-pointer rounded-tl-xl rounded-br-3xl hover:bg-[#16B97A] transition-all duration-300 text-white md:px-4 md:py-4 px-8 py-2 ">
            <p>Call Us </p>
            <BsTelephoneFill className="text-white text-xl md:text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

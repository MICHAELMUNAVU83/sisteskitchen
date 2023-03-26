import React from "react";
import newsletter from "./images/newsletter.png";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

import { AiFillInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";

const NewsLetter = () => {
  return (
    <div id="contact" className="my-12">
      <div className="bg-gradient-to-tl rounded-3xl from-[#A0D9C1] flex md:flex-row flex-col justify-between my-auto mx-auto  md:h-[82vh] overflow-hidden w-[90%]   md:w-[80%]">
        <div className="flex mt-24 flex-col gap-2 p-4 md:p-8 md:pl-16">
          <h1 className="md:text-5xl text-3xl font-bold signika">
            Subscribe to Our
          </h1>
          <h1 className="md:text-5xl alata text-2xl w-[100%] text-leading font-bold">
            Newsletter & Get Benefits
          </h1>
          <p className="text-gray-400 quicksand my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className="flex md:flex-row flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" md:w-[400px] w-[300px] rounded-xl p-4"
            />
            <button
              className="bg-[#FFA300] w-[50%]  hover:bg-[#16B97A] hover:scale-105 transition-all duration-500  text-white px-4 md:px-8 py-2 md:py-4"
              style={{
                borderTopLeftRadius: "10px",
                borderBottomRightRadius: "30px",
              }}
            >
              Subscribe
            </button>
          </div>
          <div className="text-xl flex flex-col gap-2 ">
            <h1 className="md:text-5xl text-2xl alata font-bold">
              You can Contact us at
            </h1>

            <div className="flex text-sm md:text-xl quicksand text-gray-500 hover:text-black hover:scale-105 transition-all duration-300  items-center">
              <a
                href="https://wa.me/1234567890"
                rel="noreferrer"
                target="_blank"
                className="flex items-center"
              >
                <IoLogoWhatsapp className="mx-2" /> 123-456-7890
              </a>
            </div>
            <div className="flex text-sm md:text-xl quicksand text-gray-500 hover:text-black hover:scale-105 transition-all duration-300  items-center">
              <a
                href="tel:1234567890"
                rel="noreferrer"
                className="flex items-center"
                target="_blank"
              >
                <IoCall className="mx-2" /> 123-456-7890
              </a>
            </div>
            <div className="flex text-sm md:text-xl quicksand text-gray-500 hover:text-black hover:scale-105 transition-all duration-300  items-center">
              <a
                href="tiktok.com"
                rel="noreferrer"
                className="flex items-center"
                target="_blank"
              >
                <SiTiktok className="mx-2" /> Tiktok
              </a>
            </div>
            <div className="flex text-sm md:text-xl quicksand text-gray-500 hover:text-black hover:scale-105 transition-all duration-300  items-center">
              <a
                href="instagram.com"
                rel="noreferrer"
                className="flex items-center"
                target="_blank"
              >
                <AiFillInstagram className="mx-2" /> Instagram
              </a>
            </div>
            <div className="flex text-sm md:text-xl quicksand text-gray-500 hover:text-black hover:scale-105 transition-all duration-300  items-center">
              <a href="/" className="flex items-center">
                <IoLocationSharp className="mx-2" /> Nairobi, Kenya
              </a>
            </div>
          </div>
        </div>

        <div>
          <img
            src={newsletter}
            className="w-[500px] h-[40vh] md:h-[82vh] mt-12"
            alt="newsletter"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

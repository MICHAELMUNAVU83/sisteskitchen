import React from "react";
import newsletter from "./images/newsletter.png";

const NewsLetter = () => {
  return (
    <div className="my-12">
      <div className="bg-gradient-to-tl rounded-3xl from-[#A0D9C1] flex justify-between my-auto mx-auto  bg- h-[82vh] overflow-hidden  w-[80%]">
        <div className="flex flex-col gap-2 p-8 pl-16">
          <h1>Subscribed to Our</h1>
          <h1>Newsletter & Get Benefits</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="] w-[300px] rounded-xl p-4"
            />
            <button
              className="bg-[#FFA300] text-white  p-4"
              style={{
                borderTopLeftRadius: "10px",
                borderBottomRightRadius: "30px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <img src={newsletter} />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

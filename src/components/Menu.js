import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./splide-green.min.css";
import menu1 from "./images/menu1.jpg";
import menu2 from "./images/menu2.jpg";
import menu3 from "./images/menu3.jpg";
import menu4 from "./images/menu4.jpeg";
import menu5 from "./images/menu5.jpeg";
import menu6 from "./images/menu6.jpeg";
import { IoStarSharp } from "react-icons/io5";

const Menu = () => {
  const slides = [
    {
      image: menu1,
      name: "Pilau Rice",
      price: "Ksh 200",
      pax: "Feeds 2-3",
    },
    {
      image: menu2,
      name: "Pilau Rice",
      price: "Ksh 200",
      pax: "Feeds 2-3",
    },
    {
      image: menu3,
      name: "Pilau Rice",
      price: "Ksh 200",
      pax: "Feeds 2-3",
    },
    {
      image: menu4,
      name: "Pilau Rice",
      price: "Ksh 200",
      pax: "Feeds 2-3",
    },

    {
      image: menu5,
      name: "Pilau Rice",
      price: "Ksh 200",
      pax: "Feeds 2-3",
    },

    {
      image: menu6,
      name: "Pilau Rice",
      price: "Ksh 200",
      pax: "Feeds 2-3",
    },
  ];
  return (
    <div id="menu" className="mt-12 md:py-24 bg-[#EDF7F8] flex flex-col items-center  p-4">
      <h1 className="text-[#FFA300]  text-xl">Our Top Menu</h1>
      <p className="my-2 font-bold text-3xl md:text-7xl">Our Special Dish</p>
      <p className="my-4 md:text-2xl text-center text-sm my-2 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>
      <Splide
        className="w-[90%] mx-auto  "
        options={{
          perPage: 3,
          perMove: 1,
          autoplay: true,
          interval: 5000,
          rewind: true,
          pauseOnHover: false,
          pauseOnFocus: false,

          arrows: false,
          pagination: false,
          loop: true,

          drag: true,
          breakpoints: {
            640: {
              perPage: 1,
              perMove: 1,
            },
            768: {
              perPage: 1,
              perMove: 1,
            },
            1024: {
              perPage: 1,
              perMove: 1,
            },
          },
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index} >
            <div
              className="h-[490px] md:w-[360px] mx-4 bg-white shadow-gray-200   shadow-3xl "
              style={{
                borderTopLeftRadius: "70px",
                borderBottomRightRadius: "70px",
              }}
            >
              <img
                src={slide.image}
                alt="slide"
                className=" h-[300px] md:w-[360px] w-[400px] mx-auto"
                style={{
                  borderBottomRightRadius: "70px",
                  borderTopLeftRadius: "70px",
                }}
              />

              <div className="flex gap-2 mt-4 pl-4">
                <div className="flex gap-1">
                  <IoStarSharp className="text-[#FFA300]" size={20} />
                  <IoStarSharp className="text-[#FFA300]" size={20} />
                  <IoStarSharp className="text-[#FFA300]" size={20} />
                  <IoStarSharp className="text-[#FFA300]" size={20} />
                  <IoStarSharp className="text-[#FFA300]" size={20} />
                </div>
                <p>5.0</p>
              </div>

              <h1 className="text-5xl font-bold pl-4">{slide.name}</h1>
              <p className=" font-semibold text-2xl text-[#FFA300] pl-4">
                {slide.price}
              </p>
              <p className="text-gray-500 pl-4">{slide.pax}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Menu;

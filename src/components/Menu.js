import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./splide-green.min.css";
import menu1 from "./images/menu1.jpg";
import menu2 from "./images/menu2.jpg";
import menu3 from "./images/menu3.jpg";
import menu4 from "./images/menu4.jpeg";
import menu5 from "./images/menu5.jpeg";
import menu6 from "./images/menu6.jpeg";
import { IoStarSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
const Menu = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
          type: "tween",
          delay: 0.2,
          stiffness: 100,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView, animation]);
  const slides = [
    {
      image: menu1,
      name: "Pilau Rice",
      price: "Ksh 200",
      pax: "Feeds 2-3",
    },
    {
      image: menu2,
      name: "Chicken Pilau",
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
      name: "Beef Kebab",
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
      name: "Biriani",
      price: "Ksh 200",
      pax: "Feeds 2-3",
    },
  ];
  return (
    <motion.div
      id="menu"
      ref={ref}
      className="mt-12 md:py-24 bg-[#EDF7F8] flex flex-col items-center  p-4"
      animate={animation}
    >
      <h1 className="text-[#FFA300] md:text-5xl text-2xl delicious">
        Our Top Menu
      </h1>
      <p className="my-2 font-bold text-3xl md:text-7xl signika text-[#16B97A]">
        Our Special Dishes
      </p>
      <p className="font-bold text-md alata md:text-5xl">FOR RAMADAN</p>
      <p className="my-4 md:text-xl mb-4 text-center text-sm quicksand my-2 text-gray-500">
        For this Ramadan, we have prepared a special menu for you. We have
        carefully selected the best dishes for you and your family.
      </p>
      <Splide
        className="w-[95%] mx-auto  "
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
          <SplideSlide key={index}>
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

              <h1 className="text-5xl font-bold pl-4 signika">{slide.name}</h1>
              <p className=" font-semibold text-2xl alata text-[#FFA300] pl-4">
                {slide.price}
              </p>
              <p className="text-gray-500 quicksand pl-4">{slide.pax}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </motion.div>
  );
};

export default Menu;

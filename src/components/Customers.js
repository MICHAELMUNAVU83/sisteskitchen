import React from "react";
import happycustomer from "./images/happycustomer.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./splide-green.min.css";
import customer1 from "./images/customer1.jpg";
import customer2 from "./images/customer2.jpg";
import customer3 from "./images/customer3.jpg";
import customer4 from "./images/customer4.jpg";
import { IoStarSharp } from "react-icons/io5";

const Customers = () => {
  const slides = [
    {
      image: customer1,
      message: "This is the best food I have ever tasted .",
      name: "John Doe",
    },
    {
      image: customer2,
      message:
        "She offers the best indoor and outdoor catering services.I highly recommend her services.",
      name: "John Doe",
    },
    {
      image: customer3,
      message:
        "She offers the best indoor and outdoor catering services.I highly recommend her services.",
      name: "John Doe",
    },
    {
      image: customer4,
      message: "This is the best food I have ever tasted . ",
      name: "John Doe",
    },
  ];
  return (
    <motion.div
      className="mt-12 md:py-24 py-12    p-4"
      ref={ref}
      animate={animation}
    >
      <div className="flex md:flex-row flex-col gap-12  justify-around  md:gap-48 ">
        <div>
          <div
            className="bg-[#EDF7F8]   flex items-center"
            style={{
              borderBottomRightRadius: "50px",
              borderTopRightRadius: "70px",
              borderTopLeftRadius: "70px",
              borderBottomLeftRadius: "150px",
            }}
          >
            <div
              className=" bg-gradient-to-t from-[#FFA300] flex justify-center my-auto mx-auto h-[50vh]   md:h-[82vh] overflow-hidden  w-[95%]"
              style={{
                borderBottomRightRadius: "50px",
                borderTopRightRadius: "70px",
                borderTopLeftRadius: "70px",
                borderBottomLeftRadius: "150px",
              }}
            >
              <img src={happycustomer} alt="happy customer" />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[90%] mx-auto md:w-[50%] gap-2">
          <h1 className="text-[#FFA300] md:text-5xl text-2xl delicious">
            Testimonials
          </h1>
          <p className="md:text-6xl text-2xl font-bold my-2 font-bold text-3xl  signika text-[#16B97A]">
            What Our Customer Say
          </p>
          <p className="text-5xl md:text-7xl font-bold alata">About Us</p>

          <Splide
            className="mx-auto my-8 "
            options={{
              perPage: 1,
              perMove: 1,

              autoplay: true,
              rewind: true,

              duration: 1000,
              interval: 3000,
              pauseOnHover: false,
              pauseOnFocus: false,

              arrows: false,
              pagination: false,
              loop: "true",

              drag: true,
            }}
          >
            {slides.map((slide, index) => (
              <SplideSlide key={index}>
                <div className="flex flex-col gap-2">
                  <p
                    className="text-gray-500 quicksand md:max-w-[100%]
                    text-start
                  max-w-[90%] "
                  >
                    {slide.message}
                  </p>
                  <div className="flex my-4 gap-2">
                    <img
                      src={slide.image}
                      className="w-16 h-16 rounded-full"
                      alt="customer"
                    />
                    <p className="font-bold text-xl">{slide.name}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
          <div className="flex gap-1 text-gray-500 quicksand">
            <IoStarSharp className="text-[#FFA300]" size={20} />
            <IoStarSharp className="text-[#FFA300]" size={20} />
            <IoStarSharp className="text-[#FFA300]" size={20} />
            <IoStarSharp className="text-[#FFA300]" size={20} />
            <IoStarSharp className="text-[#FFA300]" size={20} />
            Rated 5 stars
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Customers;

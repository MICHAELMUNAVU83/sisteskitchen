import React from "react";
import happycustomer from "./images/happycustomer.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./splide-green.min.css";
import customer1 from "./images/customer1.jpeg";
import customer2 from "./images/customer2.jpeg";
const Customers = () => {
  const slides = [
    {
      image: customer1,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
      name: "John Doe",
    },
    {
      image: customer2,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
      name: "John Doe",
    },
  ];
  return (
    <div className="mt-12 py-24    p-12">
      <div className="flex  justify-around  gap-48 ">
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
              className=" bg-gradient-to-t from-[#FFA300] flex justify-center my-auto mx-auto  bg- h-[82vh] overflow-hidden  w-[95%]"
              style={{
                borderBottomRightRadius: "50px",
                borderTopRightRadius: "70px",
                borderTopLeftRadius: "70px",
                borderBottomLeftRadius: "150px",
              }}
            >
              <img src={happycustomer} />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[400px] gap-2">
          <h1>Testimonials</h1>
          <p>What Our Customer Say</p>
          <p>About Us</p>

          <Splide
            className="mx-auto  "
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
                  <p>{slide.message}</p>
                  <div className="flex gap-2">
                    <img src={slide.image} className="w-10 h-10 rounded-full" />
                    <p>{slide.name}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Customers;

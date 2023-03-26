import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className={
        shadow
          ? " w-full h-20 shadow-xl z-[100] bg-white"
          : " w-full h-20 z-[100] bg-white"
      }
    >
      <div className="flex justify-between items-center w-full h-full py-4 px-2 2xl:px-16">
        <a className="ml-4" href="/">Sistes Kitchen</a>

        <div>
          <ul className="hidden md:flex text-gray-500">
            <a href="/" className="text-[#16B97A] transition-all duration-300">
              <li className="ml-10 uppercase text-sm hover:border-b  ">Home</li>
            </a>
            <a
              href="/"
              className="hover:text-[#16B97A] transition-all duration-300"
            >
              <li className="ml-10 uppercase text-sm hover:border-b  ">
                About us
              </li>
            </a>

            <a
              href="/"
              className="group hover:text-[#16B97A] transition-all duration-300"
            >
              <li className="ml-10 uppercase text-sm hover:border-b  flex  ">
                <p>Services</p>
                <IoIosArrowDown className="mt-1" size={15} />
              </li>
              <div className="hidden rounded-tl-2xl rounded-br-2xl bg-[#FFA300] font-bold z-10 group-hover:block text-white absolute pl-4  mt-2 py-2 w-[160px] ">
                Heyyy
              </div>
            </a>

            <a
              href="/"
              className="group hover:text-[#16B97A] transition-all duration-300"
            >
              <li className="ml-10 uppercase text-sm flex hover:border-b  ">
                <p>Pages</p>
                <IoIosArrowDown className="mt-1" size={15} />
              </li>
              <div className="hidden rounded-tl-2xl rounded-br-2xl flex flex-col gap-4 bg-[#FFA300] font-bold z-10 group-hover:block text-white absolute pl-4  mt-2 py-2 w-[160px]  ">
                <p>Matata</p>
                <p>Matata</p>
                <p>Matata</p>
              </div>
            </a>
            <a
              href="/"
              className="group hover:text-[#16B97A] transition-all duration-300"
            >
              <li className="ml-10 flex uppercase text-sm hover:border-b  ">
                <p>Blog</p>
                <IoIosArrowDown className="mt-1" size={15} />
              </li>
              <div className="hidden rounded-tl-2xl rounded-br-2xl bg-[#FFA300] font-bold z-10 group-hover:block text-white absolute pl-4  mt-2 py-2 w-[160px] ">
                Heyyy
              </div>
            </a>

            <a
              href="/"
              className="group hover:text-[#16B97A] transition-all duration-300"
            >
              <li className="ml-10 uppercase text-sm hover:border-b  ">
                Contact Us
              </li>
            </a>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hiddden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]  h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center w-full">
              <a href="/">
                <h1>Sistes Kitchen</h1>
              </a>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Welcome</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col  py-4">
              <ul onClick={handleNav}>
                <a href="/">
                  <li className="py-4 text-sm">Home</li>
                </a>

                <a to="/mySupplies">
                  <li className="py-4 text-sm">My Supplies</li>
                </a>

                <a to="/AddSuppliedInput">
                  <li className="py-4 text-sm">Add Input Supply</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { GiBranchArrow } from "react-icons/gi";

import { GiCampCookingPot } from "react-icons/gi";
import { TbLineDotted } from "react-icons/tb";
import {MdAttachMoney} from "react-icons/md"
const Programs = () => {
  return (
    <div id="programs" className="md:mt-24  mt-12 md:p-12 p-4">
      <div className="flex md:flex-row flex-col mx-auto  justify-around ">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#FFA300] md:text-5xl text-2xl delicious">
            What I offer
          </h1>
          <h1 className="md:text-5xl text-3xl font-bold text-[#16B97A] signika">
            The Best Package Deals
          </h1>
          <h1 className="md:text-5xl text-xl alata font-bold">
            For the best Price
          </h1>

          <p className="text-2xl font-semibold quicksand text-gray-600">
            These are exclusive of transport .
          </p>
          <p className="text-gray-600 quicksand flex">
            <TbLineDotted className="text-[#FFA300]" size={25} />
            <MdAttachMoney className="text-[#16B97A]" size={25} />
            <p>
              Cost depends on number of people and the type of food you want.
            </p>
          </p>
          <p className="text-gray-600 quicksand flex">
            <TbLineDotted className="text-[#FFA300]" size={25} />
            <GiCampCookingPot className="text-[#16B97A]" size={25} />
            <p>
              Cooking is on site (Or I can cook at my place and deliver to you).
            </p>
          </p>
        </div>

        <div className="flex mx-auto my-8 md:my-0  flex-col items-center gap-4  shadow-[#16B97A] shadow-lg py-4 px-8 rounded-3xl md:w-[350px] w-[93%]">
          <h1 className="text-3xl font-bold signika text-[#16B97A]">Weekly Rate</h1>
          <small className="quicksand">
            Two meals a day from Monday to Friday
          </small>
          <div className="bg-[#EDF7F8]/50 rounded-2xl flex flex-col gap-2 p-4 justify-center items-center">
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 9,200</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">2 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 13,600</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">3 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 16,300</h1>
            </div>
          </div>
          <h1 className="text-2xl font-semibold alata text-[#FFA300]">Labour Only</h1>
          <div className="bg-[#EDF7F8]/50 rounded-2xl flex flex-col gap-2 p-4 justify-center items-center">
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 3,500</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">2 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 4,800</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">3 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 5,800</h1>
            </div>
          </div>
        </div>

        <div className="flex shadow-[#FFA300] mx-auto my-8 md:my-0   flex-col items-center gap-4 shadow-lg px-8 py-4 rounded-3xl  md:w-[350px] w-[93%]">
          <h1 className="text-3xl font-bold signika text-[#16B97A]">Monthly Rate</h1>
          <small className="quicksand">
            Two meals a day from Monday to Friday
          </small>
          <div className="bg-[#EDF7F8]/50 rounded-2xl flex flex-col gap-2 p-4 justify-center items-center">
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 24,000</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">2 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 35,000</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">3 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 40,000</h1>
            </div>
          </div>
          <h1 className="text-2xl font-semibold alata  text-[#FFA300]">Labour Only</h1>
          <div className="bg-[#EDF7F8]/50 rounded-2xl flex flex-col gap-2 p-4  justify-center items-center">
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 14,000</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">2 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 17,000</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">3 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 23,000</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;

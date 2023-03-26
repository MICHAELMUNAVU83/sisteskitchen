import React from "react";
import { GiBranchArrow } from "react-icons/gi";

const Programs = () => {
  return (
    <div className="mt-16 p-12">
      <div className="flex justify-around ">
        <div>
          <h1>What I offer</h1>
          <h1>My best programs</h1>

          <p>These are exclusive of transport .</p>
          <p>Cost depends on PAX.</p>
          <p>
            Cooking is on site (Or I can cook at my place and deliver to you).
          </p>
        </div>

        <div className="flex  flex-col items-center gap-4 shadow-2xl p-4 rounded-lg">
          <h1>Weekly Rate</h1>
          <small>Two meals a day from Monday to Friday</small>
          <div className="bg-[#EDF7F8]/50 rounded-2xl flex flex-col gap-2 p-4 justify-center items-center">
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 10,000</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 10,000</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 10,000</h1>
            </div>
          </div>
          <h1>Labour Only</h1>
          <div className="bg-[#EDF7F8]/50 rounded-2xl flex flex-col gap-2 p-4 justify-center items-center">
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 10,000</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 10,000</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 10,000</h1>
            </div>
          </div>
        </div>

        <div className="flex  flex-col items-center gap-4 shadow-2xl p-4 rounded-lg">
          <h1>Monthly Rate</h1>
          <small>Two meals a day from Monday to Friday</small>
          <div className="bg-[#EDF7F8]/50 rounded-2xl flex flex-col gap-2 p-4 justify-center items-center">
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 10,000</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 10,000</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 10,000</h1>
            </div>
          </div>
          <h1>Labour Only</h1>
          <div className="bg-[#EDF7F8]/50 rounded-2xl flex flex-col gap-2 p-4 justify-center items-center">
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 10,000</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 10,000</h1>
            </div>
            <div className="flex  gap-4">
              <h1 className="text-[#16B97A] font-bold ">1 pax</h1>
              <GiBranchArrow
                className="text-[#16B97A] font-bold "
                size={25}
                style={{ transform: "rotate(315deg)" }}
              />
              <h1 className="text-[#FFA300] font-bold ">Ksh 10,000</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;

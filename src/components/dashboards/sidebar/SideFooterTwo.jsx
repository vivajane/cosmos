import React from "react";
import face from "../../../assets/face.jpeg";
import { SlOptionsVertical } from "react-icons/sl";

const SideFooterTwo = () => {
  return (
    <div className="px-2 font-manrope h-[calc(100vh-48px-16px)] sticky">
      <div className="flex gap-8  items-center">
        <div className="flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={face} alt="face" />
          <h2 className="text-[#1E1E1E] font-semibold text-lg">Ojiteli Kosi</h2>
        </div>
        <div className="text-[#00000040]">
          <SlOptionsVertical />
        </div>
      </div>
      <a
        className="text-[#00000080] font-normal text-sm"
        href="mailto:obuekwekosi@gmail.com"
      >
        obuekwekosi@gmail.com
      </a>
    </div>
  );
};

export default SideFooterTwo;

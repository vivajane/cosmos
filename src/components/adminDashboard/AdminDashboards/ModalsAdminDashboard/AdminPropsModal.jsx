import React from "react";
// import { text } from "stream/consumers";
import { BsBoxArrowUpRight } from "react-icons/bs";

const AdminCardsPropsModal = ({ title, balance, hasButton, status }) => {
  return (
    <div className=" gap-4  border">
      <div className="h-20 md:w-32 md:p-4 p-2 ">
        <p className="md:text-[10px] text-[7px] font-manrope font-normal">{title}</p>
        <p>{balance}</p>
        {hasButton && (
          <button className="bg-[#ECFDF3] my-1 border-[#1BA019] border text-[#1BA019] py-1 md:px-10 px-4 rounded-full">
            {status === "active" ? "Active" : "Verified"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminCardsPropsModal;

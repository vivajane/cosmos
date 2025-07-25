import React from "react";
import { CiSearch } from "react-icons/ci";
import mix from "../../../../../assets/mix.png";

const AdminUserOverview = ({ setShowUserType, showUserType }) => {
  return (
    <div className="relative">
      <div className="py-8 px-4 flex justify-between gap-3 lg:gap-6 items-center w-full ">
        <h1 className="w-full font-sanns text-xs sm:text-sm font-medium md:text-xl">
          Project Overview
        </h1>
        <div className="flex justify-between items-center">
          <div className="border-[1px] py-1.5 border-[#00000026] w-full relative rounded flex gap-4 items-center">
            <CiSearch className="text-[#00000080] mr-4" size={20} />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search..."
              className=" placeholder:text-[#00000080] placeholder:font-medium placeholder:text-base"
            />
          </div>
          <div
            onClick={() => setShowUserType(true)}
            className="absolute cursor-pointer hidden lg:block right-[305px]"
          >
            <img src={mix} alt="mix" />
          </div>
        </div>
      </div>

      <div
        onClick={() => setShowUserType(true)}
        className=" pb-2 px-6 cursor-pointer right-[305px] flex gap-2 items-center lg:hidden"
      >
        <img src={mix} alt="mix" />
        <p>Show Users</p>
      </div>
    </div>
  );
};

export default AdminUserOverview;

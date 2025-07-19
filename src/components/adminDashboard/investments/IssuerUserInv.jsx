import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import { useState, useEffect } from "react";

const IssueUsersInv = () => {
  return (
    <div className=" py-6">
      <div className=" border-b py-3 md:py-0 md:flex block text-[#00000080] gap-[0.5px]">
        <div className="border-x inline md:block bg-[#F8FFEB] px-2 border-b-2 border-b-[#6B911B] rounded-t-lg border-t text-sm md:text-base md:px-12 py-2">
          <NavLink to="investbrk" className=" ">
            Investment Breakdown
          </NavLink>
        </div>
        <div className="border-x inline md:block text-sm md:text-base rounded-t-lg border-t px-2 md:px-12 py-2">
          <NavLink to="finantrans">Financial Transactions</NavLink>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default IssueUsersInv;

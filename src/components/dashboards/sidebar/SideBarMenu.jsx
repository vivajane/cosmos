import React from "react";
import investment from "../../../assets/investment.png";
import overview from "../../../assets/overview.png";
import handraise from "../../../assets/wave.png";
import wallet from "../../../assets/wallet.png";
import bell from "../../../assets/bell.png";
import help from "../../../assets/help.png";
import setting from "../../../assets/setting.png";
import { NavLink } from "react-router-dom";

const SideBarMenu = () => {
  return (
    <div className="py-6 px-4">
      <h2 className="font-manrope text-[#00000040] text-base font-semibold">
        Menu
      </h2>
      <div className="py-6 space-y-6 px-2 font-sanns">
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={overview} alt="overview" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-l-4 border-[#6B911B]" : ""
              }
              to="/sidebar/overview"
            >
              Overview
            </NavLink>
          </div>
        </div>
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={investment} alt="invest" />
          <div className="font-sanns text-[#1E1E1E] text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-l-4 border-[#6B911B]" : ""
              }
              to="/sidebar/investments"
            >
              Investments
            </NavLink>
          </div>
        </div>
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={wallet} alt="wallet" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-l-4 border-[#6B911B]" : ""
              }
              to="/sidebar/wallet"
            >
              Wallet
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;

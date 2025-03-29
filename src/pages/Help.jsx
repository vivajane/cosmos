import React from "react";
import HelpMenu from "../components/helpSupport/HelpMenu";
import HelpHeader from "../components/helpSupport/HelpHeader";
import { Outlet } from "react-router-dom";

const Help = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="px-4">
        <HelpHeader />
      </div>
      <div className="grid grid-cols-[260px_1fr] ">
        <div className="sticky top-0">
          <HelpMenu />
        </div>
        <div className="border rounded-md m-4 mt-[70px] border-[#E3E3E3]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Help;

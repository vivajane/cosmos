import React from "react";
import SettingsHeader from "../components/adminDashboard/settings/SettingsHeader";
import SettingsMenu from "../components/adminDashboard/settings/SettingsMenu";
import { Outlet } from "react-router-dom";

const AdminSettings = () => {
  return (
    <div className="">
      <div className="px-4 ">
        <SettingsHeader />
      </div>
      <div className="grid grid-cols-[260px_1fr] ">
        <div className="sticky top-0">
          <SettingsMenu />
        </div>
        <div className="border rounded-md m-4 mt-[70px] border-[#E3E3E3]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;

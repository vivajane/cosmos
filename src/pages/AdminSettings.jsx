import React from "react";
import SettingsHeader from "../components/adminDashboard/settings/SettingsHeader";
import SettingsMenu from "../components/adminDashboard/settings/SettingsMenu";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const AdminSettings = () => {
  const [show, setShow] = useState(false);

  const onShow = () => setShow((prev) => !prev);

  return (
    <div className="">
      <div className="px-4 py-6 flex items-center justify-between md:block ">
        <SettingsHeader />
        <IoMdMenu onClick={onShow} size={20} />
      </div>
      <div className="md:grid md:grid-cols-[260px_1fr] ">
        <div className="md:sticky top-0 hidden md:block">
          <SettingsMenu />
        </div>
        {show && (
          <div className="md:hidden">
            <SettingsMenu />
          </div>
        )}
        <div className="border rounded-md md:m-4 md:mt-[70px] border-[#E3E3E3]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;

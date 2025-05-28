import React from "react";
import { NavLink } from "react-router-dom";

const SettingsMenu = () => {
  return (
    <div className="py-6 px-4">
      <h2 className="font-manrope text-xl font-semibold">Account Settings</h2>
      <div className="py-6 px-2 space-y-8  font-sanns">
        <div className="font-sanns relative text-base font-medium">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-[#0000001A] pl-[3px] pr-16 py-2 rounded-md" : ""
            }
            to="profile-manage"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute left-[-10px] top-0 h-8 w-1 bg-[#6B911B]"></div>
                )}
                <span>Manage Profile</span>
              </>
            )}
          </NavLink>
        </div>


        <div className="flex items-center relative  gap-2">
          {/* <div className={`absolute left-[5px] h-8 $  `}></div> */}

          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#0000001A] pl-1 pr-2 py-2 rounded-md" : ""
              }
              to="notification-preference"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-10px] top-0 h-8 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>Notification preference</span>
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;

import help from "../../../assets/help.png";
import setting from "../../../assets/setting.png";
import { NavLink } from "react-router-dom";

const SideBarFooter = () => {
  return (
    <div className="px-4  mt-[100px] overflow-y-auto sticky">
      <div className="py-6 space-y-3">
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $`}></div>
          <img src={setting} alt="invest" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-l-4 border-[#6B911B]" : ""
              }
              to="/sidebar/investments"
            >
              Settings
            </NavLink>
          </div>
        </div>
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={help} alt="help" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-l-4 border-[#6B911B]" : ""
              }
              to="/sidebar/investments"
            >
              Help & Support
            </NavLink>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SideBarFooter;

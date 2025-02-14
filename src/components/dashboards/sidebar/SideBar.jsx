import SideBarFooter from "./SideBarFooter";
import SideBarHeader from "./SidebarHeader";
import SideBarMenu from "./SideBarMenu";
import { Outlet } from "react-router-dom";
import SideFooterTwo from "./SideFooterTwo";

const SideBar = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-[220px_1fr]">
        <div className="border-r-2">
          <div className=" sticky h-[calc(100vh-32px-48px)] overflow-y-scroll ">
            <div className=" ">
              <SideBarHeader/>
              <SideBarMenu />
            </div>
            <div className="">
              <SideBarFooter />
            </div>
          </div>
          <div>
            <SideFooterTwo />
          </div>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

import SideBarFooter from "./SideBarFooter";
import SideBarHeader from "./SideBarHeader";
import SideBarMenu from "./SideBarMenu";
import { Outlet } from "react-router-dom";
import SideFooterTwo from "./SideFooterTwo";

const SideBar = () => {
  return (
    <div className="relative h-screen">
      <div className="grid grid-cols-[220px_1fr]">
        <div className="border-r-2">
          <div className=" sticky top-0 h-screen overflow-y-auto ">
            <div className=" ">
              <SideBarHeader/>
              <SideBarMenu />
            </div>
            <div className="">
              <SideBarFooter />
            </div>
            <div>
            <SideFooterTwo />
          </div>
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

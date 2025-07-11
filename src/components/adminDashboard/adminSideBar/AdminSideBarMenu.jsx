import investment from "../../../assets/investment.png";
import overview from "../../../assets/overview.png";
import wallet from "../../../assets/wallet.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const AdminSideBarMenu = () => {
  const [showIssue, setShowIssue] = useState(false);

  const showIssuePage = () => {
    setShowIssue((showIssue) => !showIssue);
  };

  const HideIssuePage = () => {
    setShowIssue(false);
  };

  return (
    <div  className="py-6 px-4">
      <h2 className="font-manrope text-[#00000040] text-base font-semibold">
        Menu
      </h2>
      <div className="py-6 space-y-10 px-2 font-sanns">
        <div>
          <div
            onClick={showIssuePage}
            className="flex items-center relative  gap-2"
          >
            <img src={overview} alt="overview" />
            <div className="font-sanns text-base font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#0000001A] pl-[3px] pr-3 py-2 rounded-md"
                    : ""
                }
                to="adminDashboard"
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div className="absolute left-[-6px] top-0 h-8 w-1 bg-[#6B911B]"></div>
                    )}
                    <span>DashBoard</span>
                  </>
                )}
              </NavLink>
            </div>
          </div>
          {showIssue && (
           <div  className="my-8 mx-2">
             <NavLink 
              className={({ isActive }) =>
                isActive
                  ? "bg-[#0000001A] pl-1 pr-2  py-2 my-6 rounded-md"
                  : "my-6"
              }
              to="/adminSideBar/adminDashboard/issuepage"
            >
              Issue Management
            </NavLink>
           </div>
          )}
        </div>
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={investment} alt="invest" />
          <div className="font-sanns text-[#1E1E1E] text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#0000001A] pl-1 pr-3 py-2 rounded-md" : ""
              }
              to="userManagement"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] top-0 h-8 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>userManagement</span>
                </>
              )}
            </NavLink>
          </div>
        </div>
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={wallet} alt="wallet" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#0000001A] pl-1 pr-3 py-2 rounded-md" : ""
              }
              to="projects"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] top-0 h-8 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>Projects</span>
                </>
              )}
            </NavLink>
          </div>
        </div>

        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={wallet} alt="wallet" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#0000001A] pl-1 pr-3 py-2 rounded-md" : ""
              }
              to="investments"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] top-0 h-8 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>Investments</span>
                </>
              )}
            </NavLink>
          </div>
        </div>
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={wallet} alt="wallet" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#0000001A] pl-1 pr-3 py-2 rounded-md" : ""
              }
              to="security"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] top-0 h-8 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>Security</span>
                </>
              )}
            </NavLink>
          </div>
        </div>
        <div className="flex items-center relative  gap-2">
          <div className={`absolute left-[5px] h-8 $  `}></div>
          <img src={wallet} alt="wallet" />
          <div className="font-sanns text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#0000001A] pl-1 pr-3 py-2 rounded-md" : ""
              }
              to="audit"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-[-6px] top-0 h-8 w-1 bg-[#6B911B]"></div>
                  )}
                  <span>Audit logs</span>
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBarMenu;

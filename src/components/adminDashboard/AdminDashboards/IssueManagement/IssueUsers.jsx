import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const IssueUsers = () => {
  return (
    <div className=" py-6">
      <div className=" border-b inline-flex text-[#00000080] gap-[0.5px]">
        <div className="border-x bg-[#F8FFEB] border-b-2 border-b-[#6B911B] rounded-t-lg border-t px-12 py-2">
          <NavLink to="activeusers" className="border-b-[#6B911B]  ">
            Open Issues
          </NavLink>
        </div>
        <div className="border-x  rounded-t-lg border-t px-12 py-2">
          <NavLink to="pendingusers">Pending Issues</NavLink>
        </div>
        <div className="border-x  rounded-t-lg border-t px-12 py-2">
          <NavLink to="suspendedusers">Resolved Issues</NavLink>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default IssueUsers;

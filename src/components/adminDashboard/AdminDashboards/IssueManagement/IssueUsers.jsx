import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const IssueUsers = () => {
  const [showUsers, setShowUsers] = useState(null);
  useEffect(() => {
    console.log("TYPE OF setShowUsers:", typeof setShowUsers);
  },[showUsers]);
  return (
    <div className=" py-6">
      <div className=" border-b inline-flex text-[#00000080] gap-[0.5px]">
        <div className="border-x bg-[#F8FFEB] border-b-2 px-2 border-b-[#6B911B] rounded-t-lg border-t md:px-12 py-2">
          <NavLink to="activeusers" className=" ">
            Open Issues
          </NavLink>
        </div>
        <div className="border-x  rounded-t-lg border-t px-2 md:px-12 py-2">
          <NavLink to="pendingusers">Pending Issues</NavLink>
        </div>
        <div className="border-x  rounded-t-lg border-t px-2 md:px-12 py-2">
          <NavLink to="suspendedusers">Resolved Issues</NavLink>
        </div>
      </div>

      <div>
        <Outlet context={{ showUsers, setShowUsers }} />
      </div>
    </div>
  );
};

export default IssueUsers;

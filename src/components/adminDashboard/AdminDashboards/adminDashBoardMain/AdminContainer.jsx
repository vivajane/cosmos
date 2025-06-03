import AdminInFlow from "./adminDashBoardContainer/AdminInFlow";
import AdminGraph from "./adminDashBoardContainer/AdminGraph";
import AdminTableOverview from "./adminDashBoardContainer/AdminTable";
import AdminUserOverview from "./adminDashBoardContainer/AdminUserOverview";
import Pagination from "../../../investments/newprojects/Pagination";
import { useState } from "react";

const AdminContainer = ({
  setShowUserType,
  showUserType,
  setShowActiveUsers,
  showStatus,
  setShowStatus
}) => {
  

 
  return (
    <div>
      <div className="shadow-lg">
        <AdminInFlow />
        <AdminGraph />
      </div>
      <AdminUserOverview
        setShowUserType={setShowUserType}
        showUserType={showUserType}
        showStatus={showStatus}
        setShowStatus={setShowStatus}
  
      />
      <AdminTableOverview showStatus={showStatus} setShowStatus={setShowStatus} setShowActiveUsers={setShowActiveUsers}  />
      <Pagination />
    </div>
  );
};

export default AdminContainer;

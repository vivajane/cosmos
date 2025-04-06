import React from "react";
import AdminDashboardHeader from "../components/adminDashboard/AdminDashboards/AdminDashboardHeader";
import AdminDashBoardMain from "../components/adminDashboard/AdminDashboards/AdminDashBoardMain";
import { Outlet, useLocation } from "react-router-dom";
import DashBoardsHeader from "../components/dashboards/DashBoardsHeader";
import bell from "../assets/bell.png"
import { useState } from "react";
import UserTypeModal from "../components/adminDashboard/AdminDashboards/ModalsAdminDashboard/UserType";

const AdminDashBoard = () => {
  const [showUserType, setShowUserType] = useState(null);

  const closeUserType = () => {
    setShowUserType(null);
  }
  
  const location = useLocation();
  const isDashboardPage =
    location.pathname === "/adminSidebar" || location.pathname === "/adminSidebar/adminDashboard";

  return (
    <div>
      <div>
      {isDashboardPage && (
        <div className="px-4 py-4">
          <DashBoardsHeader title="Admin Dashboard" text="Manage security, compliance, reports and transactions" image={bell} />
          <AdminDashBoardMain />
        </div>
        
      )}
      </div>
      {showUserType && <UserTypeModal showUserType={showUserType} setShowUserType={setShowUserType}/>}
      <Outlet /> 
    </div>
  );
};

export default AdminDashBoard;

import React from "react";
import AdminDashboardHeader from "../components/adminDashboard/AdminDashboards/AdminDashboardHeader";
import AdminDashBoardMain from "../components/adminDashboard/AdminDashboards/AdminDashBoardMain";
import { Outlet, useLocation } from "react-router-dom";
import DashBoardsHeader from "../components/dashboards/DashBoardsHeader";
import bell from "../assets/bell.png"

const AdminDashBoard = () => {
  const location = useLocation();
  const isDashboardPage =
    location.pathname === "/adminSidebar" || location.pathname === "/adminSidebar/adminDashboard";

  return (
    <div>
      {isDashboardPage && (
        <div className="px-4 py-4">
          <DashBoardsHeader title="Admin Dashboard" text="Manage security, compliance, reports and transactions" image={bell} />
          <AdminDashBoardMain />
        </div>
      )}
      <Outlet /> {/* This ensures that issuepage renders when navigated to */}
    </div>
  );
};

export default AdminDashBoard;

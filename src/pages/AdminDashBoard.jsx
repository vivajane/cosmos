import React from "react";
import AdminDashboardHeader from "../components/adminDashboard/AdminDashboards/AdminDashboardHeader";
import AdminDashBoardMain from "../components/adminDashboard/AdminDashboards/AdminDashBoardMain";
import { Outlet, useLocation } from "react-router-dom";
import DashBoardsHeader from "../components/dashboards/DashBoardsHeader";
import bell from "../assets/bell.png"
import { useState } from "react";
import UserTypeModal from "../components/adminDashboard/AdminDashboards/ModalsAdminDashboard/UserType";
import ActiveUsers from "../components/adminDashboard/AdminDashboards/ModalsAdminDashboard/ActiveUsers";
import Suspend from "../components/adminDashboard/AdminDashboards/ModalsAdminDashboard/Suspend";
import PleaseSuspend from "../components/adminDashboard/AdminDashboards/ModalsAdminDashboard/PleaseSuspend";
import SucessSuspendedModal from "../components/adminDashboard/AdminDashboards/ModalsAdminDashboard/SuccessSuspended";
import DeleteAcct from "../components/adminDashboard/AdminDashboards/ModalsAdminDashboard/DeleteAcctModal";
import ReasonDel from "../components/adminDashboard/AdminDashboards/ModalsAdminDashboard/ReasonDel";
import DelSucessModal from "../components/adminDashboard/AdminDashboards/ModalsAdminDashboard/DelSuccess";
import { useEffect } from "react";

const AdminDashBoard = () => {
  const [showUserType, setShowUserType] = useState(null);
  const[showActiveUsers, setShowActiveUsers] = useState(null);
  const [showSuspendUsers, setShowSuspendUsers] = useState(null);
  const [showPleaseSuspendUsers, setShowPleaseSuspendUsers] = useState(null);
  const [successSuspended, setSuccessSuspended] = useState(null);
  const [delAccount, setDelAccount] = useState(null);
  const [reasonDelAccount, setReasonDelAccount] = useState(null);
  const[delSuccess, setDelSuccess] = useState(null);
  



  const closeUserType = () => {
    setShowUserType(null);
  }
  const closeActiveUsers = () => {
    setShowActiveUsers(null);
  }
  const closeSuspendUsers = () => {
    setShowSuspendUsers(null);

  }
  const pleaseCloseSuspendUsers = () => {
    setShowPleaseSuspendUsers(null);

  }
  const closeSuccessSuspended = () => {
    setSuccessSuspended(null);

  }
  const closeDelAccount = () => {
    setDelAccount(null);

  }
  const closeReasonDelAccount = () => {
    setReasonDelAccount(null);

  }
  const closeDelSuccess = () => {
    setDelSuccess(null);

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
          <AdminDashBoardMain showUserType={showUserType} setShowUserType={setShowUserType} />
        </div>
        
      )}
      </div>
      {showUserType && <UserTypeModal showUserType={showUserType} showActiveUsers={showActiveUsers} setShowActiveUsers={setShowActiveUsers} setShowUserType={setShowUserType}/>}
      {showActiveUsers && <ActiveUsers showActiveUsers={showActiveUsers} setShowActiveUsers={closeActiveUsers} setShowSuspendUsers={setShowSuspendUsers} setDelAccount={setDelAccount}/>}
      {showSuspendUsers && <Suspend setShowSuspendUsers={closeSuspendUsers} setShowPleaseSuspendUsers={setShowPleaseSuspendUsers}/>}
      {showPleaseSuspendUsers && <PleaseSuspend setShowPleaseSuspendUsers={pleaseCloseSuspendUsers} setSuccessSuspended ={setSuccessSuspended} setShowSuspendUsers ={setShowSuspendUsers} />}
      {successSuspended && <SucessSuspendedModal setSuccessSuspended={closeSuccessSuspended} setShowSuspendUsers={setShowSuspendUsers} />}
      {delAccount && <DeleteAcct  setDelAccount={closeDelAccount} setReasonDelAccount={setReasonDelAccount}/>}
      {reasonDelAccount && <ReasonDel setDelSuccess={setDelSuccess} setReasonDelAccount={closeReasonDelAccount}/>}
      {delSuccess && <DelSucessModal setDelSuccess={closeDelSuccess}/>}
      <Outlet /> 
    </div>
  );
};

export default AdminDashBoard;

import React from 'react'
import AdminDashBoardRight from './adminDashBoardMain/AdminDashBoardRight'
import AdminContainer from './adminDashBoardMain/AdminContainer'
import AdminUserOverview from './adminDashBoardMain/adminDashBoardContainer/AdminUserOverview'

const AdminDashBoardMain = ({showUserType, setShowActiveUsers, setShowUserType, showStatus, setShowStatus}) => {
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-4">
      <AdminContainer showStatus={showStatus} setShowStatus={setShowStatus} setShowActiveUsers={setShowActiveUsers} setShowUserType={setShowUserType} showUserType={showUserType}/>
      <AdminDashBoardRight/>
      {/* <AdminUserOverview/> */}
    </div>
  )
}

export default AdminDashBoardMain

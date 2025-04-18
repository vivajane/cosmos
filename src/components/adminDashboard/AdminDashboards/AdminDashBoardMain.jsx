import React from 'react'
import AdminDashBoardRight from './adminDashBoardMain/AdminDashBoardRight'
import AdminContainer from './adminDashBoardMain/AdminContainer'
import AdminUserOverview from './adminDashBoardMain/adminDashBoardContainer/AdminUserOverview'

const AdminDashBoardMain = ({showUserType, setShowUserType}) => {
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-4">
      <AdminContainer/>
      <AdminDashBoardRight showUserType={showUserType}  setShowUserType={setShowUserType}/>
      {/* <AdminUserOverview/> */}
    </div>
  )
}

export default AdminDashBoardMain

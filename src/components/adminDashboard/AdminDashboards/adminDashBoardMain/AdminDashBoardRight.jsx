import React from 'react'
import AdminRight from './AdminDashRight/AdminRight'

const AdminDashBoardRight = ({showUserType, setShowUserType}) => {
  return (
    <div>
        <AdminRight showUserType={showUserType} setShowUserType={setShowUserType}/>
      
    </div>
  )
}

export default AdminDashBoardRight

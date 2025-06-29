import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminSideBarHeader from '../components/adminDashboard/adminSideBar/AdminSideBarHeader'
import AdminSideBarMenu from '../components/adminDashboard/adminSideBar/AdminSideBarMenu'
import AdminSideBarFooterTwo from '../components/adminDashboard/adminSideBar/AdminSideBarFooterTwo'
import AdminSideBarFooter from '../components/adminDashboard/adminSideBar/AdminSideBarFooter'

const AdminSideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="relative h-screen">
      {/* Mobile Header */}
      <div className="md:hidden p-4 flex justify-between items-center bg-white shadow">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button onClick={() => setShowSidebar(true)}>☰</button>
      </div>

      {/* Layout Grid */}
      <div className="grid md:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <div className="hidden md:block border-r-2 h-screen overflow-y-auto">
          <AdminSideBarHeader />
          <AdminSideBarMenu />
          <AdminSideBarFooter />
          <AdminSideBarFooterTwo />
        </div>

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
            onClick={() => setShowSidebar(false)}
          >
            <div
              className="bg-white w-[220px] h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setShowSidebar(false)} className="mb-4">✕ Close</button>
              <AdminSideBarHeader />
              <AdminSideBarMenu />
              <AdminSideBarFooter />
              <AdminSideBarFooterTwo />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminSideBar

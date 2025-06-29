'use client'
import React, { useState } from 'react'
import AdminDashBoardRight from './adminDashBoardMain/AdminDashBoardRight'
import AdminContainer from './adminDashBoardMain/AdminContainer'

const AdminDashBoardMain = ({
  showUserType,
  setShowActiveUsers,
  setShowUserType,
  showStatus,
  setShowStatus
}) => {
  const [showRightPanel, setShowRightPanel] = useState(false)

  return (
    <div className="relative">
      {/* Toggle button only visible on mobile */}
      <div className="lg:hidden flex justify-end mb-2">
        <button
          onClick={() => setShowRightPanel(true)}
          className="bg-[#00B074] text-white px-4 py-2 rounded"
        >
          View Activity
        </button>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4">
        <AdminContainer
          showStatus={showStatus}
          setShowStatus={setShowStatus}
          setShowActiveUsers={setShowActiveUsers}
          setShowUserType={setShowUserType}
          showUserType={showUserType}
        />

        {/* Right panel visible only on desktop */}
        <div className="hidden lg:block">
          <AdminDashBoardRight />
        </div>
      </div>

      {/* Mobile drawer for right panel */}
      {showRightPanel && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
          onClick={() => setShowRightPanel(false)}
        >
          <div
            className="bg-white w-80 h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-right w-full mb-4"
              onClick={() => setShowRightPanel(false)}
            >
              ✕ Close
            </button>
            <AdminDashBoardRight />
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashBoardMain

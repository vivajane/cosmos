import React from 'react'
import DashBoardsHeader from '../../../dashboards/DashBoardsHeader'
import bell from "../../../../assets/bell.png"

const HeaderIssue = () => {
  return (
    <div>
      <DashBoardsHeader title="Admin Dashboard" text="View, manage and oversee user accounts" image={bell} />
    </div>
  )
}

export default HeaderIssue

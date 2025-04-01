import React from 'react'
import IssuePropsOverview from '../AdminDashboards/IssueManagement/IssuePropsOverview'
import DashBoardsHeader from '../../dashboards/DashBoardsHeader'
import bell from "../../../assets/bell.png"

const InvestmentHeader = () => {
  return (
    <div>
        <DashBoardsHeader title="Investment and Fund Tracking Management Page" text="Track investments, monitor funds and manage transactions seamlessly" image={bell} />
        {/* <IssuePropsOverview name="Projects"/> */}
      
    </div>
  )
}

export default InvestmentHeader

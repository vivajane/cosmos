import React from 'react'
import IssuePropsOverview from '../AdminDashboards/IssueManagement/IssuePropsOverview'
import DashBoardsHeader from '../../dashboards/DashBoardsHeader'
import bell from "../../../assets/bell.png"

const ProjectHeader = () => {
  return (
    <div>
        <DashBoardsHeader title="Project Management" text="Track, manage and oversee all investment projects with ease" image={bell} />
        {/* <IssuePropsOverview name="Projects"/> */}
      
    </div>
  )
}

export default ProjectHeader

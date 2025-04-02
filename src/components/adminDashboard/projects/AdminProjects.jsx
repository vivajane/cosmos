import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectsMetric from "./ProjectsMetric";
// import ProjectOverview from "../../dashboards/metrics/ProjectOverview";
import IssuePropsOverview from "../AdminDashboards/IssueManagement/IssuePropsOverview";
import ProjectsTable from "./ProjectsTable";
import AdminPagination from "../AdminPagination";




const AdminProjects = () => {
  return (
    <div className="px-4">
      <ProjectHeader />
      <ProjectsMetric/>
      <IssuePropsOverview name="All Projects"/>
      <ProjectsTable/>
      <AdminPagination/>
      

      
    </div>
  );
};

export default AdminProjects;

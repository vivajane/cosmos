import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectsMetric from "./ProjectsMetric";
// import ProjectOverview from "../../dashboards/metrics/ProjectOverview";
// import IssuePropsOverview from "../AdminDashboards/IssueManagement/IssuePropsOverview";
import ProjectsTable from "./ProjectsTable";
// import AdminPagination from "../AdminPagination";
import AdminIssuePropsOverview from "../investments/AdminIssueProps";
import Pagination from "../../investments/newprojects/Pagination";





const AdminProjects = () => {
  return (
    <div className="px-4">
      <ProjectHeader />
      <ProjectsMetric/>
      <AdminIssuePropsOverview name="All Projects"/>
      <ProjectsTable/>
      <Pagination/>
      

      
    </div>
  );
};

export default AdminProjects;

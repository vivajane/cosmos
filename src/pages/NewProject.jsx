import React from "react";
import PropOverview from "../components/investments/PropOverview";
import GridNewProjects from "../components/investments/newprojects/GridNewProjects";
import InvestmentHeader from "../components/investments/InvestmentHeader";
import DashBoardsHeader from "../components/dashboards/DashBoardsHeader";
import bell from "../assets/bell.png";
import Pagination from "../components/investments/newprojects/Pagination";
import { useState , useEffect} from "react";
import Modalprojectdetails from "../components/investments/newprojects/Modalprojectdetails";

const NewProject = () => {
  const [selected, setSelected] = useState(true);
  // const checkSelected() => {
  //     setSelected(selected)
  // } 
  useEffect(() => {
    console.log("Selected state updated:", selected);
  }, [selected]);

  const closeModal = () => {
    setSelected(null)
  }
  return (
    <div className="px-4">
      <DashBoardsHeader
        title="Investment"
        text="Manage and track all your investments easily"
        image={bell}
      />
      <PropOverview name="Available Projects" />
      <GridNewProjects setSelected={setSelected} />
      <Pagination />
      {selected && <Modalprojectdetails selected={selected} setSelected={closeModal} />}
    </div>
  );
};

export default NewProject;

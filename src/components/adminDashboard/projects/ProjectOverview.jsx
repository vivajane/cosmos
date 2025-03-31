import React from "react";
import vector from "../../assets/vec.png";
import { NavLink } from "react-router-dom";
import PropOverview from "./PropOverview";
import OverFlowProps from "../../dashboards/OverFlowProps";

const invests = [
  {
    id: 1,
    title: "TOTAL PROJECTS",
    balance: 100,
  },
  {
    id: 2,
    title: "ACTIVE PROJECTS",
    balance: 5,
  },
//   {
//     id: 3,
//     title: "PENDING PROJECTS",
//     balance: 15,
//   },
  {
    id: 4,
    title: "COMPLETED PROJECTS",
    balance: 12,
  },
];
const ProjectOverview = () => {
  return (
    <div className="my-6">
      <div className="flex justify-between items-center">
        <h1>Investment Overview</h1>
        <div className="flex gap-2 bg-bgGray items-center py-1 px-4 rounded text-white">
          <img src={vector} alt="vector" />
          <span>
            <NavLink to="projects">Invest in New Projects</NavLink>
          </span>
        </div>
      </div>

      <ul className=" flex justify-start gap-36 border-b-2 border-dotted py-6 ">
        {invests.map((invest) => (
          <li className="border-l-2  pl-2 first:border-l-0" key={invest.id}>
            <OverFlowProps
              key={invest.id}
              title={invest.title}
              balance={invest.balance}
            />
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default ProjectOverview;

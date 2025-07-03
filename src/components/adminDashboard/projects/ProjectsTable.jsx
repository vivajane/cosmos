import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const overviewdata = [
  {
    name: "Pepper Season",
    fundingoals: 5000000,
    minInv: 100000,
    roi: 20,
    amount: 100000,
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
    status: "completed",
  },
  {
    name: "April Maze Cycle",
    fundingoals: 5000000,
    minInv: 100000,
    roi: 20,
    amount: 100000,
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
    status: "active",
  },
  {
    name: "Rice Platform",
    fundingoals: 5000000,
    minInv: 100000,
    roi: 20,
    amount: 100000,
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
    status: "completed",
  },
  {
    name: "Cocoa Season",
    fundingoals: 5000000,
    minInv: 100000,
    roi: 20,
    amount: 100000,
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
    status: "pending",
  },
  {
    name: "Cassava Cycle",
    fundingoals: 5000000,
    minInv: 100000,
    roi: 20,
    amount: 100000,
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
    status: "completed",
  },
  {
    name: "Tomato Project",
    fundingoals: 5000000,
    minInv: 100000,
    roi: 20,
    amount: 100000,
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
    status: "pending",
  },
  {
    name: "Bean Cycle",
    fundingoals: 5000000,
    minInv: 100000,
    roi: 20,
    amount: 100000,
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
    status: "completed",
  },
  {
    name: "Plantain Season",
    fundingoals: 5000000,
    minInv: 100000,
    roi: 20,
    amount: 100000,
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
    status: "pending",
  },
];

const ProjectsTable = () => {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <table className="min-w-[900px] table-auto w-full border-collapse">
        <thead className=" text-gray-600 text-sm font-medium border-b">
          <tr>
            <th className="py-2 px-4 text-left">Project Name</th>
            <th className="py-2 px-4 text-left">Funding Goals</th>
            <th className="py-2 px-4 text-left">Min. Investment</th>
            <th className="py-2 px-4 text-left">Amount Raised</th>
            <th className="py-2 px-4 text-left">ROI</th>
            <th className="py-2 px-4 text-left">Start Date</th>
            <th className="py-2 px-4 text-left">End Date</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {overviewdata.map((data, index) => (
            <tr key={index} className="border-b text-sm text-gray-800">
              <td className="py-4 px-3">{data.name}</td>
              <td className="py-2 px-3">₦{data.fundingoals.toLocaleString()}</td>
              <td className="py-2 px-3">₦{data.minInv.toLocaleString()}</td>
              <td className="py-2 px-3">₦{data.amount.toLocaleString()}</td>
              <td className="py-2 px-3">{data.roi}%</td>
              <td className="py-2 px-3">{data.startdate}</td>
              <td className="py-2 px-4">{data.enddate}</td>
              <td className="py-2 px-2">
                <span
                  className={`px-2 py-1 rounded-md ${
                    data.status === "active"
                      ? "text-white bg-blue-600"
                      : data.status === "completed"
                      ? "text-[#027A48] bg-[#ECFDF3]"
                      : data.status === "pending"
                      ? "text-[#713F12] bg-[#FEF9C3]"
                      : "text-gray-500 bg-gray-200"
                  }`}
                >
                  {data.status}
                </span>
              </td>
              <td className="py-2 px-4 text-center">
                <BsThreeDotsVertical />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default ProjectsTable;

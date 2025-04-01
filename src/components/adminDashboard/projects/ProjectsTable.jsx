import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const overviewdata = [
    {
      name: "Pepper Season",
      fundingoals: 5000000,
      minInv: 100000,
      roi: 20,
      amount: 100000,
      // color: "text-[#02487A] bg-[#E2F1FC]",
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
    // color: "text-[#02487A] bg-[#E2F1FC]",
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
    // color: "text-[#02487A] bg-[#E2F1FC]",
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
    // color: "text-[#02487A] bg-[#E2F1FC]",
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
    
    // color: "text-[#02487A] bg-[#E2F1FC]",
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
    status: "completed",
  },
  {
    name: "Tomato Projec",
    fundingoals: 5000000,
    minInv: 100000,
    roi: 20,
    amount: 100000,
    // color: "text-[#02487A] bg-[#E2F1FC]",
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
    
    // color: "text-[#02487A] bg-[#E2F1FC]",
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
    // color: "text-[#02487A] bg-[#E2F1FC]",
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
    
    status: "pending",
  },
];

const ProjectsTable = () => {
  return (
    <div className="pb-4">
     
      <table>
        <thead className="bg-[#0000000D] w-full text-sm shadow-md">
          <tr className="font-sans text-[#4F5144] font-medium text-sm">
            <th className=" py-2 w-1/6 text-left">Project Name</th>
            <th className=" py-2 w-1/6 text-left">Funding goals</th>
            <th className=" py-2 w-1/6 text-left">Min.Investment</th>
            <th className=" py-2 w-1/6 text-left">Amount Raised</th>
            <th className=" py-2 w-1/6 text-left">ROI</th>
            <th className=" py-2 w-1/4 text-left">Start Date</th>
            <th className=" py-2 w-1/6 text-left">End Date</th>
            <th className=" py-2 w-1/6 text-left">Status</th>
            
          </tr>
        </thead>

        <tbody>
          {overviewdata.map((data, index) => (
            <tr
              className=" text-[#4F5144] space-y-8 text-sm font-normal border-b border-gray-300"
              key={index}
            >
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.name}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.fundingoals}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.minInv}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
              ₦{data.amount}
              </td>

             
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.roi}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.startdate}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.enddate}
              </td>
              <td>
                <span
                  className={`${
                    data.status === "active"
                      ? "text-[#E2F1FC] bg-[#02487A]"
                      : data.status === "completed"
                      ? "text-[#027A48] bg-[#ECFDF3]"
                      : data.status === "pending"
                      ? "text-[#713F12] bg-[#FEF9C3]"
                      : "text-gray-500 bg-gray-200"
                  } px-2 py-1 rounded-md`}
                >
                  {data.status}
                </span>
              </td>
              <BsThreeDotsVertical className="" />
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;

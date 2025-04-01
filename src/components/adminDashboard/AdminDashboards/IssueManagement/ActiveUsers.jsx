import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import IssuePropsOverview from "./IssuePropsOverview";
import Pagination from "../../../investments/newprojects/Pagination";

const overviewdata = [
  {
    id: 1,
    regno: "78901",
    username: "Piper Mills",
    status: "Active",
    type: "Cassave Issues",
    date: "Jan 05 2025",
  },
  {
    id: 2,
    regno: "85921",
    username: "Healther Green",
    status: "Active",
    type: "Rice Issues",
    date: "Feb 07 2024",
  },
  {
    id: 3,
    regno: "92301",
    username: "Adam Eden",
    status: "Suspended",
    type: "Cocoa Issues",
    date: "Sep 01 2025",
  },
  {
    id: 4,
    regno: "28901",
    username: "Ryan Mills",
    status: "Active",
    type: "Maize Issues",
    date: "Sep 05 2025",
  },
  {
    id: 5,
    regno: "10901",
    username: "Yolanda Mills",
    status: "Suspended",
    type: "Bean Issues",
    date: "Dec 05 2025",
  },
  {
    id: 6,
    regno: "98901",
    username: "Healther Green",
    status: "Active",
    type: "Rice Issues",
   
    date: "Aug 05 2025",
  },
  {
    id: 7,
    regno: "98903",
    username: "Edward Mills",
    status: "Pending",
    type: "Maize Issues",
   
    date: "Jan 05 2025",
  },
  {
    id: 8,
    regno: "14908",
    username: "Yack Hills",
    status: "Active",
    type: "Maize Issues",
    
    date: "Jan 07 2026",
  },
];

const ActiveUsers = () => {
  return (
    <div>
      <div className="">
        <IssuePropsOverview name="Active Users" />
      </div>
      <div>
        <table>
          <thead className=" py-2 border-b text-[#00000080] ">
            <tr className="font-sans border-b font-medium text-sm">
              <th className=" py-2 w-1/18 text-left"></th>
              <th className=" py-2 w-1/6 text-left">ISSUE NO</th>
              <th className=" py-2 w-1/14 text-left">REPORTER NAME</th>
              <th className=" py-2 w-1/8 text-left">REPORTER STATUS</th>
              <th className=" py-2 w-1/6 text-left">ISSUE TYPE </th>
              <th className=" py-2 w-1/12 text-left">DATE</th>
              <th className=" py-2 w-1/18 text-left"></th>
            </tr>
          </thead>

          <tbody className="">
            {overviewdata.map((data, index) => (
              <tr
                className=" text-[] space-y-8 text-sm font-normal border-b border-gray-300"
                key={index}
              >
                <td>
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144]">
                  {data.regno}
                </td>
                <td>{data.username}</td>
                <td className="font-sanns font-normal text-sm text-[#4F5144]">
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
                <td className="font-sanns font-normal text-sm ">{data.type}</td>
                <td className="font-sanns font-normal text-sm text-[#4F5144]">
                  {data.date}
                </td>
                <td className="font-sanns font-normal text-sm ">
                  <button className="bg-[#E6E6E6] rounded-full text-[#000000] py-1 px-4 font-sans font-medium text-sm">
                    View
                  </button>
                </td>

                <div className="">
                  <BsThreeDotsVertical className="" />
                </div>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
      <Pagination/>
    </div>
  );
};

export default ActiveUsers;

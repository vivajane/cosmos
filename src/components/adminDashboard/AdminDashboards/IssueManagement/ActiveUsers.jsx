import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import IssuePropsOverview from "./IssuePropsOverview";
import AdminPagination from "../../AdminPagination";
import { MdArrowOutward } from "react-icons/md";

const overviewdata = [
  {
    id: 1,
    regno: "78901",
    username: "Piper Mills",
    status: "Active",
    type: "Cassava Issues",
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
    <div className="">
      <div>
        <IssuePropsOverview name="Active Accounts List" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className=" text-gray-700">
            <tr className="font-medium text-sm">
              <th className="py-3 px-4 text-left w-10">
              </th>
              <th className="py-3 px-4 text-left">ISSUE NO</th>
              <th className="py-3 px-4 text-left">REPORTER NAME</th>
              <th className="py-3 px-4 text-left">REPORTER STATUS</th>
              <th className="py-3 px-4 text-left">ISSUE TYPE</th>
              <th className="py-3 px-4 text-left">DATE</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {overviewdata.map((data, index) => (
              <tr
                className="border-b border-gray-300 text-sm font-normal"
                key={index}
              >
                <td className="py-3 px-4">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="py-3 px-4 text-gray-700">{data.regno}</td>
                <td className="py-3 px-4 text-gray-700">{data.username}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold 
                      ${
                        data.status === "Active"
                          ? "text-green-700 bg-green-100"
                          : data.status === "Suspended"
                          ? "text-red-700 bg-red-100"
                          : data.status === "Pending"
                          ? "text-yellow-700 bg-yellow-100"
                          : "text-gray-500 bg-gray-200"
                      }`}
                  >
                    {data.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-700">{data.type}</td>
                <td className="py-3 px-4 text-gray-700">{data.date}</td>
                <td className="py-3 px-4 flex items-center justify-between">
                 <span><MdArrowOutward/></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdminPagination />
    </div>
  );
};

export default ActiveUsers;

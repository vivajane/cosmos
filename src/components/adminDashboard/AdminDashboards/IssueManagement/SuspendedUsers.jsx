import React from "react";
import { MdArrowOutward } from "react-icons/md";

import IssuePropsOverview from "./IssuePropsOverview";
import AdminPagination from "../../AdminPagination";
import { BiUpArrow } from "react-icons/bi";

const overviewdata = [
  { id: 1, regno: "78901", username: "Piper Mills", status: "Active", type: "Cassava Issues", date: "Jan 05 2025" },
  { id: 2, regno: "85921", username: "Healther Green", status: "Active", type: "Rice Issues", date: "Feb 07 2024" },
  { id: 3, regno: "92301", username: "Adam Eden", status: "Suspended", type: "Cocoa Issues", date: "Sep 01 2025" },
  { id: 4, regno: "28901", username: "Ryan Mills", status: "Active", type: "Maize Issues", date: "Sep 05 2025" },
  { id: 5, regno: "10901", username: "Yolanda Mills", status: "Suspended", type: "Bean Issues", date: "Dec 05 2025" },
  { id: 6, regno: "98901", username: "Healther Green", status: "Active", type: "Rice Issues", date: "Aug 05 2025" },
  { id: 7, regno: "98903", username: "Edward Mills", status: "Pending", type: "Maize Issues", date: "Jan 05 2025" },
  { id: 8, regno: "14908", username: "Yack Hills", status: "Active", type: "Maize Issues", date: "Jan 07 2026" },
];

const SuspendedUsers = () => {
  return (
    <div className="w-full">
      <IssuePropsOverview name="Suspended Users" />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead className=" text-[#00000080]">
            <tr className="text-left text-sm font-medium border-b">
              <th className="px-4 py-2 w-10"></th> {/* Checkbox */}
              <th className="px-4 py-2 w-1/6">ISSUE NO</th>
              <th className="px-4 py-2 w-1/4">REPORTER NAME</th>
              <th className="px-4 py-2 w-1/6">REPORTER STATUS</th>
              <th className="px-4 py-2 w-1/5">ISSUE TYPE</th>
              <th className="px-4 py-2 w-1/6">DATE</th>
              <th className="px-4 py-2 w-12 text-center"></th> {/* Icon Column */}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody >
            {overviewdata.map((data, index) => (
              <tr className="border-b text-sm  text-[#4F5144]" key={index}>
                <td className="px-4 py-2">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="px-4 py-2">{data.regno}</td>
                <td className="px-4 py-2">{data.username}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-md ${
                      data.status === "Active"
                        ? "text-[#E2F1FC] bg-[#02487A]"
                        : data.status === "Completed"
                        ? "text-[#027A48] bg-[#ECFDF3]"
                        : data.status === "Pending"
                        ? "text-[#713F12] bg-[#FEF9C3]"
                        : "text-gray-500 bg-gray-200"
                    }`}
                  >
                    {data.status}
                  </span>
                </td>
                <td className="px-4 py-4">{data.type}</td>
                <td className="px-4">{data.date}</td>
                <td className="px-4 py-2 text-center">
                  <MdArrowOutward />
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

export default SuspendedUsers;

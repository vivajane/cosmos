import React from "react";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import { useState } from "react";

const tables = [
  {
    id: 1,
    name: "April Dave",
    email: "april@gmail",
    status: "Active",
    amount: 100000,
    // roi: 20,
    color: "text-[#027A48] bg-[#ECFDF3]",
    date: "Jan 05 2025",
  },
  {
    id: 2,
    name: "Rice Black",
    email: "rice@gmail",
    status: "Suspended",
    amount: 150000,
    // roi: 25,
    color: "text-[#7A0204] bg-[#FEE2D5]",
    date: "Jan 05 2025",
  },
  {
    id: 3,
    name: "Cocoa Shean",
    email: "cocoa@gmail",
    status: "Pending",
    amount: 50000,
    // roi: 15,
    color: "text-[#713F12] bg-[#FEF9C3]",
    date: "Jan 05 2025",
  },
  {
    id: 4,
    name: "Cassava Nton",
    email: "cassa@gmail",
    status: "Pending",
    amount: 200000,
    // roi: 18,
    color: "text-[#713F12] bg-[#FEF9C3]",
    date: "Jan 05 2025",
  },
  {
    id: 5,
    name: "Adeolu Nelson",
    email: "adeolu@gmail",
    status: "Active",
    amount: 200000,
    // roi: 18,
    color: "text-[#027A48] bg-[#ECFDF3]",
    date: "Jan 05 2025",
  },
  {
    id: 6,
    name: "Bean Kyle",
    email: "bean@gmail",
    status: "Pending",
    amount: 200000,
    // roi: 18,
    color: "text-[#713F12] bg-[#FEF9C3]",
    date: "Jan 05 2025",
  },
  {
    id: 7,
    name: "Peter Cass",
    email: "peter@gmail",
    status: "Suspended",
    amount: 200000,
    // roi: 18,
    color: "text-[#7A0204] bg-[#FEE2D5]",
    date: "Jan 05 2025",
  },
  {
    id: 8,
    name: "Piper Mill",
    email: "cassa@gmail",
    status: "Active",
    amount: 200000,
    // roi: 18,
    color: "text-[#027A48] bg-[#ECFDF3]",
    date: "Jan 05 2025",
  },
]
const AdminTableOverview = ({ setShowActiveUsers, showStatus }) => {
 

  const filteredData = showStatus
    ? tables.filter(
        (table) => table.status.toLowerCase() === showStatus.toLowerCase()
      )
    : tables;
  return (
    <div className="w-full overflow-x-auto px-4">
      <table className="min-w-[700px] w-full table-auto border-collapse">
        <thead className="bg-[#FCFCFC]">
          <tr className="text-[#4F5144] font-medium text-sm text-left">
            <th className="py-3 px-2">USER NAME</th>
            <th className="py-3 px-2">USER EMAIL</th>
            <th className="py-3 px-2">USER STATUS</th>
            <th className="py-3 px-2"># OF INV</th>
            <th className="py-3 px-2">DATE REGISTERED</th>
            <th className="py-3 px-2"></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((table) => (
            <tr
              key={table.id}
              className="text-[#4F5144] text-sm font-normal border-b"
            >
              <td className="py-3 px-2">{table.name}</td>
              <td className="py-3 px-2">{table.email}</td>
              <td className="py-3 px-2">
                <span className={`px-4 py-1 rounded-md ${table.color}`}>
                  {table.status}
                </span>
              </td>
              <td className="py-3 px-2">₦{table.amount}</td>
              <td className="py-3 px-2">{table.date}</td>
              <td className="py-3 px-2">
                <MdArrowOutward
                  onClick={() => setShowActiveUsers(table)}
                  className="cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTableOverview;

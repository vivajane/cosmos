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
    <div className="py-6 overflow-x-auto px-4 ">
      <table className="min-w-full table-fixed">
        <thead className="bg-[#FCFCFC]">
          <tr className="font-sans text-[#4F5144] font-medium text-sm">
            <th className=" py-2 w-1/4 text-left"> USER NAME</th>
            <th className=" py-2 w-1/6 text-left">USER EMAIL</th>
            <th className=" py-2 w-1/5 text-left">USER STATUS</th>
            <th className="py-2 w-1/6 text-left"># OF INV</th>
            <th className="py-2 w-1/3 text-left">DATE REGISTERED</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((table) => (
            <tr
              className=" text-[#4F5144] text-sm font-normal border-b border-gray-300"
              key={table.id}
            >
              <td>{table.name}</td>
              <td>{table.email}</td>
              <td>
                <span className={`px-4 py-1 rounded-md ${table.color}`}>
                  {table.status}
                </span>
              </td>
              <td>₦{table.amount}</td>
              <td className="px-2 py-4 ml-2">{table.date}</td>
              {/* <td>{table.date}</td> */}
              <td>
                <MdArrowOutward onClick={() => setShowActiveUsers(table)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTableOverview;

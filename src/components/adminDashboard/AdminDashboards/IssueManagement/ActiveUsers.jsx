import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import IssuePropsOverview from "./IssuePropsOverview";
import Pagination from "../../../investments/newprojects/Pagination";

const overviewdata = [
  {
    id: 1,
    regno: "78901",
    username: "Piper Mills",
    email: "pipper@gmail.com",
    niv: "20",
    date: "Jan 05 2025",
  },
  {
    id: 2,
    regno: "85921",
    username: "Healther Green",
    email: "green@gmail.com",
    niv: "10",
    date: "Feb 07 2024",
  },
  {
    id: 3,
    regno: "92301",
    username: "Adam Eden",
    email: "adam@gmail.com",
    niv: "40",
    date: "Sep 01 2025",
  },
  {
    id: 4,
    regno: "28901",
    username: "Ryan Mills",
    email: "ryan@gmail.com",
    niv: "50",
    date: "Sep 05 2025",
  },
  {
    id: 5,
    regno: "10901",
    username: "Yolanda Mills",
    email: "yols@gmail.com",
    niv: "60",
    date: "Dec 05 2025",
  },
  {
    id: 6,
    regno: "98901",
    username: "Healther Green",
    email: "green@gmail.com",
    niv: "20",
    date: "Aug 05 2025",
  },
  {
    id: 7,
    regno: "98903",
    username: "Edward Mills",
    email: "edward@gmail.com",
    niv: "20",
    date: "Jan 05 2025",
  },
  {
    id: 8,
    regno: "14908",
    username: "Yack Hills",
    email: "yack@gmail.com",
    niv: "70",
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
              <th className=" py-2 w-1/12 text-left"></th>
              <th className=" py-2 w-1/8 text-left">REG NO</th>
              <th className=" py-2 w-1/8 text-left">USER NAME</th>
              <th className=" py-2 w-1/12 text-left">USER EMAIL</th>
              <th className=" py-2 w-1/8 text-left"># OF NIV</th>
              <th className=" py-2 w-1/6 text-left">DATE REGISTERED</th>
              <th className=" py-2 w-1/6 text-left">DOCUMENTS</th>
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
                <td className="font-sanns font-normal text-sm text-black">
                  {data.email}
                </td>
                <td className="font-sanns font-normal text-sm ">{data.niv}</td>
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

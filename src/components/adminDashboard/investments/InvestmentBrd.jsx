import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AdminIssuePropsOverview from "./AdminIssueProps";
import { useState } from "react";
import ModalFilter from "./modals/FilterInv";
import Pagination from "../../investments/newprojects/Pagination";
import InvestmentDetail from "./modals/InvestmentDetail";

const wallets = [
  {
    id: 1,
    name: "John Doe",
    desc: "ROI from Soybean",
    Amount: 100000,
    expectedRoi: 20,
    date: "Jan 05, 2025",
    status: "Completed",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 2,
    name: "Jane Smith",
    desc: "Rice Platform",
    Amount: 200000,
    expectedRoi: 20,
    date: "Feb 08, 2025",
    status: "Pending",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 3,
    name: "   David Johnson",
    desc: "Cocoa Season",
    Amount: 100000,
    expectedRoi: 20,
    date: "Mar 09, 2025",
    status: "Completed",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 4,
    name: "Sarah Williams",
    desc: "Cassava Cycle",
    Amount: 100000,
    expectedRoi: 5,
    date: "April 05, 2025",
    status: "Active",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 5,
    name: "Micheal Brown",
    desc: "Tomato Project",
    Amount: 100000,
    expectedRoi: 5,
    date: "Jan 05, 2025",
    status: "completed",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 6,
    name: "Tracy Okoro",
    desc: "Bean Cycle",
    Amount: 100000,
    expectedRoi: 20,
    date: "Jan 05, 2025",
    status: "completed",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 7,
    name: "Akpan David",
    desc: "Plabtain",
    Amount: 100000,
    expectedRoi: 20,
    date: "Dec 05, 2025",
    status: "Active",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    name: "Ola Benson",
    desc: "Pepper",
    Amount: 100000,
    expectedRoi: 20,
    date: "Oct 05, 2025",
    status: "Pending",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
];
const InvestmentBrd = ({ setInvUserDetails, invUserDetails, hideFilterInv, setInvFilter,invFilter,search, setSearch }) => {
  const [showFilter, setShowFilter] = useState("");

  const checkFilter = (status)=> {
    setShowFilter(status);

  }

  const filteredWallets = showFilter ? wallets.filter((wallet) => wallet.status.toLowerCase() === showFilter.toLowerCase()) : wallets;

  return (
    <div>
      <AdminIssuePropsOverview inFilter ={invFilter} setInvFilter={setInvFilter} name="All Investments" />
      <div className="px-4">
        <table className="space-y-4  table-auto w-full border-collapse">
          <thead className="">
            <tr className="font-sans text-[]  font-medium text-sm">
              <th className=" py-4 pr-4 text-left">Investor Name</th>
              <th className="px-4 text-left">Project Name</th>
              <th className=" px-4 text-left">Amount Invested</th>
              <th className="px-4  text-left">Expected Roi</th>
              <th className=" px-4 text-left">Investment Date</th>
              <th className=" px-4 text-left">Status</th>
              <th className=" px-4 text-left"></th>
            </tr>
          </thead>

          <tbody>
            {filteredWallets.map((data, index) => (
              <tr
                className=" text-[#4F5144] text-sm font-normal border-b border-gray-300"
                key={index}
                onClick={() => setInvUserDetails(data)}
              >
                <td className="font- py-4 font-normal text-sm text-[#4F5144]">
                  {data.name}
                </td>
                <td className="font-sanns py-2 px-3 font-normal text-sm text-[#4F5144]">
                  {data.desc}
                </td>
                <td className="font-sanns px-3 font-normal text-sm text-[#4F5144]">
                  {new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  }).format(data.Amount)}
                </td>
                <td className="font-sanns px-3 font-normal text-sm text-[#4F5144]">
                  {data.expectedRoi}
                </td>
                <td className="font-sanns px-3 font-normal text-sm text-[#4F5144]">
                  {data.date}
                </td>
                <td className="font-sanns py-1 px-2 font-normal  text-sm text-[#4F5144]">
                  <span
                    className={`${
                      data.status === "Active"
                        ? "text-[#02487A] bg-[#E2F1FC]"
                        : data.status === "Completed"
                        ? "text-[#027A48] bg-[#ECFDF3]"
                        : data.status === "Pending"
                        ? "text-[#713F12] bg-[#FEF9C3]"
                        : "text-gray-500 bg-gray-200"
                    } px-2 py-1 rounded-md`}
                  >
                    {data.status}
                  </span>
                </td>
                <td className=" py-6 px-4">
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
      <Pagination />
      {invFilter && <ModalFilter  checkFilter={checkFilter} invFilter={invFilter} setInvFilter={setInvFilter} />}
      {invUserDetails && (
        <InvestmentDetail setInvUserDetails={setInvUserDetails} invUserDetails={invUserDetails} />
      )}
    </div>
  );
};

export default InvestmentBrd;

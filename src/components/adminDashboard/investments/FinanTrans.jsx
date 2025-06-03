import React, { useEffect, useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import AdminIssuePropsOverview from "./AdminIssueProps";
import Pagination from "../../investments/newprojects/Pagination";
import ModalFilter from "./modals/FilterInv";
import InvestmentDetail from "./modals/InvestmentDetail";
import FilterStatus from "./modals/FilterStatus";

const wallets = [
  {
    id: 1,
    transId: "TXN12456780",
    name: "John Doe",
    tranType: "Wallet Deposit",
    Amount: 100000,
    date: "Jan 05, 2025",
    status: "Success",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 2,
    transId: "TXN23456780",
    name: "Victor Smith",
    tranType: "Investment",
    Amount: 300000,
    date: "Feb 06, 2025",
    status: "Completed",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 3,
    transId: "TXN3456789",
    name: "Yolande Doe",
    tranType: "Roi Payout",
    Amount: 200000,
    date: "Jan 05, 2025",
    status: "Pending",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 4,
    transId: "TXN12456780",
    name: "Samuel Doe",
    tranType: "Withdrawal",
    Amount: 500000,
    date: "Mar 13, 2025",
    status: "Success",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 5,
    transId: "TXN2395780",
    name: "Kosi Doe",
    tranType: "Wallet Deposit",
    Amount: 900000,
    date: "Apr 09, 2025",
    status: "Pending",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 6,
    transId: "TXN12453489",
    name: "Dekunle Gold",
    tranType: "Roi Payout",
    Amount: 100000,
    date: "Jan 05, 2025",
    status: "Success",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 7,
    transId: "TXN12456780",
    name: "Lilian Doe",
    tranType: " Withdrawal",
    Amount: 100000,
    date: "Jan 05, 2025",
    status: "Pending",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
  {
    id: 8,
    transId: "TXN28656780",
    name: "John Doe",
    tranType: "Investment",
    Amount: 780000,
    date: "Jan 05, 2025",
    status: "Success",

    // color: "text-[#02487A] bg-[#E2F1FC]",
  },
];
const FinanTrans = ({
  filterStatus,
  setFilterStatus,
  setInvUserDetails,
  invUserDetails,
}) => {
  const [showStatus, setShowStatus] = useState("");
  const checkStatus = (status) => {
    setShowStatus(status);
  };

  const filteredWallets = showStatus
    ? wallets.filter(
        (wallet) => wallet.status.toLowerCase() === showStatus.toLowerCase()
      )
    : wallets;
  return (
    <div>
      <AdminIssuePropsOverview
      
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        name="All Transactions"
      />
      <div>
        <table className="space-y-4 table-auto w-full border-collapse">
          <thead className="">
            <tr className="font-sans text-[]  font-medium text-sm">
              <th className=" py-2 px-2 text-left">Transaction ID</th>
              <th className="px-4 text-left">User Name</th>
              <th className="px-4 text-left">Transaction Type</th>
              <th className="px-4 text-left">Amount</th>
              <th className="px-4 text-left"> Date</th>
              <th className="px-4 text-left">Status</th>
              <th className="px-4 text-left"></th>
            </tr>
          </thead>

          <tbody>
            {filteredWallets.map((data, index) => (
              <tr
                className=" text-[#4F5144] text-sm font-normal border-b border-gray-300"
                key={index}
                onClick={() => setInvUserDetails(data)}
              >
                <td className="font-sanns px-3 py-4 font-normal text-sm text-[#4F5144]">
                  {data.transId}
                </td>
                <td className="font-sanns px-3 font-normal text-[12px] text-[#4F5144]">
                  {data.name}
                </td>
                <td className="font-sanns px-3 font-normal text-sm text-[#4F5144]">
                  {data.tranType}
                </td>
                <td className="font-sanns px-3 font-normal text-sm text-[#4F5144]">
                  ₦{data.Amount.toLocaleString()}
                </td>
                <td className="font-sanns px-3 font-normal text-sm text-[#4F5144]">
                  {data.date}
                </td>
                <td className="font-sanns font-normal px-2s text-sm text-[#4F5144]">
                  <span
                    className={`${
                      data.status === "Success"
                        ? "text-[#027A48] bg-[#ECFDF3]"
                        : data.status === "Pending"
                        ? "text-[#713F12] bg-[#FEF9C3]"
                        : "text-gray-500 bg-gray-200"
                    } px-2 py-1 rounded-md`}
                  >
                    {data.status}
                  </span>
                </td>
                <td className="px-4 py-5">
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
      <Pagination />
      {filterStatus && (
        <FilterStatus
          setFilterStatus={setFilterStatus}
          filterStatus={filterStatus}
          checkStatus={checkStatus}
        />
      )}
      {invUserDetails && (
        <InvestmentDetail
          setInvUserDetails={setInvUserDetails}
          invUserDetails={invUserDetails}
        />
      )}
    </div>
  );
};

export default FinanTrans;

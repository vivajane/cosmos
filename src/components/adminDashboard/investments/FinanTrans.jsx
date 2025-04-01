import React from "react";
import IssuePropsOverview from "../AdminDashboards/IssueManagement/IssuePropsOverview";
import { BsThreeDotsVertical } from "react-icons/bs";

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
    status: "Pending",

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
const FinanTrans = () => {
  return (
    <div>
      <IssuePropsOverview name="All Transactions" />
      <div>
        <table className="space-y-4">
          <thead className="bg-[#0000000D] shadow-md">
            <tr className="font-sans text-[]  font-medium text-sm">
              <th className=" py-4 px-2 w-1/5 text-left">Transaction ID</th>
              <th className="  w-1/6 text-left">User Name</th>
              <th className="  w-1/6 text-left">Transaction Type</th>
              <th className="  w-1/5 text-left">Amount</th>
              <th className="  w-1/6 text-left"> Date</th>
              <th className="  w-1/6 text-left">Status</th>
              <th className="  w-1/6 text-left"></th>
            </tr>
          </thead>

          <tbody>
            {wallets.map((data, index) => (
              <tr
                className=" text-[#4F5144] space-y-10 text-sm font-normal border-b border-gray-300"
                key={index}
              >
                <td className="font-sanns font-normal text-sm text-[#4F5144]">
                  {data.transId}
                </td>
                <td className="font-sanns font-normal text-[12px] text-[#4F5144]">
                  {data.name}
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144]">
                  {data.tranType}
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144]">
                  {data.Amount}
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144]">
                  ₦{data.date}
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144]">
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
                <BsThreeDotsVertical className="" />
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinanTrans;

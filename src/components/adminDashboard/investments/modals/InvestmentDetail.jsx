import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const InvestmentDetail = ({ invUserDetails, setInvUserDetails }) => {
  return (
    <div className="fixed  inset-0 bg-black bg-opacity-85 flex bottom-0 right-0 left-0 top-0 items-center justify-center">
      <div className="bg-white text-sm md:text-base p-6 text-[#424242] overflow-y-auto rounded-lg h-96 space-y-4 text-left md:w-96 shadow-md absolute">
        <div className="flex border-b justify-between items-center">
          <h1 className=" font-semibold text-[#6B911B]">Issues Details</h1>
          <div>
            <FaTimesCircle  size={20} onClick={() => setInvUserDetails(null)}/>
          </div>
        </div>
        <h1 className="font-semibold text-[#1E1E1E] font-sanns md:text-base">
          Investment Overview
        </h1>
        <div className="space-y-2">
          <h1>
            Investor: <span>{invUserDetails?.name}</span>
          </h1>
          <h1>
            Project Name: <span>{invUserDetails?.desc}</span>
          </h1>
          <h1>
            Amount Invested: <span>{invUserDetails?.amount}</span>
          </h1>
          <h1>
            Investment Date: <span>{invUserDetails?.date}</span>
          </h1>
          <h1>
            Expected ROI: <span>{invUserDetails?.roi}</span>
          </h1>
          <h1>
            Status:{" "}
            <span
              className={`px-4 py-2 rounded-md  ${
                invUserDetails.status === "Active"
                  ? "text-[#02487A] bg-[#E2F1FC]"
                  : invUserDetails.status === "Completed"
                  ? "text-[#027A48] bg-[#ECFDF3]"
                  : invUserDetails.status === "Pending"
                  ? "text-[#713F12] bg-[#FEF9C3]"
                  : "text-gray-500 bg-gray-200"
              }`}
            >
              {invUserDetails?.status}
            </span>
          </h1>
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-[#1E1E1E] font-sanns text-base">
            Progress & Status
          </h1>
          <p>
            Current Progress: <span>60% completed</span>
          </p>
          <p>
            Estimated Completion <span>Dec 31, 2025</span>
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-[#1E1E1E] font-sanns text-base">
            Fund Breakdown
          </h1>
          <table className="space-y-4  table-auto w-full">
            <thead>
              <tr className="flex justify-between py-3 items-center">
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="py-4">
              <tr >
                <td className="pt-4">Initial Investment</td>
                <td className="pt-4">
                  {new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  }).format(invUserDetails.Amount)}
                </td>
              </tr>
              <tr className="">
                <td className="py-4">Expected Returns</td>
                <td className="pt-">
                  {new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  }).format(125000)}
                </td>
              </tr>
              <tr>
                <td>Total Payout(ROI)</td>
                <td>
                  {new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  }).format(625000)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default InvestmentDetail;

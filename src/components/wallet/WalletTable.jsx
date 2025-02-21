import React from 'react'
import PropOverview from '../investments/PropOverview'
import { BsThreeDotsVertical } from 'react-icons/bs'


const wallets = [
    {
      date: "Jan 05, 2025",
      trans: "TXN12456780",
      type: "credit",
      desc: "ROI from Soybean Cycle 3",
      // color: "text-[#02487A] bg-[#E2F1FC]",
      amount: 100000,
      status: "completed",
    },
    {
      date: "Feb 07, 2025",
      trans: "TXN12456578",
      type: "Debit",
      desc: "Investment in Maize Project",
      // color: "text-[#02487A] bg-[#E2F1FC]",
      amount: 500000,
      status: "pending",
    },
    {
      date: "Mar 01, 2025",
      trans: "TXN12456780",
      type: "credit",
      desc: "Wallet Deposit",
      // color: "text-[#02487A] bg-[#E2F1FC]",
      amount: 170000,
      status: "completed",
    },
    {
      date: "Jan 05, 2025",
      trans: "TXN12456760",
      type: "Debit",
      desc: "Wallet Bonus (New Milestone)",
      // color: "text-[#02487A] bg-[#E2F1FC]",
      amount: 700000,
      status: "completed",
    },
    {
      date: "Jan 05, 2025",
      trans: "TXN12456130",
      type: "credit",
      desc: "Withdrawal to Bank Account",
      // color: "text-[#02487A] bg-[#E2F1FC]",
      amount: 100000,
      status: "pending",
    },
    {
      date: "Sep 25, 2025",
      trans: "TXN12456780",
      type: "credit",
      desc: "Refund from Delayed Projec",
      // color: "text-[#02487A] bg-[#E2F1FC]",
      amount: 800000,
      status: "completed",
    },
    {
      date: "Jan 05, 2025",
      trans: "TXN12456780",
      type: "credit",
      desc: "Withdrawal to Bank Accoun",
      // color: "text-[#02487A] bg-[#E2F1FC]",
      amount: 300000,
      status: "completed",
    },
    {
      date: "Dec 11, 2025",
      trans: "TXN12456110",
      type: "Debit",
      desc: "ROI from Rice Cycle",
      // color: "text-[#02487A] bg-[#E2F1FC]",
      amount: 100000,
      status: "completed",
    },
    
  ];
const WalletTable = () => {
  return (
    <div>
        <div><PropOverview name='Transaction History'/></div>
        <div className="pb-4">
      <div >
      <PropOverview name= "Investment Portfolio"/>
      </div>
      <table>
        <thead className="bg-[#0000000D] shadow-md">
          <tr className="font-sans text-[#4F5144] font-medium text-sm">
            <th className=" py-2 w-1/5 text-left">Date</th>
            <th className=" py-2 w-1/6 text-left">Transaction ID</th>
            <th className=" py-2 w-1/6 text-left">Type</th>
            <th className=" py-2 w-1/5 text-left">Description</th>
            <th className=" py-2 w-1/6 text-left">Amount</th>
            <th className=" py-2 w-1/6 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {wallets.map((data, index) => (
            <tr
              className=" text-[#4F5144] space-y-8 text-sm font-normal border-b border-gray-300"
              key={index}
            >
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.date}
              </td>
              <td className="font-sanns font-normal text-xs text-[#4F5144]">
                {data.trans}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.type}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.desc}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.amount}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.status}
              </td>
              <BsThreeDotsVertical className="" />
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
      
    </div>
  )
}

export default WalletTable

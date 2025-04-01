import React from 'react'
import IssuePropsOverview from '../AdminDashboards/IssueManagement/IssuePropsOverview'
import { BsThreeDotsVertical } from 'react-icons/bs';


const wallets = [
    {
        id:1,
      name: "John Doe",
      desc: "ROI from Soybean Cycle 3",
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
        id:3,
      name: "   David Johnson",
      desc: "Cocoa Season",
      Amount: 100000,
      expectedRoi: 20,
      date: "Mar 09, 2025",
      status: "Completed",
      
      // color: "text-[#02487A] bg-[#E2F1FC]",
    },
    {
        id:4,
      name: "Sarah Williams",
      desc: "Cassava Cycle",
      Amount: 100000,
      expectedRoi: 5,
      date: "April 05, 2025",
      status: "Active",
      
      // color: "text-[#02487A] bg-[#E2F1FC]",
    },
    {
        id:5,
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
const InvestmentBrd = () => {
  return (
    <div>
      <IssuePropsOverview name="All Investments"/>
      <div>
      <table className='space-y-4'>
          <thead className="bg-[#0000000D] shadow-md">
            <tr className="font-sans text-[]  font-medium text-sm">
              <th className=" py-4 px-2 w-1/5 text-left">Investor Name</th>
              <th className="  w-1/6 text-left">Project Name</th>
              <th className="  w-1/6 text-left">Amount Invested</th>
              <th className="  w-1/5 text-left">Expected Roi</th>
              <th className="  w-1/6 text-left">Investment Date</th>
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
                  {data.name}
                </td>
                <td className="font-sanns font-normal text-[12px] text-[#4F5144]">
                  {data.desc}
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144]">
                  {data.Amount}
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144]">
                  {data.expectedRoi}
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144]">
                ₦{data.date}
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144]">
                  <span
                    className={`${
                      data.status === "active"
                        ? "text-[#E2F1FC] bg-[#02487A]"
                        : data.status === "completed"
                        ? "text-[#027A48] bg-[#ECFDF3]"
                        : data.status === "pending"
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
  )
}

export default InvestmentBrd

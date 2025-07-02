import { FaTimes } from "react-icons/fa";
import Button from "../../../Button";
import passport from "../../../../assets/picc.jpeg";
import AdminCardsPropsModal from "./AdminPropsModal";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "TOTAL FUNDS INVESTED ",
    balance: "14,000000",
    color: "bg-[#F7F9F3] text-[#6B911B]",
    hasButton: false,
  },
  {
    id: 2,
    title: "NUMBER OF INVESTMENTS",
    balance: 4,
    color: "bg-[#EDF5FF] text-[#00000080]",
    hasButton: false,
  },
  {
    id: 3,
    title: "ACCOUNT STATUS",
    balance: 162370,
    color: "bg-[#FAFAFA] text-[#00000080]",
    hasButton: true,
    status: "active",
  },
  {
    id: 4,
    title: "ISSUES RAISED PENDING ATTENTION",
    balance: 3,
    color: "bg-[#F9F3F3] text-[#00000080]",
    hasButton: false,
  },
  {
    id: 5,
    title: "ISSUES RESOLVED",
    balance: 13,
    color: "bg-[#FAF8E0] text-[#00000080]",
    hasButton: false,
  },
  {
    id: 6,
    title: "USER STATUS",
    balance: 202370,
    color: "bg-[#FAFAFA] text-[#00000080]",
    hasButton: true,
    status: "verified",
  },
];
const statusNotes = {
  active: "active and viable",
  pending: "pending and not viable",
  suspended: "suspended and not active",
};

const ActiveUsers = ({
  showActiveUsers,
  setShowActiveUsers,
  setShowSuspendUsers,
  setDelAccount,
}) => {
  if (!showActiveUsers) return null;
  console.log("STATUS:", showActiveUsers.status);

  return (
    <div
      onClick={setShowActiveUsers}
      className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0"
    >
      <div className="bg-white p-6 rounded-lg md:max-h-[90vh] max-h-[60vh] overflow-y-auto space-y-2 shadow-lg md:w-auto w-72">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-[#6B911B] font-medium">User Profile</h1>
          <span onClick={setShowActiveUsers} className="text-[#1E1E1E80]">
            <FaTimes size={20} />
          </span>
        </div>
        <hr />
        <div className="flex gap-3">
          <div>
            <img
              className="md:h-10 md:w-10 h-4 w-6 rounded-full"
              src={passport}
              alt="passpport"
            />
          </div>
          <div className="text-sm md:text-base">
            <h1>April Dave</h1>
            <p>
              April@gmail.com <span>+234 701 123 4567</span>
            </p>
          </div>
        </div>

        <div className={`grid mb-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-2 text-xs gap-4`}>
          {cards.map((card) => (
            <div
              className={`text-[10px] rounded-lg ${card.color}`}
              key={card.id}
            >
              <AdminCardsPropsModal
                title={card.title}
                icon={card.icon}
                balance={card.balance}
                hasButton={card.hasButton}
                status={card.status}
              />
            </div>
          ))}
        </div>
        <hr />
        <div className="">
          <div className="flex gap-2 md:gap-3 items-center">
            <h1 className="text-[#1E1E1E] font-semibold text-xs sm:text-sm md:text-base">
              Verification Document
            </h1>
            <h1 className="text-[#1E1E1EBF] font-medium text-sm">NIN</h1>
            <div>
              <button className="bg-[#E6E6E6] py-1 px-3 rounded-full">
                view
              </button>
            </div>
            <div>
              <FaArrowUpFromBracket />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between gap-6 ">
          <div className="">
            <h1 className="text-[#1E1E1E] md:text-base text-xs font-semibold">
              Recent Project
            </h1>
            <ul className="pt-3">
              <li className="space-y-3">
                <p className="text-[#1E1E1EBF] font-normal text-xs md:text-sm">
                  Project Name:{" "}
                  <span className="text-[#1E1E1EBF] font-medium text-sm">
                    Rice Farming
                  </span>
                </p>
                <p className="text-[#1E1E1EBF] font-normal text-sm">
                  Location:{" "}
                  <span className="text-[#1E1E1EBF] font-medium text-sm">
                    Kaduna, Nigeria
                  </span>
                </p>
                <p className="text-[#1E1E1EBF] font-normal text-sm">
                  Description:{" "}
                  <span className="text-[#1E1E1EBF] font-medium text-sm">
                    Rice Investment
                  </span>
                </p>
                <p className="text-[#1E1E1EBF] font-normal text-sm">
                  Status:
                  <span
                    className={ `${showActiveUsers.status.toLowerCase() === "active" ? "text-[#1BA019]" : showActiveUsers.status.toLowerCase() === "pending" ? "text-[#FFC107]" :showActiveUsers.status.toLowerCase() === "suspended" &&  "text-[#FF0000]"} font-medium px-2 text-sm`}
                  >
                    {showActiveUsers.status}
                  </span>
                </p>
                
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#1E1E1E] text-xs md:text-base font-semibold">
              Investment Details
            </h1>
            <ul className="pt-3">
              <li className="space-y-3">
                <p className="text-[#1E1E1EBF] font-normal text-sm">
                  Investment:{" "}
                  <span className="text-[#1E1E1EBF] font-medium text-sm">
                    ₦{showActiveUsers.amount?.toLocaleString()}
                  </span>
                </p>
                <p className="text-[#1E1E1EBF] font-normal text-xs md:text-sm">
                  EXPECTED ROI:{" "}
                  <span className="text-[#1E1E1EBF] font-medium text-xs md:text-sm">
                    25%
                  </span>
                </p>
                <p className="text-[#1E1E1EBF] font-normal text-xs md:text-sm">
                  START DATE:{" "}
                  <span className="text-[#1E1E1EBF] font-medium text-sm">
                    {showActiveUsers.date}
                  </span>
                </p>
                <p className="text-[#1E1E1EBF] font-normal text-xs md:text-sm">
                  END DATE:{" "}
                  <span className="text-[#1E1E1EBF] font-medium text-sm">
                    December 31, 2025
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="space-y-2">
          <h1 className="text-[#1E1E1E] text-base font-semibold">Note</h1>
          <p className="text-[#1E1E1EBF] font-normal text-sm">
            {statusNotes[showActiveUsers.status?.toLowerCase()] }
          </p>
        </div>

        <div className="md:flex py-3 space-y-4 md:space-y-0 gap-3">
          <button
            onClick={() =>
              setShowSuspendUsers(true) || setShowActiveUsers(false)
            }
            className="bg-[#F9FAE0] w-auto border-[#E9922A] text-[#E9922A] py-2 md:px-12 px-6 rounded"
          >
            Suspend Account
          </button>
          <button
            onClick={() => setDelAccount(true) || setShowActiveUsers(false)}
            className="bg-[#FBE2E2] border-[#C50000] text-[#C50000] py-2 md:px-12 px-6 rounded"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;

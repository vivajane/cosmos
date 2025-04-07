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
    hasButton: false
  },
  {
    id: 2,
    title: "NUMBER OF INVESTMENTS",
    balance: 4,
    color: "bg-[#EDF5FF] text-[#00000080]",
    hasButton: false
  },
  {
    id: 3,
    title: "ACCOUNT STATUS",
    balance: 162370,
    color: "bg-[#FAFAFA] text-[#00000080]",
    hasButton: true,
    status: "active"
  },
  {
    id: 4,
    title: "ISSUES RAISED PENDING ATTENTION",
    balance: 3,
    color: "bg-[#F9F3F3] text-[#00000080]",
    hasButton: false
  },
  {
    id: 5,
    title: "ISSUES RESOLVED",
    balance: 13,
    color: "bg-[#FAF8E0] text-[#00000080]",
    hasButton: false
  },
  {
    id: 6,
    title: "USER STATUS",
    balance: 202370,
    color: "bg-[#FAFAFA] text-[#00000080]",
    hasButton: true,
    status: "verified"
  },
];

const ActiveUsers = ({showActiveUsers, setShowActiveUsers, setShowSuspendUsers, setDelAccount}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg max-h-[90vh] overflow-y-auto space-y-2 shadow-lg w-auto">
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
              className="h-10 w-10 rounded-full"
              src={passport}
              alt="passpport"
            />
          </div>
          <div>
            <h1>April Dave</h1>
            <p>
              April@gmail.com <span>+234 701 123 4567</span>
            </p>
          </div>
        </div>

        <div className={`grid mb-10 grid-cols-3 py-2 text-xs gap-4`}>
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
          <div className="flex gap-3 items-center">
            <h1 className="text-[#1E1E1E] font-semibold text-base">
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
        <div className="flex justify-between ">
          <div>
            <h1 className="text-[#1E1E1E] text-base font-semibold">
              Recent Project
            </h1>
            <ul className="pt-3">
              <li className="space-y-3">
                <p className="text-[#1E1E1EBF] font-normal text-sm">
                  Project Name:{" "}
                  <span className="text-[#1E1E1EBF] font-medium text-sm">
                    Rice Farming In
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
                  Status:{" "}
                  <span className="text-[#1E1E1EBF] font-medium text-sm">
                    Active
                  </span>
                </p>

              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#1E1E1E] text-base font-semibold">
              Investment Details
            </h1>
            <ul className="pt-3">
              <li className="space-y-3">
                <p className="text-[#1E1E1EBF] font-normal text-sm">
                  Investment:{" "}
                  <span className="text-[#1E1E1EBF] font-medium text-sm">
                  ₦10,000,000
                  </span>
                </p>
                <p className="text-[#1E1E1EBF] font-normal text-sm">
                  EXPECTED ROI:{" "}
                  <span className="text-[#1E1E1EBF] font-medium text-sm">
                  25%
                  </span>
                </p>
                <p className="text-[#1E1E1EBF] font-normal text-sm">
                  START DATE:{" "}
                  <span className="text-[#1E1E1EBF] font-medium text-sm">
                  March 1, 2025
                  </span>
                </p>
                <p className="text-[#1E1E1EBF] font-normal text-sm">
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
            Account Active and Viable
          </p>
        </div>

        <div className="flex py-3 gap-3">
          <button onClick={() => setShowSuspendUsers(true) || setShowActiveUsers(false)} className="bg-[#F9FAE0] w-auto border-[#E9922A] text-[#E9922A] py-2 px-12 rounded">
            Suspend Account
          </button>
          <button onClick={() => setDelAccount(true) || setShowActiveUsers(false)} className="bg-[#FBE2E2] border-[#C50000] text-[#C50000] py-2 px-12 rounded">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;

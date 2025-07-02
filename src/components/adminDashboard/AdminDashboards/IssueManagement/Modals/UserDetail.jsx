import React from "react";
import { FaMarker, FaTimesCircle } from "react-icons/fa";
import face from "../../../../../assets/face.jpeg";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import PropUserDe from "../PropsUserDe";
import { FiDownload } from "react-icons/fi";
import UserDetailModal from "./ModalUser/UserDetailModal";
const UserDetail = ({ setShowUsers, showUsers, setMark}) => {
  return (
    <div
      className="fixed inset-0 bg-black  bg-opacity-70 flex right-0 left-0 bottom-0 top-0 items-center justify-center"
      onClick={() => setShowUsers(null)} 
    >
      <div
        className="bg-white p-6 text-[#424242] overflow-y-auto max-h-[90vh] w-4/5  md:w-2/5 rounded-lg space-y-4 text-center shadow-md"
        onClick={(e) => e.stopPropagation()} // prevent modal from closing on content click
      >
        <div className="flex border-b justify-between items-center">
          <h1 className=" font-semibold text-[#6B911B]">Issues Details</h1>
          <div>
            <FaTimesCircle onClick={() => setShowUsers(null)} />
          </div>
        </div>
        <div className="md:flex gap-2">
          <div>
            <img className="h-10 w-10 rounded-full" src={face} alt="face" />
          </div>
          <div className="text-left ">
            <h1>Reporter:</h1>
            <div className="relative  ">
              <h1 className="font-semibold">
                {showUsers?.username}
                <div className="text-[#6B911B] absolute inline-flex top-0 right-44">
                  <RiVerifiedBadgeFill />
                </div>
              </h1>
              <h1 className="text-[#00000080]">
                April@gmail.com | <span> +234 701 123 4567</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-base font-sanns text-left">
            Issue Details
          </h1>
          <div>
            <PropUserDe
              id={showUsers?.regno}
              type={showUsers?.type}
              date={showUsers?.date}
            />
          </div>
        </div>
        <div className="border-b space-y-2">
          <h1 className="font-semibold text-base font-sanns text-left">
            Full Description of Issue:
          </h1>
          <p className="text-[#1E1E1EBF] text-left pb-4">
            {" "}
            comprehensive description of the issue, including any steps to
            reproduce if applicable
          </p>
        </div>
        <div className="flex gap-4 items-center border-b py-2">
          <h1 className="font-semibold pr-2 text-base font-sanns text-left text-[#1E1E1E]">
            Documents/links:
          </h1>
          <p className="bg-[#E6E6E6] font-sanns text-[#1E1E1E] px-2 py-1 rounded-md">
            View
          </p>
          <div>
            <FiDownload />
          </div>
        </div>
        <div className="space-y-2 border-b text-left">
          <h1 className="font-semibold text-base font-sanns text-left text-[#1E1E1E]">
            Issue Timeline / History
          </h1>
          <div className="text-[#00000080]">
            <h1 className="">2/1/2024:</h1>
            <p>A log of previous actions or comments related to the issue.</p>
          </div>

          <div className="text-[#00000080]">
            <h1>3/1/2024</h1>
            <p>Any further action taken to resolve the issue</p>
          </div>
          <div className="text-[#00000080]">
            <h1>4/1/2024</h1>
            <p>
              And again the other actions as we keep recording all action taken
              to resolve the issue with the appropriate date
            </p>
          </div>
        </div>
        <div className="space-y-2 text-left">
          <h1 className="font-semibold text-base font-sanns  text-[#1E1E1E]">
            Add Comment / Note
          </h1>
          <p className="text-[#00000080]">
            Admin can add internal comments or note here
          </p>
        </div>
        <div className="lg:flex py-3 gap-3 space-y-4">
          <button className="bg-[#FFFFFF] border-[#6B911B]  border text-[#6B911B] px-3 py-2 rounded">
            Save and Continue Later
          </button>
          <button onClick={() => setMark(true) || setShowUsers(null)} className="bg-[#6B911B]  text-[#FFFFFF] py-2 px-6 rounded">
            Mark As Resolved
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

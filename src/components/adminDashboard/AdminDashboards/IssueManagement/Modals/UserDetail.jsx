import React from "react";
import { FaMarker, FaTimesCircle } from "react-icons/fa";
import face from "../../../../../assets/face.jpeg";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import PropUserDe from "../PropsUserDe";

const UserDetail = ({ setShowUsers, showUsers, date, type, regno }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex right-0 left-0 bottom-0 top-0 items-center justify-center"
      onClick={() => setShowUsers(null)} // optional: click outside to close
    >
      <div
        className="bg-white p-6 text-[#424242] w-2/5 rounded-lg space-y-4 text-center shadow-md"
        onClick={(e) => e.stopPropagation()} // prevent modal from closing on content click
      >
        <div className="flex border-b justify-between items-center">
          <h1 className=" font-semibold text-[#6B911B]">Issues Details</h1>
          <div>
            <FaTimesCircle />
          </div>
        </div>
        <div className="flex gap-2">
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
          <h1 className="font-semibold text-base font-sanns text-left">Issue Details</h1>
          <div>
            <PropUserDe id={showUsers?.regno} type={showUsers?.type} date={showUsers?.date}/>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-base font-sanns text-left">Full Description of Issue:</h1>
          <p className="text-[#1E1E1EBF] text-left"> comprehensive description of the issue, including any steps to reproduce if applicable</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

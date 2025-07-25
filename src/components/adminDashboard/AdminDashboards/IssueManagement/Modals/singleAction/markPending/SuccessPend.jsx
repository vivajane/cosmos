import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoMdCheckmarkCircle } from "react-icons/io";

const SuccessPend = ({setPendingConfirm}) => {
  return (
    <div className="bg-black top-0 flex flex-col justify-center items-center bottom-0 left-0 right-0 fixed ">
      <div className="bg-white p-6 rounded-lg max-h-[90vh] overflow-y-auto space-y-2 shadow-lg w-96">
        <div onClick={setPendingConfirm} className="flex justify-end">
          <FaTimesCircle size={20} />
        </div>
        <div className="flex justify-center py-2 items-center text-[#E68C16]">
            <IoMdCheckmarkCircle size={50}/>
        </div>
        <h1 className="font-sanns text-center font-semibold text-base text-[#1E1E1E]">
          Issue Successfully Pended
        </h1>
        <p className="text-[#00000080] font-sanns text-center font-normal py-2 text-sm">
          You have successfully pended the selected issue
        </p>
      </div>
    </div>
  );
};

export default SuccessPend;

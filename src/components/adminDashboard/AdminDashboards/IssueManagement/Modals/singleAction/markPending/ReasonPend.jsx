import React from "react";
import { FaTimes } from "react-icons/fa";

const ReasonPend = ({setPendingConfirm, setPendReason}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg max-h-[70vh] overflow-y-auto space-y-2 shadow-lg w-1/2">
        <div  className="text-[#1E1E1E80] py-2 flex justify-between items-center">
        
        <h1 className="text-2xl text-[#6B911B] font-medium">Reason for Pending Issues</h1>
        < FaTimes onClick ={setPendReason} size={20} />
        </div>
        <hr />

        <div className="text-base space-y-3 font-semibold">
          <h1>
          Payment Information
          </h1>
          <p className="text-[#1E1E1EBF] font-medium text-sm">Please add reason for pending this issue</p>
        </div>
        <form >
            <textarea placeholder="E.g. ₦45,000" className="border placeholder:text-[#B1B2B0] w-full py-2 rounded-md my-1" name="" id="" cols="30" rows="5"></textarea>
        </form>
        <div className="flex gap-2">
          <button className=" py-2 px-3 w-full border-[#6B911B] border rounded-md text-[#6B911B]">
        Cancel
          </button>
          <button onClick={() => setPendingConfirm(true) || setPendReason(false)} className="bg-[#E68C16] py-2 px-3 w-full border  rounded-md text-[#FFFFFF]">
            Suspend Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReasonPend;

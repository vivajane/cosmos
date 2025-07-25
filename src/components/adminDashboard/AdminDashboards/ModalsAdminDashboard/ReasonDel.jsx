import React from "react";
import { FaTimes } from "react-icons/fa";

const ReasonDel = ({setReasonDelAccount, setDelSuccess}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg max-h-[50vh] overflow-y-auto space-y-2 shadow-lg md:w-1/2">
        <div  className="text-[#1E1E1E80] py-2 flex justify-between items-center">
        
        <h1 className="md:text-2xl text-[#6B911B] font-medium">Reason for deleting Account</h1>
        <FaTimes onClick={setReasonDelAccount}  size={20} />
        </div>
        <hr />

        <div className="text-base space-y-3 font-semibold">
          <h1>
          Payment Information
          </h1>
          <p className="text-[#1E1E1EBF] font-medium text-sm">Please add reason for deleting this account</p>
        </div>
        <form >
            <textarea placeholder="E.g. ₦45,000" className="border placeholder:text-[#B1B2B0] w-full py-2 rounded-md my-1" name="" id="" cols="30" rows="5"></textarea>
        </form>
        <div className="flex gap-2">
          <button className=" py-2 px-3 w-full border-[#6B911B] border rounded-md text-[#6B911B]">
        Cancel
          </button>
          <button onClick={() => setDelSuccess(true) || setReasonDelAccount(false)} className="bg-[#BC332A] py-2 px-3 w-full border text-sm md:text-base rounded-md text-[#FFFFFF]">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReasonDel;

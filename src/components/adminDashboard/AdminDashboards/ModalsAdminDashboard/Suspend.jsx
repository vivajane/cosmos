import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa";

const Suspend = ({setShowSuspendUsers, setShowPleaseSuspendUsers}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg max-h-[50vh] overflow-y-auto space-y-2 shadow-lg md:w-96">
        <div onClick={setShowSuspendUsers} className="text-[#1E1E1E80] flex justify-end">
        <FaTimes  size={20} />
        </div>
        
        <div className="flex justify-center  items-center">
          <FaHourglassStart className="text-[#E68C16]" size={20} />
        </div>

        <div className="text-center py-2">
          <h1>
            Are you sure you want to suspend <br /> the selected User account?
          </h1>
        </div>
        <div>
          <button onClick={() => setShowPleaseSuspendUsers(true)} className="bg-[#E68C16] py-2 px-3 w-full  rounded-md text-[#FFFFFF]">
            Yes, Please Suspend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suspend;

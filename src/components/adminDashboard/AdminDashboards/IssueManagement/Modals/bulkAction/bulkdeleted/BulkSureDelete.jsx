import React from "react";
import { FaTimes } from "react-icons/fa";
import { IoMdWarning } from "react-icons/io"

const BulkDeleteAcct = ({setBulkDelete, setBulkSuccessDel}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg max-h-[50vh] overflow-y-auto space-y-2 shadow-lg w-80 md:w-96">
        <div className="text-[#1E1E1E80] flex justify-end">
        <FaTimes onClick={setBulkDelete}  size={20} />
        </div>
        
        <div className="flex justify-center  items-center">
          <IoMdWarning className="text-[#BC332A]" size={20} />
        </div>

        <div className="text-center py-2">
          <h1>
            Are you sure you want to delete <br /> the selected issues?
          </h1>
        </div>
        <div>
          <button onClick={() => setBulkSuccessDel(true) || setBulkDelete(false)} className="bg-[#BC332A] py-2 px-3 w-full  rounded-md text-[#FFFFFF]">
            Yes, Please Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkDeleteAcct;

import React from "react";
import { CiSearch } from "react-icons/ci";

const IssuePropsOverview = ({name}) => {
  return (
    <div className="flex py-4 justify-between font-bold text-base gap-14 pb-4 items-center">
      <h1>{name}</h1>
      
      <div className="border-[1px] py-1 mt-3 border-[#00000026] flex-grow rounded flex items-center">
        <CiSearch className="text-[#00000080] mr-2" size={20} />
        <input
          type="search"
          name=""
          id=""
          placeholder="    Search..."
          className=" placeholder:text-[#00000080] placeholder:font-medium placeholder:text-base"
        />
      </div>
      <div>
        <input 
          className=" placeholder:text-[#00000080] border-[1px] py-1 mt-3 border-[#00000026]  w- relative rounded flex items-center placeholder:font-medium placeholder:text-base"
          type="text"
          placeholder="  Export"
        />
      </div>
    </div>
  );
};

export default IssuePropsOverview;

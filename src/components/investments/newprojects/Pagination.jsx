import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";

const Pagination = () => {
  return (
    <div className="py-6">
    <div className="flex bg-[#F8F8F8] px-2 py-2 my-2  justify-between items-center">
      <div className="flex gap-2 items-center px-5 rounded-md py-1 border-[1px] border-[#D0D5DD]">
        <div>
          <GrLinkPrevious />
        </div>
        <button>Previous</button>
      </div>
      <div className="flex gap-2 space-x-6 items-center">
        <button className="bg-bgGray py-1 px-3 rounded-md text-white">1</button>
        <button className=" text-[#667085]">2</button>
        <button className=" text-[#667085]">3</button>
        <span className=" text-[#667085]"><BsThreeDots/></span>
        <button className=" text-[#667085]">4</button>
        <button className=" text-[#667085]">5</button>
        <button className=" text-[#667085]">6</button>
        
      </div>
      <div className="flex gap-2 px-5 rounded-md py-1 items-center border-[1px] border-[#D0D5DD]">
        <div>
          <GrLinkNext />
        </div>
        <button>Next</button>
      </div>
    </div>
    </div>
  );
};

export default Pagination;

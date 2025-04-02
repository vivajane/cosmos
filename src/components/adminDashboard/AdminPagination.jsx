import { GrLinkPrevious, GrLinkUp } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";

const AdminPagination = () => {
  return (
    <div className=" mt-3 mb-8 rounded-md">
      <div className="flex  gap-2  py-2 justify-between items-center">
        <div className="flex bg-[#F8F8F8] py-2 px-4 rounded-lg justify-between gap-20 items-center">
          <div className="flex gap-2 items-center px-5 rounded-md py-1 border-[1px] border-[#D0D5DD]">
            <div>
              <GrLinkPrevious />
            </div>
            <button>Previous</button>
          </div>
          <div className="flex gap-2 space-x-1 items-center">
            <button className="bg-bgGray px-4 rounded-md py-2 text-white">
              1
            </button>
            <button className=" text-[#667085] px-4 rounded-md py-2">2</button>
            <button className=" text-[#667085] px-4 rounded-md py-2">3</button>
            <span className=" text-[#667085] px-4 rounded-md py-2">
              <BsThreeDots />
            </span>
            <button className=" text-[#667085] px-4 rounded-md py-2">4</button>
            <button className=" text-[#667085] px-4 rounded-md py-2">5</button>
            <button className=" text-[#667085] px-4 rounded-md py-2">6</button>
          </div>
          <div className="flex bg-white gap-2 px-5 rounded-md py-1 items-center border-[1px] border-[#D0D5DD]">
            <div>
              <GrLinkNext />
            </div>
            <button>Next</button>
          </div>
        </div>
        <div className="py-2 px-4 rounded-lg bg-[#F8F8F8]  ">
        <div className="flex gap-2 bg-white  mx-2 rounded-lg py-1 px-2 items-center border-[1px] border-[#D0D5DD]">
          <div>
            <GrLinkUp />
          </div>
          <button>Bulk Action</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPagination;

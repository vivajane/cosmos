import { CiSearch } from "react-icons/ci";

const AdminIssuePropsOverview = ({ name }) => {
  return (
    <div className=" px-4 rounded-t-xl">
      <div className="flex justify-between py-2 items-center">
        <div className="w-full">
          {" "}
          <h1 className="font-sanns text-[#1E1E1E] text-xl font-medium">
            {name}
          </h1>
        </div>
        <div className="flex gap-4 w-full justify-between items-center">
          <div className="border-[1px] py-1 mt-3 w-96 border-[#00000026] relative rounded flex items-center">
            <CiSearch className="text-[#00000080] mr-2" size={20} />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search..."
              className=" placeholder:text-[#00000080] placeholder:font-medium placeholder:text-base"
            />
          </div>
          <div className="border-[1px] py-1 mt-3 w-1/3  border-[#00000026] relative rounded flex items-center">
            {/* <CiSearch className="text-[#00000080]  mr-2" size={20} /> */}
            <input
              type="search"
              name=""
              id=""
              placeholder="    Extract..."
              className=" placeholder:text-[#00000080] appearance-none placeholder:font-medium placeholder:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIssuePropsOverview;

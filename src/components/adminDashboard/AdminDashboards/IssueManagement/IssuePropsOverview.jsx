import { CiSearch } from "react-icons/ci";

const IssuePropsOverview = ({ name }) => {
  return (
    <div className=" w-full px-4 rounded-t-xl">
      <div className="flex justify-between py-2 items-center">
        <h1 className="font-sanns text-[#1E1E1E] text-xl font-medium">
          {name}
        </h1>
        <div className="border-[1px] py-1 mt-3 border-[#00000026] w-2/4 relative rounded flex items-center">
          <CiSearch className="text-[#00000080] mr-2" size={20} />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search..."
            className=" placeholder:text-[#00000080] placeholder:font-medium placeholder:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default IssuePropsOverview;

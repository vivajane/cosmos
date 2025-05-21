import { CiSearch } from "react-icons/ci";
import instant from "../../../../assets/instant.png"
import ModalIssue from "./Modals/ModalIssue";
import { useState } from "react";
import SingActModal from "./Modals/singleAction/SingActModal";
import MarkAsResolved from "./Modals/singleAction/markResolved/MarkAsResolved";
import SuccessResolve from "./Modals/singleAction/markResolved/SuccessResolve";

const IssuePropsOverview = ({ name }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSingleFilter, setShowSingleFilter] = useState(false);
  const [showResolved, setShowResolved] = useState(false);
  const[successResolve, setSuccessResolve] = useState(false)

  const hideFilter = () => {
    setShowFilter(false);
  };
  const hideSingleFilter = () => {
    setShowSingleFilter(false);
  };
  const hideResolved = () => {
    setShowResolved(false);
  }
  const hideSuccessResolve = () => {
    setSuccessResolve(false)
  }
  return (
    <div className=" w-full px-4 rounded-t-xl">
      <div className="flex justify-between py-2 items-center">
        <h1 className="font-sanns text-[#1E1E1E] text-xl font-medium">
          {name}
        </h1>
        <div className="border-[1px] py-1 mt-3 px-4 justify-between border-[#00000026] w-2/4 relative rounded flex items-center">
          <div className="flex items-center">
            <CiSearch className="text-[#00000080] mr-2" size={20} />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search..."
            className=" placeholder:text-[#00000080] placeholder:font-medium placeholder:text-base"
          />
          </div>
          <div onClick={() => setShowFilter(true)}>
            <img src={instant} alt="instant" />
          </div>
        </div>
      </div>
      {showFilter && <ModalIssue setShowFilter={hideFilter} setShowSingleFilter={setShowSingleFilter}/>}
      {showSingleFilter && <SingActModal setShowResolved={setShowResolved} setShowSingleFilter={hideSingleFilter} />}
      {showResolved && <MarkAsResolved setShowResolved={hideResolved} setSuccessResolve={setSuccessResolve} setShowSingleFilter={hideSingleFilter} />}
      {successResolve && <SuccessResolve setSuccessResolve={hideSuccessResolve}/>}

    </div>
  );
};

export default IssuePropsOverview;

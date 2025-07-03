import { CiSearch } from "react-icons/ci";
import instant from "../../../../assets/instant.png";
import ModalIssue from "./Modals/ModalIssue";
import { useState } from "react";
import SingActModal from "./Modals/singleAction/SingActModal";
import MarkAsResolved from "./Modals/singleAction/markResolved/MarkAsResolved";
import SuccessResolve from "./Modals/singleAction/markResolved/SuccessResolve";
import PendingConfirm from "./Modals/singleAction/markPending/PendingConfirm";
import SuccessPend from "./Modals/singleAction/markPending/SuccessPend";
import ReasonPend from "./Modals/singleAction/markPending/ReasonPend";
import SureDel from "./Modals/singleAction/markDelete/SureDel";
import ReasonDel from "./Modals/singleAction/markDelete/ReasonDel";
import Delete from "./Modals/singleAction/markDelete/Delete";

const IssuePropsOverview = ({name, checkFilterStatus}) => {
  // resolve
  const [showFilter, setShowFilter] = useState(false);
  const [showSingleFilter, setShowSingleFilter] = useState(false);
  const [showResolved, setShowResolved] = useState(false);
  const [successResolve, setSuccessResolve] = useState(false);
  // pending
  const [showPending, setShowPending] = useState(false);
  const [pendReason, setPendReason] = useState(false);
   const [pendingConfirm, setPendingConfirm] = useState(false);
  //  delete
  const [showDel, setShowDel] = useState(false);
  const [reasonDel, setReasonDel] = useState(false);
  const [delSuccess, setDelSuccess] = useState(false);

  // Resolve Issues
  const hideFilter = () => {
    setShowFilter(false);
  };
  const hideSingleFilter = () => {
    setShowSingleFilter(false);
  };
  const hideResolved = () => {
    setShowResolved(false);
  };
  const hideSuccessResolve = () => {
    setSuccessResolve(false);
  };
  // Pending Issues
  const hidePending = () => {
    setShowPending(false);
  };
  const hideReason = () => {
    setPendReason(false);
  };
   const hideConfirm = () => {
    setPendingConfirm(false);
  };
  // delete
  const hideDel = () => {
    setShowDel(false);
  };
  const hideReasonDel = ()=>{
    setReasonDel(false);
  }
  const hideDelSuccess = () => {
    setDelSuccess(false);
  };

  return (
    <div className=" w-full md:px-4 rounded-t-xl">
      <div className="flex md:justify-between gap-8 md:gap-0 py-2 items-center">
        <h1 className="font-sanns text-[#1E1E1E] text-sm md:text-xl font-medium">
          {name}
        </h1>
        <div className="border-[1px] py-1 mt-3 px-4 justify-between border-[#00000026] md:w-2/4 relative rounded flex w-40 items-center">
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
      {/* resolve */}
      {showFilter && (
        <ModalIssue
          setShowFilter={hideFilter}
          setShowSingleFilter={setShowSingleFilter}
          setShowPending={setShowPending}
          checkFilterStatus={checkFilterStatus}
        />
      )}
      {showSingleFilter && (
        <SingActModal
          setShowResolved={setShowResolved}
          setShowSingleFilter={hideSingleFilter}
          setShowPending={setShowPending}
          setShowFilter={setShowFilter}
          setShowDel={setShowDel}
          
        />
      )}
      {showResolved && (
        <MarkAsResolved
          setShowResolved={hideResolved}
          setSuccessResolve={setSuccessResolve}
          setShowSingleFilter={hideSingleFilter}
        />
      )}
      {successResolve && (
        <SuccessResolve setSuccessResolve={hideSuccessResolve} />
      )}
      {/* pending */}
      {showPending && (
        <PendingConfirm
          setShowPending={hidePending}
          setPendReason={setPendReason}
        />
      )}
      {pendReason && (
        <ReasonPend
          // setShowPending={setShowPending}
          setPendReason={hideReason}
          setPendingConfirm={setPendingConfirm}
        />
      )}
      {pendingConfirm && (
        <SuccessPend
          setPendingConfirm={hideConfirm}
          setPendReason={setPendReason}
        />
      )}
      {/* delete */}
      {showDel && <SureDel setShowDel={hideDel} showSingleFilter={setShowSingleFilter} setReasonDel={setReasonDel}  />}
      {reasonDel && <ReasonDel setShowDel={setShowDel} showSingleFilter={setShowSingleFilter} setDelSuccess={setDelSuccess} setReasonDel={hideReasonDel} />}
      {delSuccess && <Delete setDelSuccess={hideDelSuccess} setSingleFilter={setShowSingleFilter} setReasonDel={setReasonDel}/>}
      
      
    </div>
  );
};

export default IssuePropsOverview;

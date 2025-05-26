import { GrLinkPrevious, GrLinkUp } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import BulkAction from "../adminDashboard/AdminDashboards/IssueManagement/Modals/bulkAction/BulkAction"
import SuccessBulk from "./AdminDashboards/IssueManagement/Modals/bulkAction/bulkResolved/BulkSuccess";
import MarkAsResolved from "./AdminDashboards/IssueManagement/Modals/bulkAction/bulkResolved/MarkAsRes";
import BulkSure from "./AdminDashboards/IssueManagement/Modals/bulkAction/bulkpend/BulkSure";
import SuccessBulkPend from "./AdminDashboards/IssueManagement/Modals/bulkAction/bulkpend/BulkPendSuccess";
import BulkDeleteAcct from "./AdminDashboards/IssueManagement/Modals/bulkAction/bulkdeleted/BulkSureDelete";
import BulkSucessModal from "./AdminDashboards/IssueManagement/Modals/bulkAction/bulkdeleted/BulkDeleteSure";

const AdminPagination = () => {
  // resolved issues
  const [showBulk, setShowBulk] = useState(false);
  const [markAsResolved, setMarkAsResolved] = useState(false);
  const [successBulk, setSuccessBulk] = useState(false);
  // pending
  const [bulkPending, setBulkPending] = useState(false)
  const [successBulkPend, setSuccessBulkPend] = useState(false)
  // delete
const [bulkDelete, setBulkDelete] = useState(false);
const [bulkSuccessDel, setBulkSuccessDel] = useState(false);


  const hideBulk = () => { 
    setShowBulk(false);
  };

  const hideMarkAsResolved = () => {
    setMarkAsResolved(false);
  };
  const hideSuccessBulk = () => {
    setSuccessBulk(false);
  };
  // pending

  const hideBulkPending = () => {
    setBulkPending(false);
  };

  const hideSuccessBulkPend = () => {
    setSuccessBulkPend(false);
  };
  // delete

  const hideBulkDelete = () => {
    setBulkDelete(false);
  };

  const hideBulkSuccessDel = () => {
    setBulkSuccessDel(false);
  };

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
          <button onClick={() => setShowBulk(true) || console.log("clicked")}>Bulk Action</button>
        </div>
        </div>
      </div>
      {/* resolve */}
      {showBulk && <BulkAction setBulkPending={setBulkPending} setBulkDelete={setBulkDelete} setMarkAsResolved={setMarkAsResolved} setShowBulk={hideBulk} />}
      {markAsResolved && <MarkAsResolved setShowBulk={setShowBulk} setSuccessBulk={setSuccessBulk} setMarkAsResolved={hideMarkAsResolved} />}
      {successBulk && <SuccessBulk setSuccessBulk={hideSuccessBulk}/>}
      {/* pending */}
      {bulkPending && <BulkSure setBulkPending={hideBulkPending} setSuccessBulkPend={setSuccessBulkPend} setShowBulk={setShowBulk}/>}
      {successBulkPend && <SuccessBulkPend setSuccessBulkPend={hideSuccessBulkPend}/>}
      {/* delete */}
      {bulkDelete && <BulkDeleteAcct  setBulkSuccessDel={setBulkSuccessDel} setBulkDelete={hideBulkDelete} setShowBulk={setShowBulk}/>}
      { bulkSuccessDel && <BulkSucessModal setBulkSuccessDel={hideBulkSuccessDel}/>}
      
  
      
    </div>
  );
};

export default AdminPagination;

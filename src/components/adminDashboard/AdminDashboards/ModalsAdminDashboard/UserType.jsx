import React from "react";

const UserTypeModal = ({setShowActiveUsers, setShowUserType}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className=" bg-white p-6 font-sans  text-[#424242] font-semibold text-[13px] rounded-lg h-auto space-y-3 shadow-lg w-auto">
        <ul className=" space-y-3 cursor-pointer ">
          <li onClick={() => setShowActiveUsers(true) || setShowUserType(false)} className="border-b">All Active Users</li>
          <li className="border-b">All Suspended Users</li>
          <li className="border-b">All Active Users</li>
        </ul>
      </div>
    </div>
  );
};

export default UserTypeModal;




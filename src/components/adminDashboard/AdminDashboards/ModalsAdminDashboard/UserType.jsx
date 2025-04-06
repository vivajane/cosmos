import React from "react";

const UserTypeModal = () => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className=" bg-white p-6 rounded-lg h-auto space-y-3 shadow-lg w-auto">
        <ul>
          <li>All Active Users</li>
          <li>All Suspended Users</li>
          <li>All Active Users</li>
        </ul>
      </div>
    </div>
  );
};

export default UserTypeModal;

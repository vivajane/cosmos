const UserTypeModal = ({ seeStatus, setShowUserType }) => {
  const checkShow = (status) => {
    seeStatus(status);
    setShowUserType(false);
    console.log("clickedff", status);
  };
  return (
    <div onClick={() => setShowUserType(false)} className="bg-[rgba(0,0,0,0.9)] opacity-95  fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className=" bg-white p-6 font-sans  text-[#424242] font-semibold text-[13px] rounded-lg h-auto space-y-3 shadow-lg w-auto">
        <ul className=" space-y-3 cursor-pointer ">
          <li
            onClick={() => {
              checkShow("Active");
            }}
            className="border-b"
          >
            All Active Users
          </li>
          <li onClick={() => checkShow("Suspended") || setShowUserType(false)} className="border-b">
            All Suspended Users
          </li>
          <li onClick={() => checkShow("Pending")} className="border-b">
            All Pending Users
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default UserTypeModal;

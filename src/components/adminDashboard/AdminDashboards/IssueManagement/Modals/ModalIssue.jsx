const ModalIssue = ({
  setShowSingleFilter,
  setShowFilter,
  checkFilterStatus,
  setShowPending,
}) => {
  const seeFilter = (status) => {
    checkFilterStatus(status);
    // setShowFilter(false);
    console.log(status, "clicked");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-white p-6 text-[#424242] rounded-lg h-auto space-y-4 text-center w-48 shadow-md absolute   right-0 bottom-40">
        <div>
          <h1 className=" font-semibold border-b py-3">USER STATUS</h1>

          <ul className="space-y-3 ">
            {
              <li
                onClick={() => seeFilter("Active") || setShowSingleFilter(true) || setShowFilter(false) }
                /*onClick={() => setShowSingleFilter(true) || setShowFilter(false)} */ className={`pt-2 border-b  `}
              >
                All Active Users
              </li>
            }
            <li onClick={() => seeFilter("Pending") || setShowSingleFilter(true) || setShowFilter(false) } className="border-b">
              All Pending Users
            </li>
            <li onClick={() => seeFilter("Suspended") || setShowSingleFilter(true) || setShowFilter(false) } className="border-b">
              All Suspended Users
            </li>
          </ul>
        </div>
        <div>
          <h1 className="border-b font-semibold">ISSUE TYPE</h1>
          <ul className="space-y-3 ">
            <li className="border-b pt-3">Rice Issue</li>
            <li className="border-b">Millet Issue</li>
            <li className="border-b">Yam Issue</li>
            <li className="border-b">Beans Issue</li>
            <li className="border-b">Cocoa Issue</li>
            <li className="border-b">Cassava Issue</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalIssue;

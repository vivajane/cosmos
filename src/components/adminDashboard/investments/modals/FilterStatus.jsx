import React from "react";


const FilterStatus = ({checkStatus, setFilterStatus }) => {
    const showStatus = (status) => {
        checkStatus(status);
        setFilterStatus(false);
        console.log(status);
    };

 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-55 flex bottom-0 right-0 left-0 top-0 items-center justify-center">
      <div className="bg-white p-6 text-[#424242] rounded-lg h-auto space-y-4 text-center w-48 shadow-md absolute">
       
        <div>
          
          <ul className="space-y-3 ">
            
            <li onClick={() => showStatus("success")} className="border-b">Success</li>
            <li onClick={() => showStatus("pending")} className="border-b">Pending</li>
            <li onClick={() => showStatus("completed")} className="border-b">Completed</li>
            <li onClick={() => showStatus("")} className="border-b">Clear filter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterStatus;

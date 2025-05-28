import React from "react";


const ModalFilter = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-85 flex bottom-0 right-0 left-0 top-0 items-center justify-center">
      <div className="bg-white p-6 text-[#424242] rounded-lg h-auto space-y-4 text-center w-48 shadow-md absolute">
       
        <div>
          
          <ul className="space-y-3 ">
            
            <li className="border-b">Active</li>
            <li className="border-b">Pending</li>
            <li className="border-b">Completed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalFilter;

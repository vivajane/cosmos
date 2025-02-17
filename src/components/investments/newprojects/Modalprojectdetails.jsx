import { FaTimes } from "react-icons/fa";
import Button from "../../Button";

const Modalprojectdetails = ({ selected, setSelected }) => {
  if (!selected) return null;
  // console.log("Modal is open with:", selected);

  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{selected.name}</h2>
          <span onClick={setSelected}>
            <FaTimes />
          </span>
        </div>
        <h1 className="text-base font-semibold text-[#1E1E1E]">Project Overview</h1>
        <p>Status: {selected.status}</p>
        <p className="mt-2">Description:  {selected.text}</p>
        

        <h1 className="text-base font-semibold text-[#1E1E1E]">Investment Details{selected.min}</h1>
        <p className="mt-2">Minimum Investment: #{selected.min}</p>
        <p>Expected Roi: {selected.roi}</p>

        <h1 className="text-base font-semibold text-[#1E1E1E]">Key Highlights</h1>
        <p>Opportunity to contribute to sustainable farming</p>
        <p>High ROI within a short time frame</p>
       
        <button className="bg-bgGray text-white w-full my-3 py-1 px-3 rounded">
          Invest Now
        </button>
      </div>
    </div>
  );
};

export default Modalprojectdetails;

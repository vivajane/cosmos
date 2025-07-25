
import { FaTimesCircle } from "react-icons/fa";
import Button from "../../../../../../Button";
import { FaHourglassStart } from "react-icons/fa";

const SureDel = ({setReasonDel, setShowDel, showSingleFilter}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg max-h-[90vh] overflow-y-auto space-y-2 shadow-lg w-96">
        <div onClick={() => setShowDel(false) || showSingleFilter(false)}  className="flex justify-end">
          <FaTimesCircle size={20} />
        </div>
    <div className=" text-center mx-auto  h-8 w-8 ">
        <FaHourglassStart className="text-[#E68C16]" size={20} />
    </div>
        <div>
        <h1 className="font-sanns text-center font-semibold text-base text-[#1E1E1E]">Are you sure you want to delete the selected Issue</h1>
      </div>
      <div>
      
        <button onClick={() => setReasonDel(true) || setShowDel(false)} className="bg-[#BC332A] py-2 px-3 w-full border  rounded-md text-[#FFFFFF]">Yes, Please delete</button>
      </div>
      </div>
      
    </div>
  );
};

export default SureDel;

import { FaTimes } from "react-icons/fa";
import right from "../../../../../../../assets/right.png"

const Delete = ({setDelSuccess, setReasonDel, setSingleFilter}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-4 text-center rounded-lg space-y-3shadow-lg w-96">
        <span 
          className="text-[#1E1E1E80] flex justify-end"
          
        >
          <div onClick={() => setDelSuccess(false) || setReasonDel(false) || setSingleFilter(false) }> <FaTimes size={20} /></div>
         
        </span>
        <div className="flex justify-center py-2 items-center">
          <img src={right} alt="right" />
        </div>
       

        
        <h1 className="text-[#1E1E1E] py-2 font-semibold text-base">
        Accounts Successfully Deleted
        </h1>
        <p className="text-[#00000080] font-normal py-2 text-sm">
        You have deleted the selected user account successfully
        </p>
       
      </div>
    </div>
  );
};

export default Delete;


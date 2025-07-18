
import { FaTimesCircle } from "react-icons/fa";
import Button from "../../../../../Button"
import { FaHourglassStart } from "react-icons/fa";

const UserDetailModal = ({setUserSuccess, setMark}) => {
  return (
    <div  className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-6 rounded-lg max-h-[90vh] overflow-y-auto space-y-2 shadow-lg w-80 md:w-96">
        <div className="flex justify-end">
           <FaTimesCircle onClick={setMark} size={20} />
        </div>
    <div className=" text-center mx-auto  h-8 w-8 ">
        <FaHourglassStart className="text-[#6B911B]" size={20} />
    </div>
        <div>
        <h1 className="font-sanns text-center font-semibold text-base text-[#1E1E1E]">Are you sure you want to resolve the selected Issue?</h1>
      </div>
      <div>
        <Button onClick={() => setUserSuccess(true) || setMark(false)} >Yes, Mark As Resolved</Button>
      </div>
      </div>
      
    </div>
  );
};

export default UserDetailModal;

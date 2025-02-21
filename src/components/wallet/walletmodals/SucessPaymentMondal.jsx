import { FaTimes } from "react-icons/fa";
import Button from "../../Button";
import { NavLink } from "react-router-dom";

const SucessPaymentModal = ({ setAddFunds, setConfirm ,setPaySucess, setGoBack}) => {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="bg-white p-4 text-center rounded-lg space-y-3shadow-lg w-96">
        <div className="flex justify-between pb-2 items-center">
          <h2 className="text-lg text-[#6B911B] font-semibold">
            Confirm Your Payment
          </h2>
          <span onClick={setConfirm}>
            <FaTimes />
          </span>
        </div>
        <hr className="py-2" />
        <h1 className="text-[#1E1E1E] font-semibold text-base">
          Payment Successful!
        </h1>
        <p className="text-[#00000080] font-normal py-2 text-sm">Your payment of ₦502,500 has been successfully processed. Your wallet has been updated.</p>
        <div className="py-3">
          <Button onClick= {() => {setGoBack(); setPaySucess(false)}} variant="submitt" size="lg">
          Go Back to Wallet page
          </Button>
        </div>
      </div>
      
    </div>
  );
};

export default SucessPaymentModal;

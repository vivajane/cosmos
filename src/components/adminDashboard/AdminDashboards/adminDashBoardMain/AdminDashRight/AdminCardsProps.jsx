import React from "react";
// import { text } from "stream/consumers";
import { BsBoxArrowUpRight } from "react-icons/bs";



const AdminCardsProps = ({ title, balance}) => {
  return (
    <div className=" gap-4  border">
      <div className="h-20 w-full p-4 ">
        <div className="flex gap-4 justify-between">
          <p>{title}</p>
          <div><BsBoxArrowUpRight/></div>
        
        </div>
        <p >{balance}</p>
      </div>
    </div>
  );
};

export default AdminCardsProps;

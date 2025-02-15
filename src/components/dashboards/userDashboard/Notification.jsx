import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

const Notification = () => {
  return (
    <div className="py-8">
      <h1 className="font-bold font-sanns text-xl">Notification</h1>
      <div className="flex justify-between items-center pt-4">
        <div className="relative ">
          <select className="appearance-none bg-bgGray px-8 py-1 text-white rounded-lg" name="timeframe" id="timeframe">
            <option value="time">select</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <RiArrowDownSFill />
          </div>
        </div>
        <div className="relative ">
          <select className="appearance-none textt-black border-[1px] border-black px-8 py-1 rounded-lg" name="timeframe" id="timeframe">
            <option value="time">
              All
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <RiArrowDownSFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

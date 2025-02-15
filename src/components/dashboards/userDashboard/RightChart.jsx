import React from "react";

const RightChart = ({ name, percentage, color, img }) => {
  return (
    <div className="mb-2 px-4 "> 
        
      <div className="flex justify-between items-center text-sm font-medium">
        <img src={img} alt="" />
        <div className="w-full space-x-2">
          <span>{name}</span>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${color}`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
        <span className="font-medium  text-sm">{percentage}% to goal</span>
      </div>
    </div>
  );
};

export default RightChart;

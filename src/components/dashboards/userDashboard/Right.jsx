import React from "react";
import RightChart from "./RightChart";
import cocoa from "../../../assets/coke.png";
import coke from "../../../assets/cocoa.png";
import veg from "../../../assets/veg.png";

const Right = ({ name, percentage, color }) => {
  return (
    <div className="mt-14 w-1/2 space-y-8 rounded-2xl pt-11 shadow-xl ">
      <h1 className="text-center">Investments</h1>
      <div>
        {" "}
        <RightChart
          name="Cocoa"
          percentage={74}
          color="bg-red-500"
          img={cocoa}
        />
        ;
        <RightChart
          name="Vegetable"
          percentage={52}
          color="bg-green-500"
          img={veg}
        />
        ;
        <RightChart
          name="Cassava"
          percentage={36}
          color="bg-orange-500"
          img={coke}
        />
        ;
      </div>
    </div>
  );
};

export default Right;

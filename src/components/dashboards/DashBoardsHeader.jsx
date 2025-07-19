import React from "react";
import bell from "../../assets/bell.png";

const DashBoardsHeader = ({ title, text, image }) => {
  return (
    <div>
      <div className="md:flex md:justify-between gap-12 items-center ">
        <div className="py-2">
          <h1 className="font-manrope text-sm md:text-xl font-semibold">{title}</h1>
          <p className="font-sanns pt-2 font-normal text-xs md:text-sm text-[#00000080]">
            {text}
          </p>
        </div>

        <div>
          <img src={image} alt={bell} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default DashBoardsHeader;

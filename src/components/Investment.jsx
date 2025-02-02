import React from "react";
import girl from "../assets/girlempower.png";
import bullets from "../assets/bulletchart.png";


const Investment = () => {
  return (
    <div className="md:flex font-sanns justify-between items-center py-20 gap-20 md:px-16 px-8  lg:px-28">
      <div className="md:hidden block">
        <img src="https://media.istockphoto.com/id/1463403617/photo/female-african-farmer-making-phone-call-while-carrying-basket-of-vegetable.jpg?s=612x612&w=0&k=20&c=SI0Cb4HJ1AW_qJtLrd5BUcZGxyS3P0AZz4jPIjhc0tA=" alt="girl" />
      </div>
      <div className="md:w-1/2">
        <div>
          <h1 className="font-semibold lg:pb-4 text-header py-6 lg:py-0  text-2xl lg:text-4xl">
          Our Investment Strategy
          </h1>
          <p className="text-gray lg:text-lg">
          At Cosmos, we prioritize key investment strategies for the profitability of both investors and farmers
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-header text-xl py-6">
            Key Strategies
          </h1>
          <ul>
            <li className="pb-2 gap-2 text-gray lg:text-lg">
              <span>
                <img className="inline" src={bullets} alt="bullets" />{" "}
              </span>
              Focus on high demand crops
            </li>
            <li className="pb-2 gap-2 text-gray lg:text-lg">
              {" "}
              <span>
                <img className="inline" src={bullets} alt="bullets" />{" "}
              </span>
              Support small-scale farmers and rural communities.
            </li>
            <li className="pb-2 gap-2 text-gray lg:text-lg">
              {" "}
              <span>
                <img className="inline" src={bullets} alt="bullets" />{" "}
              </span>
              Earn competitive returns while making an impact
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        <img src={girl} alt="girl" />
      </div>
    </div>
  );
};

export default Investment;

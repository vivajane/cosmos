import React from "react";
import girl from "../assets/ladycult.png";

const Invest = () => {
  return (
    <div>
      <div className="md:flex font-sanns justify-between items-center py-20 gap-20 md:px-16 px-8 lg:mt-72 md:mt-[660px] mt-[890px] sm:mt-[650px] lg:px-28">
        <div className="md:hidden block">
          <img src={girl} alt="girl" />
        </div>
        <div className="hidden md:block md:w-1/2">
          <img src={girl} alt="girl" />
        </div>
        <div className="md:w-1/2">
          <div>
            <h1 className="font-semibold lg:pb-4 text-header py-6 lg:py-0  text-2xl lg:text-4xl">
              Invest in Agriculture. Grow Your Wealth!
            </h1>
            <p className="text-gray lg:text-lg">
              Support farmers, earn returns, and make a difference today
            </p>
            <button className="bg-bgGray text-sm my-6 sm:text-base w-full border-[1px] border-white rounded-full text-white py-2 px-8">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;

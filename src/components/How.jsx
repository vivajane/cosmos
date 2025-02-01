import React from "react";
import tree from "../assets/tree.png";
import first from "../assets/firstCo.png";
import second from "../assets/secCo.png";
import third from "../assets/three.png";
import four from "../assets/fortCo.png";

const works = [
  {
    id: 1,
    title: "Browse Projects",
    text: "Discover various agricultural projects available for investment",
    image: first,
  },
  {
    id: 2,
    title: "Sign Up to Invest",
    text: "Create an account to start supporting local farmer",
    image: second,
  },
  {
    id: 3,
    title: "Invest in Local Farmers",
    text: "Choose a project and invest in a sustainable future",
    image: third,
  },
  {
    id: 4,
    title: "Earn Returns",
    text: "Receive returns while making a possib;e inpact on communities",
    image: four,
  },
];

const How = () => {
  return (
    <div className="relative bg-colHow font-sanns py-16 px-8 lg:px-28 sm:px-18 ">
      <div className="absolute top-0 left-0">
        <img src={tree} alt="tree" />
      </div>
      <div className="text-center pt-24 pb-8 md-pb-0 md:pt-0 md:py-8  font-semibold text-4xl">
        <h1 className="font-sanns font-semibold text-4xl">How It Works</h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        {works.map((work) => (
          <li className="list-none py-2"  key={work.id}>
            <WorkLoad title={work.title} text={work.text} image={work.image} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default How;
const WorkLoad = ({ title, text, image }) => {
  return (
    <div className="flex items-center py-4 px-2 justify-center gap-4 border-[1px] border-[#E3E3E3] rounded-lg">
      <div>
        <img className="w-auto" src={image} alt="image" />
      </div>
      <div>
        <h1 className="font-sanns font-semibold text-xs md:text-lg lg:text-xl">{title}</h1>
        <p className="font-sanns font-normal text-xs text-[#000000] lg:text-lg">{text}</p>
      </div>
    </div>
  );
};

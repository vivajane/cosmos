import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const navbars = [
  {
    id: 1,
    title: "About Us",
    link: "about",
  },
  {
    id: 2,
    title: "Portfolio",
    link: "portfolio",
  },
  {
    id: 3,
    title: "Testimonials",
    link: "testimonials",
  },
  {
    id: 1,
    title: "Contact Us",
    link: "contact",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const onClickHandler = () => {
    setOpen((open) => !open);
  };
  const onCloseHandler = () => {
    setOpen(false);
  }
  return (
    <header className={`relative font-inter font-sans text-base font-medium justify-between pt-4  ${
      open && "overflow-hidden h-screen"
    }`}>
    <div className={`flex justify-between items-center py-1 bg-header lg:px-28 sm:px-18 px-8 `}>
      <div className="font-sanns text-blacky font-medium text-[28px] sm:[30px] md:text-[40px] lg:text-[48px] leading-[60px]">
        <NavLink to="/">Cosmos</NavLink>
      </div>
      <div className="md:hidden block" onClick={onClickHandler}>
        {open ?  <FaTimes /> : <IoMdMenu /> }
      </div>
      <ul className="md:flex gap-4 hidden">
        {navbars.map((navbar) => (
          <li 
            className="text-blacky font-normal px-2 sm:text-sm lg:text-base"
            key={navbar.id}
          >
            <Navbar navbar={navbar} />
          </li>
        ))}
      </ul>
      <div className="md:flex gap-4 hidden">
        <button className="text-[#6B911B] border-[#6B911B] border-[1px] px-3 py-1 rounded-full">
          Log in
        </button>
        <button className="bg-[#6B911B] px-3 py-1 text-white rounded-full">
          Sign Up
        </button>
      </div>
      
       <ul
          className={`w-full absolute top-16 h-screen gap-6 pt- text-center flex flex-col  mt-4 overflow-hidden ${
            open ? "bg-graybg inset-0 " : "hidden"
          }`}
        >{
          navbars.map((navbar) => (
            <li onClick={onCloseHandler}
              className="text-blacky mt-12 py-8 font-normal px-2 sm:text-sm lg:text-base"
              key={navbar.id}
            >
              <Navbar navbar={navbar} />
            </li>
          ))
        }</ul>
      </div>
    
    </header>
  );
};

export default Header;

const Navbar = ({ navbar }) => {
  return (
    <div>
      <NavLink to={navbar.link}>{navbar.title}</NavLink>
    </div>
  );
};

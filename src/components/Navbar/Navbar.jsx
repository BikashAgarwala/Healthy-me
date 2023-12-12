import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/healthyme.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navActive,SetNavActive] = useState(false)
  return (
    <div className="z-10 relative h-[10vh] max-w-[100vw] flex justify-between items-center px-[7vw] overflow-x-hidden mb-[10vh] md:mb-[10vh] lg:mb-[10vh] xl:mb-0">
      <div className="flex justify-center items-baseline gap-[10px]">
        <img
          src="https://res.cloudinary.com/dnrwlbbbj/image/upload/v1702320663/check/Group_1_d0tqtt.png"
          alt="logo"
          className="h-[45.21px] w-auto "
        />
        <img src={logo} alt="logo" className="h-[65.21px] w-auto " />
      </div>
      <div className="w-auto hidden md:hidden lg:block xl:block">
        <ul className="flex justify-center items-center gap-[47.95px]">
          <NavLink to={"/"}>
            <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
              Home
            </li>
          </NavLink>
          <NavLink to={"/about"}>
            <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
              About Us
            </li>
          </NavLink>
          <NavLink to={"/howtouse"}>
            <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
              How to use
            </li>
          </NavLink>
          <NavLink to={"/login"}>
            <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
              <button
                className="px-4 py-1 text-center text-white rounded-xl text-2xl"
                style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}
              >
                Log In
              </button>
            </li>
          </NavLink>
        </ul>
      </div>
      {
        navActive ? <FaTimes onClick={()=>SetNavActive(false)} className="block md:block lg:hidden xl:hidden"/>:<FaBars onClick={()=>SetNavActive(true)} className="block md:block lg:hidden xl:hidden"/>
      }
      
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "../../assets/paw.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex h-20 justify-center text-white">
      <div className="w-11/12 flex justify-between items-center">
        <div>
          <h2 className="text-5xl text-orange-500">
            Food <span className="text-green-500">King</span>
          </h2>
        </div>

        <div className="flex cursor-pointer ">
          <div className="m-2 text-2xl">Home</div>
          <div className="m-2 text-2xl">About</div>
          <div className="m-2 text-2xl">Contact Us</div>
          <div className="m-2 text-2xl">Services</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

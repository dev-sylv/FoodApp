import React from "react";

const Header = () => {
  return (
    <div className="w-full flex h-20 justify-center text-white">
      <div className="w-11/12 flex justify-between items-center">
        <div>
          <h2 className="text-5xl text-orange-500 cursor-pointer ">
            Food{" "}
            <span className="text-green-500 hover:text-orange-500">King</span>
          </h2>
        </div>

        <div className="flex cursor-pointer ">
          <div className="m-2 text-2xl hover:text-orange-500">Home</div>
          <div className="m-2 text-2xl hover:text-green-500">About</div>
          <div className="m-2 text-2xl hover:text-orange-500">Contact Us</div>
          <div className="m-2 text-2xl hover:text-green-500">Services</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

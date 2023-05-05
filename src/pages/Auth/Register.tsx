import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-screen bg-green-500 flex justify-center items-center">
      <div className="border shadow-2xl py-10 flex flex-col justify-center items-center w-6/12 ">
        <h4 className="text-white font-bold text-4xl">Sign Up</h4>

        <div className="w-80 outline-none rounded-xl h-10 bg-transparent px-5 border-2 text-white">
          <input type="text" placeholder="Enter your name" />
        </div>

        {/* <div className="w-300 bg-transparent h-40 pl-32 border-spacing-x-4 text-white">
          <input type="email" placeholder="Enter a valid email" />
        </div>

        <div className="w-300 bg-transparent h-40 pl-32 border-spacing-x-4 text-white">
          <input
            type="password"
            placeholder="Enter a password you can remember"
          />
        </div>

        <div className="w-300 bg-transparent h-40 pl-32 border-spacing-x-4 text-white">
          <input type="password" placeholder="Confirm Password" />
        </div>

        <div className="bg-orange-500 border-spacing-0 w-320 border-r-4 h-40 text-white font-bold">
          <button>Sign up</button>
        </div>

        <div className="flex justify-center items-center">
          <p className="text-white font-semibold mr-9">
            Already have an account?
          </p>
          <NavLink to="/login-user">
            <b className="text-white cursor-pointer">Log in here</b>
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default Register;

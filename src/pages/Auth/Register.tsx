import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-screen bg-green-500 flex justify-center items-center">
      <div className="border shadow-2xl py-10 flex flex-col justify-center items-center w-6/12">
        <h4 className="text-white font-bold text-4xl mb-5">Sign Up</h4>
        <div className="w-full max-w-xs">
          <form className=" ">
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Enter your password"
              />
              {/* <p className="text-red-500 text-xs italic">
                Please enter your password.
              </p> */}
            </div>

            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Confirm your password"
              />
              {/* <p className="text-red-500 text-xs italic">
                Please enter your password.
              </p> */}
            </div>
            <div className="flex items-center justify-between">
              <button
                className=" w-full bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Sign In
              </button>
            </div>
          </form>
          <p className="text-center text-white mt-5 text-lg">
            Already have an account?{" "}
            <NavLink to="/login-user">
              <span className="cursor-pointer">Login here</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

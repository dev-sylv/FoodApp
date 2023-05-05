import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen bg-green-500 flex justify-center items-center">
      <div className="border shadow-2xl py-10 flex flex-col justify-center items-center w-6/12">
        <h4 className="text-white font-bold text-4xl mb-5">Login</h4>
        <div className="w-full max-w-xs">
          <form className=" ">
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
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-base text-orange-500 hover:text-blue-800"
                href="#">
                Forgot Password?{" "}
                <NavLink to="/forget-password">
                  <span className="text-white cursor-pointer">click here</span>
                </NavLink>
              </a>
            </div>
          </form>
          <p className="text-center text-white mt-5 text-lg">
            Don't have an account?{" "}
            <NavLink to="/register-user">
              <span className="cursor-pointer">Sign up here</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

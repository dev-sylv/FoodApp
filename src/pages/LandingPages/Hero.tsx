import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../../components";

const Hero = () => {
  return (
    <div className="w-full bg-herobg h-screen flex flex-col  items-center">
      <div className="bg-black bg-opacity-75 w-full h-screen flex flex-col  items-center ">
        <Header />
        <div className="w-6/12 h-64  flex justify-center items-center flex-col mt-40">
          <h1 className="text-7xl text-white w-full ">
            Fastest <span className="text-orange-500">Food</span> Delivery
          </h1>
          <p className="w-11/12 flex text-3xl text-center mt-5 mb-5 text-white">
            Fast food delivery is all about speed, quality, and convenience.
            It's the perfect solution
          </p>
          <div className="mt-10 flex w-80 justify-around">
            <NavLink to="/register-user">
              <div>
                <button className="bg-orange-500 text-white w-32 h-12">
                  Sign Up
                </button>
              </div>
            </NavLink>

            <NavLink to="/login-user">
              <div>
                <button className="bg-green-500 text-white w-32 h-12">
                  Login
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

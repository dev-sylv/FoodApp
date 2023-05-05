import React from "react";
import { NavLink } from "react-router-dom";

const Verification = () => {
  return (
    <div>
      <div className="w-full h-screen  flex justify-center items-center">
        <div className="w-2/5 flex justify-center items-center shadow-2xl bg-white h-96">
          <div className="w-4/5 flex items-center flex-col h-64">
            <h1 className="text-green-500">
              Food <span className="text-orange-500">King</span>
            </h1>
            <h3 className="mt-5 text-2xl text-green-500 text-center">
              Congratulations, your account has been verified 💯🔴
            </h3>
            <p className="text-center mt-5 text-xl">
              You can now access all of the features and benefits available to
              verified users.{" "}
              <span className="text-orange-500">
                {" "}
                Log in to your account to get started 💙{" "}
              </span>
            </p>
            <NavLink to="/login-user">
              <button className="text-white outline-none border-none mt-5 h-30 w-32 bg-green-500 hover:text-green-500 hover:bg-transparent hover:outline-green-500 ">
                Login
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;

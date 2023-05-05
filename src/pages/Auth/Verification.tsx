import React from "react";

const Verification = () => {
  return (
    <div>
      <div className="w-full h-screen  flex justify-center items-center">
        <div className="w-2/5 flex justify-center items-center shadow-2xl bg-white h-72">
          <div className="w-4/5 flex items-center flex-col h-64">
            <h1 className="text-green-500">
              Food <span className="text-orange-500">King</span>
            </h1>
            <h3 className="mt-5 text-2xl text-green-500 text-center">
              Congratulations, your account has been verified 💯🔴
            </h3>
            <p className="text-center mt-5">
              You can now access all of the features and benefits available to
              verified users.{" "}
              <span className="text-orange-500">
                {" "}
                Log in to your account to get started 💙{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;

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
            <h3 className="mt-5 text-2xl text-green-500">
              Please Confirm your Email 💯🔴
            </h3>
            <p className="text-center mt-5">
              An Email has been sent to the{" "}
              <span className="text-orange-500">Email Address</span> you used to
              register an Account for this site, Please go check it and{" "}
              <span className="text-orange-500">follow the Link</span> to
              complete your{" "}
              <span className="text-orange-500">Registeration</span> 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;

import React from "react";

const RedirectToEmail = () => {
  return (
    <div className="w-full h-screen bg-orange-500 flex justify-center items-center">
      <div className="w-3/5 flex justify-center items-center shadow-2xl bg-white h-64">
        <div className="w-3/5 flex items-center bg-red-300 flex-col h-64">
          <h1 className="">Food King</h1>
          <h3 className="mt-5 ">Please Confirm your Email 💯🔴</h3>
          <p className="text-center mt-5">
            An Email has been sent to the <span>Email Address</span> you used to
            register an Account for this site, Please go check it and{" "}
            <span>follow the Link</span> to complete your{" "}
            <span>Registeration</span> 💙
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedirectToEmail;

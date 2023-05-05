import React from "react";

const ForgotPassword = () => {
  return (
    <div>
      <div className="w-full h-screen bg-green-500 flex justify-center items-center">
        <div className="border shadow-2xl py-10 flex flex-col justify-center items-center w-6/12">
          <h4 className="text-white font-bold text-4xl mb-5">Reset password</h4>
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

              <div className="flex items-center justify-between">
                <button
                  className="bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button">
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

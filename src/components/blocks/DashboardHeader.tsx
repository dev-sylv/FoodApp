import React from "react";
import { UseAppDispatch, useAppSelector } from "../../Global/Store";
import { logout } from "../../Global/ReduxState";
import { Navigate, useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state?.user);
  console.log("This is the logged in user: ", user);
  return (
    <div className="w-full h-20 fixed flex justify-end">
      <div className="w-4/5 bg-orange-500 flex justify-around items-center">
        <h2 className="text-4xl font-serif italic text-white">
          Welcome {user?.name} ,
        </h2>
        <button
          onClick={() => {
            // dispatch(logout());
            navigate("/");
          }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;

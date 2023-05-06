import React from "react";
import { useAppSelector } from "../../Global/Store";

const DashboardHeader = () => {
  const user = useAppSelector((state) => state?.user);
  console.log("This is the logged in user: ", user);
  return (
    <div className="w-full h-20 fixed flex justify-end">
      <div className="w-4/5 bg-orange-500 flex items-center">
        <h2 className="text-4xl font-serif italic">Welcome {user?.name} ,</h2>
      </div>
    </div>
  );
};

export default DashboardHeader;

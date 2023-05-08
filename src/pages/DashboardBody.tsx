import React from "react";
import { Barchat, PieChart } from "../charts";

const DashboardBody = () => {
  return (
    <div className="w-[calc(100vw - 16rem)] h-screen flex justify-end ">
      <div className="w-4/5 bg-green-500 pt-20 flex justify-around items-center">
        <div className="bg-white w-2/5 h-2/4">
          <PieChart />
        </div>
        <div className="bg-white w-2/4 h-1/2">
          <Barchat />
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;

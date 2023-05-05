import React from "react";
import { DashboardHeader, DashboardSidebar } from "../../blocks";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='grow'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

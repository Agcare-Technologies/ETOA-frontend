import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className='w-60 bg-gray-200 h-screen'>
      <div>
        <Link to={"/home"}>Home</Link>
      </div>
      <div>
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
      <div>
        <Link to={"/training"}>Training</Link>
      </div>
      <div>
        <Link to={"/policy"}>User Policy</Link>
      </div>
      <div>
        <Link to={"/quiz"}>Quiz</Link>
      </div>
      <div>
        <Link to={"/profile"}>Profile</Link>
      </div>
    </div>
  );
};

export default SideBar;

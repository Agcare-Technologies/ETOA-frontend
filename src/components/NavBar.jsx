import React from "react";
import DropDown from "./DropDown";

const NavBar = () => {
  return (
    <div className='h-14 bg-green-500 w-full flex justify-between items-center'>
      <div>
        <img src='/assets/safex.png' className='h-20 mx-4' alt='' />
      </div>
      <div className='mx-4'>
        <DropDown /> {/* Use the DropdownMenu component here */}
      </div>
    </div>
  );
};

export default NavBar;

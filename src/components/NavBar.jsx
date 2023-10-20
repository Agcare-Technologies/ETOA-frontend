import React from "react";

const NavBar = () => {
  return (
    <div className='h-14 bg-green-500 w-full flex justify-between items-center'>
      <div>
        <img src='/assets/safex.png' className='h-20 mx-4' alt='' />
      </div>
      <div>
        <img
          width='30'
          height='30'
          src='https://img.icons8.com/ios-filled/50/FFFFFF/user-male-circle.png'
          alt='user-male-circle'
          className='mx-4'
        />
      </div>
    </div>
  );
};

export default NavBar;

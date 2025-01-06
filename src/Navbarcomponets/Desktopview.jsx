import React from 'react';

const Desktopview = () => {
  return (
    <div className=' absolute right-6'>
      <ul className='flex gap-8 '>
        <li className='hover:bg-white hover:text-black font-semibold text-xl cursor-pointer p-2 rounded'>Home</li>
        <li className='hover:bg-white hover:text-black font-semibold text-xl cursor-pointer p-2 rounded'>Contact</li>
        <li className='hover:bg-white hover:text-black font-semibold text-xl cursor-pointer p-2 rounded'>Services</li>
        <li className='hover:bg-white hover:text-black font-semibold text-xl cursor-pointer p-2 rounded'>Reviews</li>
        <li className='hover:bg-white hover:text-black font-semibold text-xl cursor-pointer p-2 rounded'>About</li>
      </ul>
    </div>
  );
}

export default Desktopview;

import React from 'react';
import logo from "../images/Logo.png";

const Mobileview = () => {
  return (
    <>
    <div className='flex justify-evenly'>
      <img src={logo} alt="" className="h-[100px] rounded-full absolute top-2 left-6 sm:left-10"  />
    <h1 className="text-center text-2xl sm:text-4xl  font-bold mt-8 font-sans sm:absolute sm:left-[155px] sm:top-2"><a className="text-yellow-500 font-serif">K</a>S Design</h1>
    </div>
    </>
  );
}

export default Mobileview;

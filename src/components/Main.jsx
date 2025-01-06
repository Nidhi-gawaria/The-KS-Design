import React from "react";
import image from "../images/Digital marketing.jpg";

const Main = () => {
  return (
    <div className="m-8 flex flex-col justify-center text-center font-sans sm:flex-row gap-6">
      <div className="mt-5 text-center flex flex-col justify-center items-center m-10">
        <h2 className="font-medium  text-xl sm:p-8">
          We ensure your great
          <a className="text-yellow-600 text-xl capitalize "> social media </a>
          presence on every platform possible
        </h2>
        <p className="mt-8 font-semibold">
          Digital marketting in this new era is crucial make your presence with
          us . we will help you out in every possible approach from <a className="text-yellow-600 uppercase text-xl  ">Social media marketting </a>
           to creating <a className="text-yellow-600 uppercase text-xl  ">your own website</a>
        </p>
        <button className="mt-5 mb-3 border-2 border-transparent bg-yellow-700 p-2 rounded-lg text-white font-semibold  hover:bg-blue-700">Contact us</button>
      </div>
      <img src={image} alt="" className="mt-8 sm:h-[60vh] rounded" />
    </div>
  );
};

export default Main;

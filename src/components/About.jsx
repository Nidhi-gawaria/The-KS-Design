import React from 'react';
import tick from "../images/arrow2.png";

const About = () => {
  return (
    <div id='about'>
      <h1 className='text-3xl text-center mt-14 font-bold mb-10 '>About Us </h1>
      <p className='m-10 text-xl capitalize text-center'>
        The KS design is a social media marketing agency ,
        which manages your social media platforms and also create 
        website for your business at an affordable rate
      </p>
      <div className='text-center m-8'>
        <h2 className='text-2xl font-semibold'>We Offer : </h2>
        <ul className='text-xl mt-5 items-start text-left ml-20  sm:ml-[30rem] space-y-3'>
          <li className='flex gap-2'><img src={tick} alt="" className='h-[32px]' />
            Social Media Marketing </li>
            <li className='flex gap-2'><img src={tick} alt="" className='h-[32px]' />
            Graphic Designing</li>
            <li className='flex gap-2'><img src={tick} alt="" className='h-[32px]' />
            Video Editing</li>
            <li className='flex gap-2'><img src={tick} alt="" className='h-[32px]' />
            S.E.O</li>
            <li className='flex gap-2'><img src={tick} alt="" className='h-[32px]' />
            Website Development</li>
        </ul>
      </div>
      <div className='m-8 mt-10 flex flex-col items-center'>
        <h1 className='font-bold text-xl text-center'>Make your business or yourself <a className='text-green-700 text-2xl'> visible online </a> 
          with us.
        </h1>
        <button className="mt-5 mb-3 border-2 border-transparent bg-yellow-700 p-2 rounded-lg text-white font-semibold  hover:bg-blue-700">Our Services</button>
      </div>
    </div>
  );
}

export default About;

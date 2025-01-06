import React from 'react';
import insta from "../images/icons8-instagram-48.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtubenew.jpg";

const Footer = () => {
  return (
    <div>
      <h2 className='m-10  text-center capitalize'>Remember Social Media is a ongoing and longlasting field 
        which should be manitained in the best way for your growth.
      </h2>
      <div className='flex justify-center items-center gap-4 mb-5'>
        <img src={insta} alt="" className='h-[44px]' />
        <img src={facebook} alt="" className='h-[34px] rounded' />
        <img src={youtube} alt="" className='h-[34px] w-[42px] rounded-lg' />
      </div>

    </div>
  );
}

export default Footer;

import React from 'react';
import openbtn from '../images/dropdown.png';

const Mobilebutton = ({onClick}) => {
  return (
    <div>
      <button onClick={onClick}>
        <img src={openbtn} alt=""  className='h-[32px] absolute top-8 right-6'/>
      </button>
    </div>
  );
}

export default Mobilebutton;

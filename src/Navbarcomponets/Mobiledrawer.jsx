import React from 'react';
import close from '../images/close.jpg';

const Mobiledrawer = ({isOpen , onClose }) => {
  return (
    <div>
      <div className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-[60vw] bg-white text-black transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
         <button className="absolute right-8 top-4 p-3" onClick={onClose}>
           <img src={close} alt="" className='h-[50px] mix-blend-multiply ' />
          
        </button>
        <ul className="flex flex-col justify-center items-center space-y-4">
          <li className="text-3xl hover:text-blue-700 cursor-pointer  hover:font-semibold" onClick={onClose}>
           <a href='/'>Home</a>
          </li>
          <li className="text-3xl hover:text-blue-700 cursor-pointer hover:font-semibold" onClick={onClose}>
            <a href='#about'>About </a>
          </li>
          <li className="text-3xl hover:text-blue-700 cursor-pointer hover:font-semibold" onClick={onClose}>
           <a href='/contact'>Contact us </a> 
          </li>
          <li className="text-3xl hover:text-blue-700 cursor-pointer hover:font-semibold" onClick={onClose}>
            Our services
          </li>
          <li className="text-3xl hover:text-blue-700 cursor-pointer hover:font-semibold" onClick={onClose}>
            Reviews
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default Mobiledrawer;

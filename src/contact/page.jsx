import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className='mt-7 font-sans'>
        <h1 className='text-center text-3xl font-semibold'>
          CONTACT US
        </h1>
        <h2 className='text-center mt-4 text-xl'><a className='text-yellow-700 font-semibold sm:text-2xl'>Message</a> us on  </h2>
        <h3 className='text-center mt-2'>Email : <a></a></h3>
        <div>
          <h1 className='m-10 text-xl text-center'>For getting our servies or contact us fill this form : </h1>
          <form className='m-16 flex flex-col gap-2 items-center'>
          <input type="text" placeholder='Your Name' className='border-2 border-black p-2 sm:w-[45vw] rounded-md w-[60vw]' />
          <input type="email" placeholder='Your Email' className='border-2 border-black p-2 sm:w-[45vw] rounded-md w-[60vw]' />
          <textarea name="message" id="message" placeholder='Your message' className='border-2 border-black sm:w-[45vw] h-[20vh] p-2  w-[60vw] rounded-md'>
          </textarea>
          <button type='submit' className='bg-yellow-700 w-[80px] rounded p-2 text-white font-semibold mt-2 hover:bg-blue-700'>SEND</button>
          </form>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div>
      <Navbar/>
      <div className='mt-5'>
        <h1 className='text-center text-3xl sm:text-4xl'>Our Services</h1>
        <p className='m-10 font-semibold p-5 text-2xl text-center '>We provide many services for <a className='text-yellow-700'>social media management</a>  : </p>
        <div className='flex flex-wrap m-14 ml-[125px]'>
          <div className='m-10 flex flex-col items-center text-center border-4 border-transparent bg-black text-white p-4 rounded justify-center w-[20vw]'>
            <h1 className='text-2xl text-yellow-600 p-2 font-semibold'>Social Media management </h1>
            <p>In todays date social media management is crucial for growth of your business 
              or your self. Get this services through us to manage your social media in the best way possible.

            </p>
          </div>
          <div className='m-10 flex flex-col items-center text-center border-4 border-transparent bg-black text-white p-4 rounded justify-center w-[20vw]'>
            <h1 className='text-2xl text-yellow-600 p-2 font-semibold'>Graphic Designing </h1>
            <p>Graphic designing is crucial for making your posts and profile more beautiful and eye 
              catching. Make your posts more beautiful and according to content with us.

            </p>
          </div>
          <div className='m-10 flex flex-col items-center text-center border-4 border-transparent bg-black text-white p-4 rounded justify-center w-[20vw]'>
            <h1 className='text-2xl text-yellow-600 p-2 font-semibold'>Video Editor  </h1>
            <p>In todays world we all know the power of video editing most of our audience came from their 
              so for your profiles we provide video editing. Make yourself big with every step.          </p>
          </div>
          <div className='m-10 flex flex-col items-center text-center border-4 border-transparent bg-black text-white p-4 rounded justify-center w-[20vw]'>
            <h1 className='text-2xl text-yellow-600 p-2 font-semibold'>Website development  </h1>
            <p>According to your needs if you need a website you are free to say us 
              we provide the service of website desiging as well as maintaining it at a 
              resonable price.

            </p>
          </div>
          <div className='m-10 flex flex-col items-center text-center border-4 border-transparent bg-black text-white p-4 rounded justify-center w-[20vw]'>
            <h1 className='text-2xl text-yellow-600 p-2 font-semibold'>Search Engine Optimisation </h1>
            <p>Ranking on any platform is crucial so we also provide you with the sevices 
              of SEO search engine optimisation for people to notice you first. </p>
          </div>
        </div>
        <h2 className='m-10 text-center text-xl cursor-pointer'>For more info <a className='underline text-blue-800 font-semibold capitalize'>contact us</a></h2>
      </div>
      <Footer/>
    </div>
  );
}

export default Services;

import React from 'react'
import { UserIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
  <>
    <div className='container flex flex-col md:flex-row text-center md:text-left md:py-20 py-12 mx-auto justify-center items-center gap-10 md:gap-30'>
      <div className='right w-48 md:w-64'>
        <img src="images/image.jpg" alt="" srcSet="" className='rounded-lg object-cover border-2 border-purple-400'  />
      </div>
      <div className='left'>
         <h1 className='font-semibold text-[18px] mb-2'>Hi, I'm <span className='text-purple-400'>Gauri Kumari</span></h1>
      <h2 className='text-3xl font-bold'>Frontend Developer</h2>
      <p className='text-gray-300 max-w-xl mx-auto mt-4'>I am BCA graduate and Frontend Developer passionate about creating modern, responsive, and user-friendly web applications with React , Javascript, and tailwind CSS.</p>

      <div className='mt-5 flex flex-col sm:flex-row justify-center md:justify-start gap-3'>
      <a href='/resume.pdf' target='_blank' rel='noreferrer' className='bg-transparent border border-purple-400 text-purple-300  px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white mx-4'>Resume</a>
      <a href='https://github.com/gauri-kumari-creator' target='_blank' rel='noreferrer' className='inline-flex gap-2 bg-transparent  border border-purple-400 text-purple-300 sm:flex-row justify-center  px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white'><UserIcon className='h-5 w-5'/>GitHub</a>
      </div>
      </div>
    </div>
    <div className='border-b border-purple-400 mx-5 mb-10 md:mx-20 mt-8'></div>
</>
  ) 
}

export default Hero

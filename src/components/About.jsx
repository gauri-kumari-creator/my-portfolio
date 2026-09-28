import React from 'react'

const About = () => {
  return (
    <>
    <section id='about'>
  <div className='container flex flex-col md:flex-row gap-0 md:gap-30 justify-center items-center'> 
    <div className='right'> 
        <div className='text-center py-6 md:py-16 '> 
      <h1 className='text-3xl font-bold text-center'>About me</h1>
      <div className='w-50 h-1 bg-purple-400/30 mx-auto mt-3'></div>
      <div className='mt-12 p-8 rounded-xl border border-purple-400/30 bg-white/5 py-16'>  
      <p className='text-gray-300 leading-8 max-w-xl mx-auto text-center md:mt-5'>I'm a BCA graduate and Frontend Developer interested in creating modern, responsive and user-friendly web applications using HTML, CSS, JavaScript, React, and Tailwind CSS. I'm also learning backend technologies and continuously improving my development skills</p>
    </div>
    </div> 
    </div>
    <div className='md:w-53 w-48 rounded-lg object-cover border-2 border-purple-400 md:mt-5'>
      <img src="/images/gauri.jpg" alt="" srcSet="" />
    </div>
  </div>
 <div className='border-b border-purple-400 md:mb-10 md:mx-20 mx-5 md:mt-10 mt-21'></div>
 </section>
    </>
  )
}
export default About

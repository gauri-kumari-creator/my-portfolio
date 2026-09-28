import React from 'react'

const Contact = () => {
  return (
    <>
    <section id='contact'>
    <div className='text-center py-16'>
      <h1 className='text-3xl font-bold text-center'>Contact Me</h1>
       <div className='w-50 h-1 bg-purple-400/30 mx-auto mt-5'></div>
      <p className='text-gray-300 max-w-2xl mx-auto mt-5'>I'm open to new opportunities and would love to connect. Feel free to reach out me </p>
      <div className='flex gap-3 justify-center'>
        <a href='mailto:gk572877@gmail.com' className='text-blue-600 hover:underline'>gk572877@gmail.com</a>
        <a href='github url' target='_blank' rel='nopener noreferrer' className='hover:text-purple-400 transition'>GitHub</a>
      </div>
    </div>
    </section>
    </>
  )
}

export default Contact

import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row justify-around bg-[#181842] shadow-md px-8 py-6'> 
        <h2 className='text-xl font-bold mb-4 md:mb-0'>Gauri Kumari's Portfolio</h2>

        <div className='flex flex-wrap justify-center gap-4 md:gap-10'>
        <a className=' hover:text-blue-600' href='#home'>Home</a>
        <a className=' hover:text-blue-600' href='#about'>About</a>
        <a className=' hover:text-blue-600' href='#skills'>Skills</a>
        <a className=' hover:text-blue-600' href='#projects'>Projects</a>
        <a className=' hover:text-blue-600' href='#contact'>Contact</a>
        
        </div>
    </nav>
  )
}

export default Navbar

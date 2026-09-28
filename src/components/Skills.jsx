import React from 'react'

const Skills = () => {
  return (
    <>
    <section id='skills'>
    <div className='text-center py-16'>
      <h1 className='text-3xl font-bold text-center mb-5 mt-8'>Skills</h1>
      <div className='w-50 h-1 bg-purple-400/30 mx-auto'></div>

      <div className='max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 '>
        <div className='border border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 p-6 rounded-lg text-center transition font-semibold '>HTML</div>
        <div className='border border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 p-6 rounded-lg text-center transition font-semibold'>CSS</div>
        <div className='border border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 p-6 rounded-lg text-center transition font-semibold'>JavaScirpt</div>
        <div className='border border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 p-6 rounded-lg text-center transition font-semibold'>React</div>
        <div className='border border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 p-6 rounded-lg text-center transition font-semibold'>Tailwind CSS</div>
        <div className='border border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 p-6 rounded-lg text-center transition font-semibold'>Node.js</div>
        <div className='border border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 p-6 rounded-lg text-center transition font-semibold'>Express.js</div>
        <div className='border border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 p-6 rounded-lg text-center transition font-semibold'>MongoDB</div>
        <div className='border border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 p-6 rounded-lg text-center transition font-semibold'>Git & GitHub</div>
      </div>
    </div>
    <div className='border-b border-purple-400 mb-10 mx-5 md:mx-20 mt-10'></div>
    </section>
    </>
  )
}

export default Skills

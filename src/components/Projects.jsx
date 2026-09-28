import React from 'react'

const Projects = () => {
  return (
    <>
    <section id='projects'>
    <div>
      <h1 className='text-3xl font-bold text-center mb-5 mt-35'>My Projects</h1>
       <div className='w-50 h-1 bg-purple-400/30 mx-auto'></div>
      <div className='max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 mt-15'>
        <div className='border p-6 rounded-lg text-center border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 shadow-lg'>
          <img src="/images/netflix.jpg" alt="" srcSet="" className='w-full h-48 object-cover rounded-lg' />
            <h2 className='text-xl font-bold '>Netflix Clone</h2>
            <p className='text-gray-300 mt-3'>A Netflix-inspired website built with HTML and CSS featuring a movie-focused interface and modern layout</p>
        </div>
        <div className='border p-6 rounded-lg text-center border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 shadow-lg'>
           <img src="/images/Spotify.jpg" alt="" srcSet="" className='w-full h-48 object-cover rounded-lg' />
            <h2 className='text-xl font-bold'>Spotify Clone</h2>
            <p className='text-gray-300 mt-3'>A spotify-inspired music player built with HTML, CSS, and JavaScript, featuring music playback and player controls</p>
        </div>
        <div className='border p-6 rounded-lg text-center border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 shadow-lg'>
           <img src="/images/xtwiter.jpg" alt="" srcSet="" className='w-full h-48 object-cover rounded-lg' />
            <h2 className='text-xl font-bold'>X.com(Twiter)</h2> 
            <p className='text-gray-300 mt-3'>A social media interface inspired by X(Twiter), built using HTML and tailwind CSS</p>
        </div>
        <div className='border p-6 rounded-lg text-center border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 shadow-lg'>
           <img src="/images/todo.jpg" alt="" srcSet="" className='w-full h-48 object-cover rounded-lg' />
            <h2 className='text-xl font-bold'>Todo App</h2>
            <p className='text-gray-300 mt-3'>A responsive Todo application built with React tha allows users to add, manage, complete, and delete tasks, with Local Storage used to persist task in the browser.</p>
        </div>
        <div className='border p-6 rounded-lg text-center border-purple-400/30 hover:border-purple-500/60 hover:-translate-y-1 shadow-lg'>
          <img src="/images/pass.jpg" alt="" srcSet="" className='w-full h-48 object-cover rounded-lg' />
            <h2 className='text-xl font-bold'>Password Manager</h2>
            <p className='text-gray-300 mt-3'>A responsive full-stack password manager that allows users to securely save, view, copy, and manage their passwords, with a frontend, backend, and database for storing password data.</p>
        </div>
      </div>
    </div>
     <div className='border-b border-purple-400 mb-10 mx-5 md:mx-20 mt-25'></div>
     </section>
    </>
  )
}

export default Projects

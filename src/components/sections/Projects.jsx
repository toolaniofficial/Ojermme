import React from 'react'
import Reveal from '../Reveal'

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
        <div className='max-w-5xl mx-auto px-4'>

            <Reveal><h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Featured Projects</h2></Reveal>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Reveal>
                    <div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
                        <h3 className='text-xl font-bold mb-2'>Cloud Platform</h3>
                        <p className='text-gray-400 mb-4'>
                            Scalable cloud infrasture management with real-time monitorin and automated scaling.
                        </p>
                        <div>
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) =>  (
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 cursor-pointer rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition'>
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <a href="" className='bg-blue-700 px-3 py-1 rounded text-blue-200 hover:text-blue-300 transition-colors'>View Project</a>
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
                        <h3 className='text-xl font-bold mb-2'>Frontend Developer</h3>
                        <p className='text-gray-400 mb-4'>
                            Focused on building the visual and interactive parts of websites and web applications — what users see and interact with. They ensure responsiveness, performance, and a seamless user experience across devices and browsers.
                        </p>
                        <div>
                            {["HTML", "Tailwindcss", "Typescript", "React", "Vue"].map((tech, key) =>  (
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 cursor-pointer rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition'>
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <a href="" className='bg-blue-700 px-3 py-1 rounded text-blue-200 hover:text-blue-300 transition-colors'>View Project</a>
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
                        <h3 className='text-xl font-bold mb-2'>Backend Developer</h3>
                        <p className='text-gray-400 mb-4'>
                            A backend developer builds and maintains the server, databases, and application logic that power the frontend. They handle authentication, API creation, database operations, and ensure secure, efficient data handling.
                        </p>
                        <div>
                            {["HTML", "Tailwindcss", "Typescript", "React", "Vue"].map((tech, key) =>  (
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 cursor-pointer rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition'>
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <a href="" className='bg-blue-700 px-3 py-1 rounded text-blue-200 hover:text-blue-300 transition-colors'>View Project</a>
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
                        <h3 className='text-xl font-bold mb-2'>Full-stack Developer</h3>
                        <p className='text-gray-400 mb-4'>
                            Full stack developers work on both the frontend and backend of web applications. They bridge the gap between the user experience and the server-side logic, often handling entire projects or working closely with designers and engineers.
                        </p>
                        <div>
                            {["HTML", "Tailwindcss", "Typescript", "React", "Vue"].map((tech, key) =>  (
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 cursor-pointer rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition'>
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <a href="" className='bg-blue-700 px-3 py-1 rounded text-blue-200 hover:text-blue-300 transition-colors'>View Project</a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
  )
}

export default Projects
import React from 'react'
import Reveal from '../Reveal'

const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
        <div className='text-center z-10 px-4'>
            <Reveal><h1 className='text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 leading-right bg-clip-text text-transparent'>
                Hello, I`M Ajasegun John
            </h1></Reveal>
            <Reveal><p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>I build powerful web apps from start to finish — front-end to back-end, I make ideas come to life online.</p></Reveal>

            <div className='flex justify-center space-x-4'>
                <Reveal>
                    <a href="#projects" className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59, 130, 246, 0.4)]'>
                        View Projects
                    </a>
                </Reveal>
                <Reveal>
                    <a href="#contact" className='border border-blue-500/50 text-blue py-3 px-6 rounded font-medium transition-all duration-100 hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10'>
                        Contact Me
                    </a>
                </Reveal>
            </div>
        </div>
    </section>
  )
}

export default Home
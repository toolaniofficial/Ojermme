import React from 'react'
import Reveal from '../Reveal'

const About = () => {

    const frontendSkills = ['React', 'Vite', 'Vue', 'Typescript', 'Tailwindcss', 'Bootstrap CSS', 'Angual', 'Svelte', 'Jest', 'Axios', 'Zucstand', 'Framer Motion']
    const backendSkills = ['Node.js', 'Python', 'Laravel', 'AWS', 'MongoDB', 'GraphQL', 'MYSQL', 'Go', 'Java', '.NET', 'REST', 'Websockets', 'OAuth', 'Docker', 'Vercel' ]

  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
        <div className='max-w-3xl mx-auto px-4'>
            <Reveal>
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>About Me</h2>
            </Reveal>

            <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
                <Reveal>
                    <p className='text-gray-300 mb-6'>
                    I'm a passionate full stack developer who brings ideas to life with clean code, creative thinking, and real results. From sleek, user-friendly interfaces to powerful backend systems, I build complete web solutions that work beautifully. I’m always learning, always building, and always ready to take on new challenges. Whether you're here to collaborate, hire, or get inspired—you're in the right place.
                    </p>
                </Reveal>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <Reveal>
                        <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                            <div className='flex flex-wrap gap-2'>
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 cursor-pointer rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'>Backend</h3>
                            <div className='flex flex-wrap gap-2'>
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 cursor-pointer rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>  
                </div>
            </div>
            <div className='grid grid-cols md:grid-cols-2 gap-6 mt-8'>
                <Reveal>
                    <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                        <h3 className='text-xl font-bold mb-4'>Education</h3>
                        <ul className='list-disc list-inside text-gray-300 space-y-2'>
                            <li>
                                <strong>BSc in Psychology</strong> - Redeemer`s University | 2018 
                            </li>
                            <li>
                                Relevant Coursework: Advanced Excel, CSV, CRM, CompTia Project+, and numerous others
                            </li>
                        </ul>
                    </div>
                </Reveal>
                <Reveal>
                    <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                        <h3 className='text-xl font-bold mb-4'>Work Experience</h3>
                        <div className='space-y-4 text-gray-300'>
                            <div>
                                <h4 className='font-semibold'>Software Engineer at ABC</h4>
                                <p>Developed and maintain microservices for cloud-based applications</p>
                            </div>
                            <div>
                                <h4 className='font-semibold'>Intern at DFer</h4>
                                <p>Assited in building frontend components</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
  )
}

export default About
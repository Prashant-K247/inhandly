import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function Contact() {
  return (
    <>
    <div className='px-4 sm:px-10 md:px-20'>
        <div className='flex flex-col items-center justify-center mt-20 border-2 bg-white border-amber-50 shadow-md rounded-2xl ' >
            <h1 className='text-2xl sm:text-3xl md:text-5xl font-extrabold font-sans text-gray-700 px-4 sm:px-10 md:px-20 py-10 '> <span className='text-gray-500'>Say Hi!</span> and tell me <br/> about your experience </h1>
            <p className='text-lg sm:text-xl md:2xl px-4 sm:px-10 md:px-20 text-gray-700 text-left mb-5'>I'd love to hear from you! If you have any questions, feedback, or concerns, please don't hesitate to reach out.</p>
            <a href="https://mail.google.com/mail/?view=cm&to=prshant247@gmail.com" class="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors duration-200 mb-10 " aria-label="Send email to prshant247@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4 mr-2" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                prshant247@gmail.com
            </a>
        </div>

        <div className='flex flex-col md:flex-row gap-5 py-5  '>
          <div className='flex-col w-full md:w-3/4 border-2 bg-white border-amber-50 shadow-md rounded-2xl flex items-center justify-center p-5'>
            <h1 className='text-3xl sm:text-4xl text-gray-800 font-bold text-center'>Get to know <span className='text-gray-600'>me</span>  </h1>

            <div className='px-6 sm:px-10 text-left'>
              <ul className="text-left list-disc">
                <li className="text-gray-800 font-semibold mt-5">
                  👋 Hey! I'm <span className="text-gray-950">Prashant Kawadkar</span>.
                </li>
                <li className="text-gray-800 mt-4">
                  I'm a <span className="font-semibold">B.Tech ECE student at IIIT Bhopal</span> who loves building practical, user-friendly web apps. I specialize in <span className="font-semibold">React</span> and modern UI design, and I enjoy turning ideas into interactive experiences.
                </li>
                <li className="text-gray-800 mt-4">
                   <span className="font-semibold">Software Developer</span> | Actively seeking internship opportunities.
                </li>
              </ul>
            </div>
          </div>
          

          <div className='w-full md:w-1/2  border-2 bg-white border-amber-50 shadow-md rounded-2xl  flex flex-col p-5'>
            <h1 className='text-2xl sm:text-4xl text-left px-6 ml-4 text-gray-800 font-bold mb-4'>
              Find <span className='text-gray-600'>me here.</span>
            </h1>

            <div className="flex flex-col  gap-6  text-gray-600 mt-4 px-10">
              <a href="https://github.com/Prashant-K247" target="_blank" rel="noreferrer" className="text-lg sm:text-2xl inline-flex items-center gap-3 text-gray-700 hover:text-black transition">
                <FaGithub /> Check out my GitHub
              </a>
              <a href="https://linkedin.com/in/prashant-kawadkar-a258a528b/" target="_blank" rel="noreferrer" className="text-lg sm:text-2xl inline-flex items-center gap-3 text-gray-700 hover:text-blue-700 transition">
                <FaLinkedin /> Connect on Linkedin
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=prshant247@gmail.com" className=" text-lg sm:text-2xl inline-flex items-center gap-3 text-gray-700 hover:text-red-600 transition">
                <FaEnvelope /> Reach out via mail
              </a>
            </div>
          </div>

        </div>
    </div>     
    </>
  )
}

export default Contact
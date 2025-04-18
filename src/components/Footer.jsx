import React from 'react'
import { Github,Linkedin ,Mail} from 'lucide-react'
function Footer() {
    return (
        <footer className="w-full py-6 bg-[#fce8f0] dark:bg-gray-800 text-center text-gray-700 text-sm rounded-2xl">
       <p className=' dark:text-gray-400'> 
        Made with <span className="text-red-500">❤</span> by <span className="font-semibold">@Irfan</span>
        </p>


        <div className='flex justify-center gap-20 mt-4 '>
        <a 
        href="https://github.com/IRFAN-KHAN-git"
        target='_blank'
        className='hover:scale-130 transition  '
        >
        <Github className="w-5 h-5 text-gray-700  dark:text-gray-400 hover:text-blue-600" />
        </a>
        <a href="https://www.linkedin.com/in/irfan-khan-007098271/"
        target='_blank'
        className='hover:scale-130 transition'
        >
        
        <Linkedin className="w-5 h-5 text-gray-700  dark:text-gray-400 hover:text-blue-600" />
        </a>
        <a href="mailto:irfanprof9@gmail.com"
        target='_blank'
        className='hover:scale-130 transition'
        >
        <Mail className="w-5 h-5 text-gray-700  dark:text-gray-400 hover:text-blue-600" />

        </a>
        </div>
      </footer>
    )
}

export default Footer

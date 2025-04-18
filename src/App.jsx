import React, { useEffect } from 'react'
import Project from './components/Project'
import Footer from './components/Footer'
import { useState } from 'react';
function App() {
  const [isDark, setIsDark] = useState(true);
    useEffect(()=>{
      if(isDark){
        document.documentElement.classList.add('dark')
      }
      else{
        document.documentElement.classList.remove('dark')
      }
    },[isDark])
  return (
    <main className="overflow-hidden bg-[#ffffff] min-h-screen dark:bg-gray-950  dark:text-white flex justify-center">
      <div
        className=" rounded-2xl p-6 w-[90%] shadow-md relative dark:bg-gray-950"
        id="hero"
      >
        <div id='darkMode' 
        className=' rounded-full absolute top-7 right-20 cursor-pointer'
        onClick={()=> setIsDark(!isDark)}
        
        ><div className='flex h-12 w-12 text-3xl  justify-center items-center'>
            {isDark ? '☀️':'🌙'}
        </div>
          
        
        </div>
        
        <div id="logo" className="flex flex-col items-center">
          <div className="h-72 w-72 rounded-full overflow-hidden shadow-2xl dark:shadow-pink-300">
            <img
              src="img1.jpg"
              alt="Irfan"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="font-bold  text-center text-6xl  px-3 mt-3 py-1 rounded-full mb-2">
            Hey, I'm Irfan 👋
          </p>
          <h4 className="text-center text-gray-700 dark:text-gray-200 font-medium text-2xl pt-3">
            Just building stuff I love 💻✨
          </h4>
        </div>
        
        <Project/>
        <Footer/>
      </div>
    </main>
  )
}

export default App

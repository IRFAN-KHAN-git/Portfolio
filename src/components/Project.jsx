import React from 'react'
import Tilt from 'react-parallax-tilt'
function Project() {
  return (
    <div className="flex flex-col items-center px-4 py-16 ">
      <p className="text-5xl font-bold text-[#2f2f2f] mb-10 dark:text-white">Projects</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Zentry Clone */}
        <Tilt>
        <div className="bg-white  dark:bg-gray-800  rounded-2xl p-6 shadow-pink-300 w-72 h-82 hover:shadow-lg transition">
          <p className="font-bold text-2xl mb-2">Zentry Clone</p>
          <p className="text-gray-600 mb-4 dark:text-gray-400">
          A sleek and minimal landing page built with React and Tailwind CSS.
          Inspired by Zentry’s design, focused on clean UI and smooth transitions.
          </p>
          <div className="flex flex-col gap-2 items-baseline-last">
          <Tilt>
            <a
            target='_blank'
              href="https://zentry-clon.netlify.app/"
              className="bg-pink-400 hover:bg-pink-500 text-white px-3 py-1 rounded-lg text-sm transition"
            >
              View Live
            </a>
            </Tilt>
            <Tilt>
            <a
                target='_blank'
              href="https://github.com/IRFAN-KHAN-git/Zentry-clone"
              className="bg-purple-400 hover:bg-purple-500 text-white px-3 py-1 rounded-lg text-sm transition"
            >
              View Code
            </a>
            </Tilt>
          </div>
        </div>
        </Tilt>

        {/* EnhanceIt */}
        <Tilt>
        <div className="bg-white rounded-2xl p-6 h-82 dark:bg-gray-800 shadow-pink-300 w-72 hover:shadow-lg transition">
          <p className="font-bold text-2xl mb-2">EnhanceIt</p>
          <p className="text-gray-600 mb-4  dark:text-gray-400">
          EnhanceIt is a simple and powerful web app that lets users upload images and enhance them using AI magic — all in one click!
          </p>
          <div className="flex flex-col gap-2 items-baseline-last">
          <Tilt>
            <a
              target='_blank'
              href="https://enhanceit.netlify.app/"
              className="bg-pink-400 hover:bg-pink-500 text-white px-3 py-1 rounded-lg text-sm transition"
            >
              View Live
            </a>
            </Tilt>
            <Tilt>
            <a
              target='_blank'
              href="https://github.com/IRFAN-KHAN-git/Enhancify"
              className="bg-purple-400 hover:bg-purple-500 text-white px-3 py-1 rounded-lg text-sm transition"
            >
              View Code
            </a>
            </Tilt>
            
          </div>
        </div>

        </Tilt>
        {/* Code Reviewer */}
        <Tilt>
        <div className="bg-white rounded-2xl p-6 h-82 dark:bg-gray-800 shadow-pink-300 w-72 hover:shadow-lg transition">
          <p className="font-bold text-2xl mb-2">Code Reviewer</p>
          <p className="text-gray-600 mb-4  dark:text-gray-400">
          An intelligent AI-powered code review platform that analyzes your code, detects errors, suggests optimizations, and enhances maintainability – all in seconds!
          </p>
          <div className="flex flex-col gap-2 items-baseline-last">
          <Tilt>
            <a
            target='_blank'
              href="https://ai-code-review-system-frontend.onrender.com/"
              className="bg-pink-400 hover:bg-pink-500 text-white px-3 py-1 rounded-lg text-sm transition"
            >
              View Live
            </a>
            </Tilt>
            <Tilt>
            <a
            target='_blank'
              href="https://github.com/IRFAN-KHAN-git/AI-code-review-system?tab=readme-ov-file"
              className="bg-purple-400 hover:bg-purple-500 text-white px-3 py-1 rounded-lg text-sm transition"
            >
              View Code
            </a>
            </Tilt>
          </div>
        </div>
        </Tilt>
      </div>
    </div>
  )
}

export default Project

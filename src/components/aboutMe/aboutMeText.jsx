import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'

const aboutMeText = () => {
  return (
    <motion.div 
      variants={fadeIn("left",0)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
      className=' md:pl-14 md:py-10 sm:px-10 sm:py-4 flex flex-col gap-6'>
      <h1 className='text-white font-bold lg:text-5xl sm:text-3xl font-body pt-8 hover:text-shadow-white transition-all duration-500 '>About me</h1>
      <p className='text-justify text-white text-xl max-w-[700px]'>
        I am a dedicated and quick-learning computer science engineer with a strong foundation in web development. I am passionate about building impactful, user-centric websites and web-applications with real-world insights. I am eager to contribute to innovative projects while continuously expanding technical, development and analytical skills in collaborative environment.
     </p>
     <button 
      onClick={() => {
              document.getElementById('project') ?.scrollIntoView({ behavior: 'smooth' });
        }}
      className='bg-lightBrown border-orange/25 border-[1px] w-40 rounded-full hover:text-white hover:scale-110 transition-all duration-500 h-12'
      >
        My Projects
     </button>
    </motion.div>
  )
}

export default aboutMeText

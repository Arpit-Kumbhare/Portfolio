import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'

const experienceTopLeft = () => {
  return (
    <motion.div
      variants={fadeIn("right",0)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
      className='flex flex-col justify-center items-center gap-4 max-w-[300px] ' >
      <p className='text-lightBrown font-bold font-body text-3xl'>2024 Onwards</p>

      <div className='flex flex-col items-center justify-center'>
        <p className='text-lightCyan sm:text-4xl md:text-5xl font-extrabold font-special'>8+</p>
        <p className='text-lightGrey font-bold text-2xl text-center'>Months <br/> of internships</p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <p className='text-lightCyan sm:text-4xl md:text-5xl font-extrabold font-special'>2</p>
        <p className='text-lightGrey font-bold text-2xl text-center'>Mojor<br/>Projects</p>
      </div>

      <p className='text-white font-body sm:text-base md:text-xl text-center '>Experience with multiple internships for almost a year and counting where I worked on many projects.</p>

    </motion.div>
  )
}

export default experienceTopLeft

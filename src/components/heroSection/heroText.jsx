import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'

const heroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center md:pb-20 md:pl-24'>

      <motion.h2
        variants={fadeIn("down",0)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0}}
        className='font-special lg:text-2xl sm:text-xl uppercase text-grey '>Full Stack Web Developer</motion.h2>
      
      <motion.h1
        variants={fadeIn("right",0)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0}} 
        className='sm:text-4xl md:text-6xl lg:text-[4.5rem] font-bold font-heading text-orange shadow-inner'>Arpit<br/><span className='block pt-4'> Kumbhare</span></motion.h1>
      
      <motion.p
        variants={fadeIn("up",0)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0}} 
       className='text-xl md:mt-4 text-white'>Aspiring web development engineer to complete your developer needs !</motion.p>

    </div>
  )
}

export default heroText

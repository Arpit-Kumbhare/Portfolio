import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'

const heroPic = () => {
  return (
    <div className='md:mr-[5rem]'>
      <motion.img
        variants={fadeIn("left",0)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0}}
        src="./images/HeroImage.png" alt="Arpit Kumbhare" className='max-w-[450px] h-auto'/>
    </div>
  )
}

export default heroPic

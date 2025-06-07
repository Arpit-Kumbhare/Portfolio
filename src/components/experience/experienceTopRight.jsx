import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'
import ExperienceImage from '/images/experience-image.png'

const experienceTopRight = () => {
  return (
    <motion.div
      variants={fadeIn("left",0)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
    >
      <img src={ExperienceImage} alt="experience image" className='sm:max-w-[300px] md:max-w-[400px]'/>
    </motion.div>
  )
}

export default experienceTopRight

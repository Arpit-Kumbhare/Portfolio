import React from 'react'
import SingleExperience from './singleExperience'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'

const allExperience = () => {
  const Experiences = [
    {
      company:"Ignaite LLC Pvt Ltd",
      job:"Front-end Development Intern",
      location:"New Jersey, US - Remote",
      startDate:"1 January 2024",
      endDate:"31 June 2024",
      reponsibilites:[
          "Co-Lead - Front-End Web Development Team",
          "Designed the UI for web application for SPI(Start-up )",
          "Developed the front-end of SPI collaborating with front-end team",
      ]
    },
    {
      company:"Earntimes Pvt Ltd",
      job:"Full Stack Developer - Intern",
      location:"Bariely, India - Remote",
      startDate:"4 April 2025",
      endDate:"current",
      reponsibilites:[
          "Full Stack Web Developer Intern",
          "Developed landing pages for many web appliactions",
          "Managed End-to-End project development from planning to deployment",
      ]
    }
  ]

  return (
    <motion.div 
      variants={fadeIn("right",0)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
      className='flex lg:flex-row sm:flex-col items-center justify-center gap-4 mt-12'>
      
      
      {Experiences.map((experience,index) => {
        return <>
                <SingleExperience
                  key={index}
                  company = {experience.company}
                  job = {experience.job}
                  location = {experience.location}
                  startDate = {experience.startDate}
                  endDate = {experience.endDate}
                  reponsibilites = {experience.reponsibilites}
                />
                <div className='sm:hidden lg:block'>
                {index < 1 ? <FaArrowRight className='text-white text-7xl'/> : "" }
                </div>
                <div className='sm:block lg:hidden'>
                {index < 1 ? <FaArrowDown className='text-white text-5xl'/> : "" }
                </div>
                </>
      })}
    </motion.div>
  )
}

export default allExperience

import React from 'react'
import ExperienceText from './experienceText'
import ExperienceTop from './experienceTop'
import AllExperience from './allExperience'

const experienceMain = () => {
  return (
    <div id='experience' className='max-w-[1200px] px-4 mx-auto flex flex-col justify-center items-center'>
        <ExperienceText />
        <ExperienceTop />
        <div className='w-full px-4 mx-auto h-1 bg-brown my-2 sm:hidden lg:block'></div>
        <AllExperience />
    </div>
  )
}

export default experienceMain

import React from 'react'
import ExperienceTopRight from './experienceTopRight'
import ExperienceTopLeft from './experienceTopLeft'

const experienceTop = () => {
  return (
    <div className='flex sm:flex-col lg:flex-row justify-between items-center mt-8 sm:gap-6 lg:gap-40 lg:pl-14'>
      <ExperienceTopLeft />
      <ExperienceTopRight />
    </div>
  )
}

export default experienceTop

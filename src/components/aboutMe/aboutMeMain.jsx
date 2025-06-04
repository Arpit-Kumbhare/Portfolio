import React from 'react'
import AboutMeText from './aboutMeText'
import AboutMeImage from './aboutMeImage'

const AboutMeMain = () => {
  return (
    <div className='flex md:flex-row md:items-center md:justify-center sm:flex-col sm:items-center sm:justify-center sm:gap-1 md:gap-8 lg:gap-14'>
     <AboutMeImage />
     <AboutMeText />
      
    </div>
  )
}

export default AboutMeMain

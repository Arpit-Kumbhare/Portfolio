import React from 'react'
import AboutMeImage from '../../../public/images/aboutMeImage.png'

const aboutMeImage = () => {
  return (
    <div className='md:pr-4 md:pt-5'>
      <img src={AboutMeImage} alt="development technologies" className='md:h-[470px] sm:h-[350px] w-auto'/>
    </div>
  )
}

export default aboutMeImage

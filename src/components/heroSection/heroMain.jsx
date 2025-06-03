import React from 'react'
import HeroPic from './heroPic'
import HeroText from './heroText'


const heroMain = () => {
  return (
    <>
        <div className='pt-40 pb-16 px-4 flex md:flex-row lg:flex-row justify-between items-center sm:flex-col'>
        <HeroText />
        <HeroPic />
        </div>
        
    </>
  )
}

export default heroMain

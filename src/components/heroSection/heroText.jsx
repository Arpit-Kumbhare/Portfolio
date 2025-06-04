import React from 'react'

const heroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center md:pb-20 md:pl-24'>

      <h2 className='font-special lg:text-2xl sm:text-xl uppercase text-grey '>Full Stack Web Developer</h2>
      
      <h1 className='sm:text-4xl md:text-6xl lg:text-[4.5rem] font-bold font-heading text-orange shadow-inner'>Arpit<br/><span className='block pt-4'> Kumbhare</span></h1>
      
      <p className='text-xl md:mt-4 text-white'>Aspiring web development engineer to complete your developer needs !</p>

    </div>
  )
}

export default heroText

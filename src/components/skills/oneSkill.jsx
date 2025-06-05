import React from 'react'

const OneSkill = ({imgSvg, text, onHover}) => {
  return (
    <div className='flex justify-center items-center h-[130px] w-[130px] hover:scale-125 transition-all duration-500' 
      onMouseEnter={() => onHover(text)}
      onMouseLeave={() => onHover('')}
    >

      <div className='absolute h-[130px] w-[130px] border-none rounded-full bg-gradient-to-r from-lightBrown via-brown to-darkBrown animate-spin slow-spin hover:scale-110 transition-all duration-500'>

      </div>
      <div className='absolute h-[120px] w-[120px] border-none rounded-full bg-brown'>
        
      </div>

      <div className='relative z-10 flex justify-center items-center h-full w-full'>
          <div className='text-white text-5xl hover:text-lightGrey transition-all duration-500 '>{imgSvg}</div>
      </div> 

    </div>
  )
}

export default OneSkill

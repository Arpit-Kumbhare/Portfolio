import React from 'react'
import { BsArrowDownRightCircleFill } from "react-icons/bs";

const navbarBtn = () => {
  return (
    <button className='text-white mx-1 px-4 py-2 rounded-full text-xl font-bold border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
      Hire me
      <div className='sm:hidden md:block'>
        <BsArrowDownRightCircleFill /> 
      </div>

    </button>
  )
}

export default navbarBtn

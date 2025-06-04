import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

const navbarBtn = () => {
  return (
    <button className='text-white mx-1 px-4 py-2 rounded-full text-xl font-bold border-none border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
      Hire me
      <div className='sm:hidden md:block pb-[3px]'>
        <IoIosArrowDropdown /> 
      </div>

    </button>
  )
}

export default navbarBtn

import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const singleProject = ({project, index}) => {
  return (
    <div className={`flex sm:flex-col gap-4 items-center ` + (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')}>
          
      <div>
          <img src={project.img} alt="project image" className='h-[210px] w-auto rounded-lg '/>
      </div>


      <div className='py-8 max-w-[500px] gap-1 flex flex-col sm:items-center md:items-start'>
            <h2 className='text-white font-extrabold text-xl'>{project.name}</h2>
            
            <p className='text-lightGrey text-sm'>{project.desc}</p>
            
            <a 
              href={project.url}
              target='_blanck'
              rel='noopner noreferrer'>
                <button className='mt-2 text-blue text-xs h-[30px] w-[100px] bg-lightBrown border-[1px] border-darkBrown flex justify-center items-center rounded-lg hover:scale-105 transition-all duration-500'>
                    View <FiArrowUpRight />
                </button>
            </a>
      </div>

    </div>
  )
}

export default singleProject

import React from 'react'

const socialInfo = ({handle, Ico, url}) => {
  return (
    <div className='group relative rounded-full h-[5rem] w-[5rem] flex justify-center items-center border-[1px] border-lightGreyx hover:scale-105 transition-all duration-500'>
      <a href={url} className='flex justify-center items-center'>
        <Ico className="opacity-100 group-hover:opacity-0 transition-opacity duration-500 text-4xl absolute"/>
        <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-semibold text-[10px] text-center'>{handle}</p>
      </a>
    </div>
  ) 
}

export default socialInfo

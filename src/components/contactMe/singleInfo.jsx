import React from 'react'

const singleInfo = ({text, Icon}) => {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <Icon className="text-2xl"/>
      <p>{text}</p>
    </div>
  )
}

export default singleInfo

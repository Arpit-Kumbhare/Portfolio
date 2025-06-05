import React from 'react'

const singleExperience = ({company, job, location, startDate, endDate, reponsibilites}) => {
  return (
    <div>
        <div className='text-xl text-white/60 lg:h-[350px] sm:h-auto lg:w-auto sm:w-auto border-dashed border-[2px] rounded-lg p-4 flex flex-col justify-start items-start hover:scale-105 transition-all duration-500'>
         
          <p className='text-2xl text-white font-extrabold tracking-wide'>{job}</p>
          <br />
          <p className=' text-white'>{company}</p>
          <div className='flex flex-row gap-2'>
              Job tenure :
              <p className='text-blue'>{startDate}</p>
              <p className=' text-white'>-</p>
              <p className='text-green'>{endDate}</p>
          </div>
          <p>Location : {location}</p>
          <br />
          <ul className='ml-3 list-disc'>
            {reponsibilites.map((resp) => {
              return <li>
                          {resp}
                     </li>
            })}
          </ul>

      </div>
    </div>
  )
}

export default singleExperience

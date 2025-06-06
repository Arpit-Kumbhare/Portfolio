import React from 'react'

const contactMeLeft = () => {
  return (
    <div className='flex flex-col gap-4 w-2/5' >

      <h2 className='text-darkBrown text-3xl font-bold'>Get in touch</h2>

      <form action="submit" className='flex flex-col gap-3 max-w-[700px]'>
        <input type="text" placeholder='Your name' required className='text-white p-3 bg-white/10 rounded-lg'/>
        <input type="email" placeholder='Email address' required className='text-white p-3 bg-white/10 rounded-lg'/>
        <textarea placeholder='Message' className='text-white p-3 bg-white/10 rounded-lg'/>
        <button className='text-white p-3 bg-blue/80 rounded-lg font-semibold'>Send</button>
      </form>

    </div>
  )
}

export default contactMeLeft

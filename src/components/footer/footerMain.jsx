import React from 'react'

const footerMain = () => {
    const links = [
        { link: "About Me", section: "about" },
        { link: "Skills", section: "skills" },
        { link: "Experience", section: "experience" },
        { link: "Projects", section: "contact" },
        { link: "Contact", section: "contact" },
    ]

  return (
    <div className='mt-8 mb-4'>
        <div className='h-[2px] w-auto mx-16 bg-lightGrey' >

        </div>

        <div className='flex flex-row justify-between items-center max-w-[1200px] mx-auto mt-6 sm:px-20'>
            <p className='text-white text-4xl font-bold font-body'>Arpit Kumbhare</p>
            <ul className='flex sm:flex-col lg:flex-row gap-4'>
                    {links.map((link,index)=>{
                        return <li 
                            className='text-lightGrey font-body font-semibold'>
                                <a href="#">{link.link}</a>
                            </li>
                    })}
            </ul>
        </div>

        <p className='text-lg text-lightOrange mx-auto text-center'>Thank you for visiting!</p>
    </div>
   
  )
}

export default footerMain


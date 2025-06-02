import React from 'react'

const navbarLinks = () => {
 const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "contact" },
    { link: "Contact", section: "contact" },
 ]
  return (
    <ul className='flex text-white gap-6 font-body text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/25 backdrop-blur-lg lg:bg-black sm:w-full py-4'>

      {links.map((link,index)=>{
        return (
            <li key={index} className='group'>
                <a href="#" className='cursor-pointer text-white hover:text-cyan transition-all duration-500'>
                  {link.link}
                </a>
                <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
            </li>
        );
      })}
    </ul>
  )
}

export default navbarLinks

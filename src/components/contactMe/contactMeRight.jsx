import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import SingleInfo from './singleInfo';
import SocialInfo from './socialInfo';

const contactMeRight = () => {
  return (
    <div className='flex flex-col w-2/5 items-center justify-center gap-4' >
        <div>
            <img src="./images/email-image.png" alt="contact me image" className='max-w-[200px]' />
        </div>
        <div className='flex flex-col gap-4 text-white'>
            <SingleInfo text="arpitkumbhare007@gmail.com" Icon={MdOutlineEmail} />
            <SingleInfo text="+91 7038049126" Icon={MdOutlinePhone} />
            <SingleInfo text="India" Icon={FaLocationDot} />
        </div>
        <div className='flex flex-row gap-4 text-white'>
            <SocialInfo handle="Arpit-Kumbhare" Ico={FaSquareGithub} url="https://github.com/Arpit-Kumbhare" />
            <SocialInfo handle="arpit-kumbhare" Ico={FaLinkedin} url="https://www.linkedin.com/in/arpit-kumbhare/" />
            <SocialInfo handle="arpit.kumbhare" Ico={FaSquareInstagram} url="https://www.instagram.com/arpit.kumbhare/" />
        </div>
    </div>

  )
}

export default contactMeRight

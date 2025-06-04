import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import OneSkill from './oneSkill';

const allSkills = () => {
    const Skills = [
        {
            skill: "HTML",
            icon: TiHtml5
        },
        {
            skill: "Css",
            icon: FaCss3Alt
        },
        {
            skill: "Javascript",
            icon: TbBrandJavascript
        },
        {
            skill: "React",
            icon: FaReact
        },
        {
            skill: "Redux",
            icon: TbBrandRedux
        },
        {
            skill: "Mongodb",
            icon: SiMongodb
        },
        {
            skill: "ExpressJs",
            icon: SiExpress
        },
        {
            skill: "NodeJs",
            icon: FaNode
        },
        {
            skill: "Tailwindcss",
            icon: BiLogoTailwindCss
        }
    ]

  return (
    <div className='flex justify-center items-center relative gap-12 px-[2rem] py-[6rem] max-w-[1200px] mx-auto flex-wrap'>
        {Skills.map((skill, index)=>{
            return <OneSkill key={index} text={skill.text} imgSvg={<skill.icon />} />
        })}


    </div>
  )
}

export default allSkills

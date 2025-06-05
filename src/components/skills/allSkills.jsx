import React from 'react'
import { useState } from 'react';
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
import HoveredSkill from './hoveredSkill';

const allSkills = () => {

    const [hoveredSkill, setHoveredSkill] = useState('');
    
    const Skills = [
        {
            skill: "Html",
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
    <div className=' flex justify-center items-center flex-col'>

        
        <div className='flex justify-center items-center relative gap-12 px-[2rem] py-[4rem] max-w-[1200px] mx-auto flex-wrap'>
             {Skills.map((skill, index)=>{
                 return <OneSkill 
                 key={index} 
                 text={skill.skill} 
                 imgSvg={<skill.icon />}
                 onHover={setHoveredSkill}
                 />
             })}
        </div>

        <div className='sm:hidden lg:flex relative justify-center items-center h-[110px] w-[310px] my-1 border-none rounded-full bg-gradient-to-r from-lightBrown via-brown to-darkBrown animate-pulse -z-10'>

             <div className='absolute  h-[100px] w-[300px] border-none rounded-full bg-brown/100 mix-blend-normal flex justify-center items-center z-0' >

            </div>

            <div className={`font-heading font-semibold tracking-widest absolute flex justify-center items-center hover:opacity duration-500 ${hoveredSkill ? 'opacity:100' : 'opacity-0'} z-10`}>
                    {hoveredSkill && <HoveredSkill skillName={hoveredSkill}/>}
            </div>

        </div>
        
        

    </div>
  )
}

export default allSkills

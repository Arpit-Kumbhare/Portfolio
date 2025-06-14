import React from 'react'
import SingleProject from './singleProject'

const allProjects = () => {
    const Projects = [
        {
            name:"Leetcode Metrics",
            img: './images/leetMetrics.png',
            url: "https://arpit-kumbhare.github.io/LeetMetrics/",
            desc:"Sleek and interactive web application that fetches and displays a user's LeetCode statistics in real time. Built with HTML, CSS, and vanilla JavaScript, it visually represents problem-solving progress across Easy, Medium and Hard difficulties using colorful circular stats and data cards."
        },
        {
            name:"Learners Hub",
            img:'./images/learnersHub.png',
            url:'#',
            desc:'Learners Hub is a responsive website designed using HTML and CSS. It features a clean, modern design with sections for navigation, hero content, testimonials, and a newsletter signup. The website is optimized for different screen sizes and provides a smooth user experience.'
        },
        {
            name:"Weather",
            img:'./images/weather.png',
            url:'#',
            desc:'Modern and responsive weather application built with React that provides real-time weather information for any city. The app features a clean and intuitive user interface with a beautiful background design. It utilizes Axios for efficient API calls to fetch real-time weather data from OpenWeatherMap.'
        },
        {
            name:"Portfolio",
            img:'./images/portfolio.png',
            url:'https://arpit-kumbhare.github.io/Portfolio/',
            desc:'I created this portfolio using Vite-React along with various packages such as react-icons for modern icons, react-scroll for seamless and smooth scrolling and navigation within thes site, also used framer-motion package or currently known as motion for adding animations to elements while using the site.'
        },
    ]
  return (
    <div className='flex flex-col gap-8 max-w-[1200px] mx-auto px-4'>
      {Projects.map((project,index) => {
        return <SingleProject 
                  key={project.name}
                  index={index}
                  project={project}
              />
      })}
    </div>
  )
}

export default allProjects

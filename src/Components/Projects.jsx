import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import collegefinder from '../assets/college-finder1.png'
import zepto from '../assets/zepto.jpg'
import eventbrite from '../assets/eventbrite.png'
import spotify from '../assets/spotify.png'

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    
  };



 const projects =[
    {id:1,img:collegefinder, name:"College-Finder", description:" Html ,CSS ,Java Script ,Bootstrap ,Flask ,Sqlite"},
    {id:2,img:"https://upload.wikimedia.org/wikipedia/en/7/7d/Logo_of_Zepto.png?20230827063407", name:"zepto grocery delivery", description:"React Js ,Tailwind "},
    {id:3,img:"https://miro.medium.com/v2/resize:fit:828/format:webp/0*qBm0AzYENFU0QqcF.png", name:"event brite", description:"React Js,Tailwind ,Django,MySql"},
    {id:4,img:"https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fspotify-clone.gif&w=750&q=75", name:"spotify clone", description:"Html ,CSS ,Java Script"},
  ];

  return (
    <div className=' bg-black z-20 h-screen w-screen'>
        <div className="headline">
            <h1 className=" border-b-2  border-x-gray-200 text-6xl uppercase text-yellow-600 p-16">Projects</h1>
            
        </div>
        <div className=' h-60  pt-36'>
        <div className='  flex  gap-1  mt-12 items-center justify-center  '>
        {
          projects.map(project=>(<ProjectCard key={project.id} project={project} isHovered={hoveredCard === project.id}    onMouseEnter={() => handleMouseEnter(project.id)} onMouseLeave={handleMouseLeave} />)
          )
        }
        </div>
        </div>
      
    </div>
  )
}

export default Projects

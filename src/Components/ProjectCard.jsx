import React from 'react'

const ProjectCard = ({project , isHovered, onMouseEnter, onMouseLeave }) => {
  
  return (
    
    <div
    className='cardcontainer bg-white  project-card items-center  overflow-hidden'
    style={{
      width: isHovered ? '265px' : '260px',
      height:  '300px' ,
      transition: 'width 0.5s',
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    
    
        <img className='h-40 w-[100%] rounded-t-2xl top-0' src={project.img} alt={project.name} />
      <h1 className='font-semibold text-lg p-3'>{project.name}</h1>
        <p className='p-2'>{project.description}</p>

        
    </div>

  )
}

export default ProjectCard

import React from 'react'

const Skillscard = ({ Field,Skills}) => {
  
  return (
     <div className='w-[25vw]'>
       <div className={`outercard w-[40vw]'  bg-yellow-400 p-10 rounded-3xl overflow-hidden `}>
            <div className="innercard w-[12vw] p-3 bg-yellow-400 rounded-3xl relative ">
        <h1 className='uppercase  text-4xl font-semibold p-5'>{Field}</h1>
        {Skills.map((Skills , id ) => ( <div className=' skillitem flex items-center  p-3'>
          <img className='h-10 p-2 ' src={Skills.img} alt={Skills.img} />
          <h1>{Skills.language}</h1>
        </div>))}
            </div>
        </div>
        </div>
    
  )
}

export default Skillscard

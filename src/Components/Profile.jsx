import React from 'react'
import profileImg from '../assets/profile img.png'
import bglessimg from '../assets/profile imgbg.png'
const Profile = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='1'  className='Profile pr-20 pl-20 h-[125vh] w-screen pt-32 z-[999] bg-black rounded-tl-3xl  rounded-tr-3xl relative '>
        <div className="profimg flex justify-center ">
            <img className='profileimg max-sm rounded-3xl' src={profileImg} alt="profileimg" />
            <img src={bglessimg} alt="" className="image-bg-removed max-sm  rounded-3xl" ></img>
        </div>
        <div className="summary p-10">
            <h1 className='text-[5vw] text-yellow-400 font-bold'> Profile</h1>
            <p className='text-xl text-white'>To obtain a challenging web developer position in a dynamic and innovative organization where I can utilize my technical and creative skills to develop and maintain responsive, user-friendly, and visually appealing websites.</p>

        </div>
      
    </div>
  )
}

export default Profile

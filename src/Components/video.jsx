import React from 'react'
import myVideo from '../assets/video1.mp4';

const Video = () => {
  return (
    <div data-scroll data-scroll-speed='-0.5' className=' relative z-10  h-fit w-screen'>
     

      <div className="vdodiv  overflow-hidden ">
      <h1 className=" video-text centrotext text-[9vw]  absolute z-20   left-[30%]  bottom-[30%] text-yellow-400 font-bold">Vasudev.Pavan</h1>
      <video className=" object-cover video w-[100%]" src={myVideo} autoPlay loop muted ></video>
      </div>
    </div>
  )
}

export default Video;

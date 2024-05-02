import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    
  return (
    <div data-scroll   data-scroll-speed='-0.001' className='w-screen py-[6%] rounded-tl-3xl  rounded-tr-3xl bg-yellow-400 flex absolute z-20  '>
        <div className=" gap-10  border-t-2 border-b-2 border-black flex whitespace-nowrap items-center justify-center overflow-hidden">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity ,duration:17}} className='text-white text-with-border  uppercase leading-none text-[45vh]  font-bold'>we are web devs</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity ,duration:17}} className='text-white  text-with-border uppercase leading-none text-[45vh]  font-bold'>we are web devs</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity ,duration:17}} className='text-white  text-with-border uppercase leading-none text-[45vh]  font-bold'>we are web devs</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee

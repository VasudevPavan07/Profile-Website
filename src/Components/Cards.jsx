import React from 'react'
import {motion ,useTransform ,useScroll} from 'framer-motion'
import { useRef } from 'react'
import Skillscard from './Skillscard'
import html from '../assets/html.png'
import react from '../assets/react.svg'
import javascript from '../assets/java-script.png'
import css from '../assets/css-3.png' 
import nodejs from '../assets/node-js.svg'
import express from '../assets/express.svg'
import flask from '../assets/flask.svg'
import django from '../assets/django-original.svg'
import mongo from '../assets/file-type-mongo.svg'
import sqlite from '../assets/sqlite.svg'
import mysql from '../assets/mysql-original-wordmark.svg'


const Cards = () => {
    const targetRef =useRef<HTMLDivElement | null>(null);
    const {scrollYProgress}=useScroll({
     target:targetRef,

    });
const skills ={
     Frontend :[{ img:html,language:"HTML"},
    {img:css,language:"CSS"},
    { img:javascript,language:"Java Script"},
    { img:react,language:"React Js"},
    ],
     Backend :[{id:1, img:nodejs,language:"Node Js"},
    {id:2, img:express,language:"Express Js"},
    {id:3, img:flask,language:"Python Flask"},
    {id:4, img:django,language:"Djongo"},

    ],
     Database :[{id:1, img:mongo,language:"Mongo Db"},
    {id:2, img:sqlite,language:"Sqlite"},
    {id:3, img:mysql,language:"My Sql"},]}

    const x =useTransform(scrollYProgress ,[0,1],["50%","-55%"]);
  return (
    
    <motion.div data-scroll data-scroll-orientation=" " data-scroll-speed='0.01' useref={targetRef} className='profilecards relative h-[700vh] w-screen bg-black '>
                 
        <motion.div  className=" h-screen top-0 sticky overflow-hidden flex  items-center   ">
            <motion.div   style={{x}} className="flex  items-center justify-center gap-5 w-[90vw] ">
           <h1 className= 'head-text text-yellow-400  font-semibold '>Skills</h1>
       
       <Skillscard Field="Frontend" Skills={skills.Frontend} />
       <Skillscard Field="Backend" Skills={skills.Backend} />
       <Skillscard Field="Database" Skills={skills.Database} />
       
        </motion.div>
        </motion.div>
      
    </motion.div>
  )
}

export default Cards

import React from 'react'
import Contact from './Contact'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import telegram from '../assets/telegram.png'

const ContactSection = () => {
const contacts =[
  {id:3,img:linkedin,name:"Linkedin"},
{id:2,img:twitter,name:"Twitter"},
{id:1,img:instagram, name:"instagram"},
{id:4,img:github,name:"Github"},
{id:5,img:telegram,name:"Telegram"},
{id:6,img:facebook,name:"facebook"},
];

  return (
    <div  className="Socials w-screen h-screen mb-28 bg-black relative z-50"> 
    <h1 className='text-7xl text-yellow-500 pl-24 pb-20 pt-36 border-b-2'>Socials</h1>
    <div className='p-20 '>
        <div className='text-white grid grid-cols-2 justify-items-center  place-items-center p-10 gap-20  '>
            {contacts.map(icons=>(<Contact   key={icons.id} contact={icons} />))}
        </div>
        </div>
    </div>
  )
}

export default ContactSection

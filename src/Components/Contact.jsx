import React from 'react'

const Contact = ({contact}) => {
  return (
    <div>
        <div className="socialicon p-2 flex items-center justify-center ">
             <img src={contact.img} alt={contact.name} className='h-10 p-1 ' />
             <h1>{contact.name}</h1>
        </div>
      
    </div>
  )
}

export default Contact

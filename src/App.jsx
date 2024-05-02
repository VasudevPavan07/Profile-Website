import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Marquee from './Components/Marquee.jsx'
import Profile from './Components/Profile.jsx'
import Cards from './Components/Cards.jsx'
import Projects from './Components/Projects.jsx'
import LocomotiveScroll from 'locomotive-scroll';
import Video from './Components/video.jsx'
import ContactSection from './Components/ContactSection.jsx'
import Footer from './Components/Footer.jsx'
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-black w-screen'>
      <Navbar />
      <Video />
    <Marquee />
    <Profile />
    <Cards />
    <Projects />
    <ContactSection />
    <Footer />
    
    
    </div>
  )
}

export default App
